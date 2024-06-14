import { MultiPolygon, Polygon, featureCollection, feature, area } from '@turf/turf';
import axios from 'axios';

interface BaseProps {
  municipio: number;
  simplified: boolean;
  source?: string;
}

export interface QueimadasRequestProps extends BaseProps {
  page?: number;
  per_page?: number;
  controller?: AbortController;
}

export interface QueimadasRequestResponse {
  data: Polygon | MultiPolygon;
  pages?: { current: number; next?: number; last?: number };
}

function transformRecord(object: Record<string, any>) {
  return Object.keys(object).reduce((memo, key) => {
    const value = object[key];
    return { ...memo, [key]: value === undefined ? value : `${value}` };
  }, {} as Record<string, string>);
}

export async function request(opts: QueimadasRequestProps): Promise<QueimadasRequestResponse> {
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
    signal: opts?.controller?.signal,
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

export async function getQueimadas(props: BaseProps) {
  let nextPage: number | undefined = 1;
  let dadosCompilados: any[] = [];
  let totalArea = 0;

  while (nextPage) {
    await request({ ...props, page: nextPage, per_page: 1000 }).then((resultado) => {
      if (resultado.data === null) {
        nextPage = undefined;
        return;
      }

      const polygonFeature = feature(resultado.data);
      dadosCompilados.push(polygonFeature);
      totalArea += area(polygonFeature);  
      nextPage = resultado.pages?.next;
    });
  }

  return {
    geoJson: featureCollection(dadosCompilados.reduce((memo, atual) => memo.concat(atual), [])),
    totalArea,
  };
}
