import {
  Feature,
  FeatureCollection,
  MultiPolygon,
  Polygon,
  featureCollection,
  polygon,
} from '@turf/turf';
import axios from 'axios';
import { isNumber } from 'lodash';
import useSWR from 'swr/immutable';

interface BaseProps {
  location: number | string;
  simplified: boolean;
  source?: string;
}

interface RequestController {
  signal?: AbortSignal;
}

export interface QueimadasRequestProps extends BaseProps, RequestController {
  page?: number;
  per_page?: number;
}

export interface QueimadasRequestResponse {
  data: Polygon | MultiPolygon;
  pages?: { current: number; next?: number; last?: number };
}

function transformRecord(object: Record<string, any>) {
  return Object.keys(object).reduce(
    (memo, key) => {
      const value = object[key];
      return { ...memo, [key]: value === undefined ? value : `${value}` };
    },
    {} as Record<string, string>
  );
}

async function request(opts: QueimadasRequestProps): Promise<QueimadasRequestResponse> {
  const params = {
    page: opts.page || 1,
    per_page: opts.per_page || 1000,
    detailed: !opts.simplified,
  };

  const source = opts.source || 'latest';
  const endpoint = isNumber(opts.location)
    ? opts.location > 100
      ? 'municipios'
      : 'estados'
    : 'biomas';

  const querystring = new URLSearchParams(transformRecord(params)).toString();
  const url = `/api/queimadas/${source}/${endpoint}/${opts.location}?${querystring}`;

  const { data, headers } = await axios.get<Polygon | MultiPolygon>(url, {
    signal: opts?.signal,
    validateStatus: (status) => /2\d{2}/g.test(`${status}`),
  });

  const nextHeader = headers['x-queimadas-pages-next'];
  const lastHeader = headers['x-queimadas-pages-last'];

  return {
    data,
    pages: {
      current: parseInt(headers['x-queimadas-pages-current'] || `${opts.page}`),
      next: nextHeader ? parseInt(nextHeader) : undefined,
      last: lastHeader ? parseInt(lastHeader) : undefined,
    },
  };
}

export async function queimadas(
  props: BaseProps & RequestController
): Promise<FeatureCollection<Polygon>> {
  let dadosCompilados: Feature<Polygon>[] = [];

  let status: NonNullable<QueimadasRequestResponse['pages']> = { current: 0, next: 1, last: 1 };

  do {
    const { pages, data } = await request({ ...props, page: status.next, per_page: 1000 });

    if (!pages || !data) break;

    dadosCompilados.push(
      ...(data.type === 'Polygon'
        ? [polygon(data.coordinates)]
        : data.coordinates.map((coords) => polygon(coords)))
    );

    status = pages;
  } while (status.next && status.last && status.current < status.last);

  return featureCollection(dadosCompilados, { id: props.location });
}

export function useQueimadas(id: number | string, source?: string, simplified: boolean = false) {
  return useSWR([id, source, simplified], ([id, source, simplified]) =>
    queimadas({ location: id, source, simplified })
  );
}
