import { useEffect, useState } from 'react';
import {
  Feature,
  FeatureCollection,
  MultiPolygon,
  Polygon,
  featureCollection,
  polygon,
} from '@turf/turf';
import axios from 'axios';

interface BaseProps {
  municipio: number;
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
  const endpoint = opts.municipio > 100 ? 'municipios' : 'estados';
  const querystring = new URLSearchParams(transformRecord(params)).toString();
  const url = `/api/queimadas/${source}/${endpoint}/${opts.municipio}?${querystring}`;

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
  let nextPage: number | undefined = 1;
  let dadosCompilados: Feature<Polygon>[] = [];

  while (nextPage) {
    await request({ ...props, page: nextPage, per_page: 1000 }).then((resultado) => {
      if (!resultado.data) {
        nextPage = undefined;
        return;
      }

      dadosCompilados.push(
        ...(resultado.data.type === 'Polygon'
          ? [polygon(resultado.data.coordinates)]
          : resultado.data.coordinates.map((coords) => polygon(coords)))
      );

      nextPage = resultado.pages?.next;
    });
  }

  return featureCollection(dadosCompilados, { id: props.municipio });
}

type HookReturnType = { isLoading: boolean; data?: FeatureCollection<Polygon>; error?: any };

export function useQueimadas(id: number, source?: string, simplified: boolean = false) {
  const [state, setState] = useState<HookReturnType>({ isLoading: false });

  useEffect(() => {
    setState({ isLoading: true });
    queimadas({ municipio: id, source, simplified })
      .then((data) => setState({ isLoading: false, data }))
      .catch((error) => setState({ isLoading: false, error }));
  }, [id, source, simplified]);

  return state;
}
