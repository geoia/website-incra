import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import axios from 'axios';
import turf from 'turf';

interface ObservableProps {
  onStart?: () => void;
  onFinish?: (page: number) => void;
  onUpdate?: (current: number, end?: number) => void;
}

interface BaseProps {
  municipio: number;
  simplified: boolean;
  source?: string;
}

interface PaginationProps {
  page?: number;
  per_page?: number;
}

type PagesMeta = {
  current: number;
  next?: number;
  last?: number;
};

const nothing = [{}];

async function requestData(opts: BaseProps & PaginationProps & { controller?: AbortController }) {
  const params: Record<string, string> = {
    page: `${opts.page || 1}`,
    per_page: `${opts.per_page || 1000}`,
    detailed: `${!opts.simplified}`,
  };

  if (opts.source) params.source = opts.source;

  const querystring = new URLSearchParams(params).toString();

  const { data, headers, status } = await axios.get<Record<string, any>>(
    `/api/queimadas/municipio/${opts.municipio}?${querystring}`,
    { signal: opts?.controller?.signal }
  );

  if (status !== 200) return { data: nothing };

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

export default function QueimadasGeoJson(props: BaseProps & ObservableProps) {
  const { municipio, simplified, source } = props;

  const [pages, setPages] = useState<PagesMeta>({ current: 0 });
  const [data, setData] = useState<Record<string, any>[]>([]);

  useEffect(() => setPages({ current: 0, next: 1 }), []);

  useEffect(() => {
    setData([]);
    setPages({ current: 0, next: 1 });
  }, [props.municipio, props.simplified, props.source]);

  useEffect(() => {
    if (!pages || !pages.next) {
      if (props.onFinish) {
        props.onFinish(pages.current);
      }

      return;
    }

    if (props.onStart) props.onStart();

    const controller = new AbortController();

    requestData({
      municipio,
      simplified,
      page: pages.next,
      per_page: 1000,
      source: props.source,
      controller,
    })
      .then((result) => {
        if (result.data !== null) {
          setData([...data, result.data]);
          setPages(result.pages as PagesMeta);
          if (props.onUpdate)
            props.onUpdate(result.pages?.current as any, result.pages?.last as any);
        }
      })
      .catch((err) => (err.name !== 'CanceledError' ? Promise.reject(err) : Promise.resolve()));

    return () => controller.abort('unmounted');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages?.current, pages?.next]);

  return (
    <GeoJSON
      data={data as any}
      pathOptions={{
        fillColor: simplified ? '#ff0000' : '#ff0000',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: simplified ? '#ff0000' : '#ff0000',
      }}
      key={pages?.current}
    />
  );
}

export async function getQueimadasData(props: BaseProps) {
  let nextPage: number | undefined = 1;
  let dadosCompilados: any[] = [];

  while (nextPage) {
    await requestData({ ...props, page: nextPage, per_page: 1000 }).then((resultado) => {
      if (resultado.data === null) {
        nextPage = undefined;
        console.log(1);
        return;
      }

      dadosCompilados.push(resultado.data);
      nextPage = resultado.pages?.next;
    });
  }

  return turf.featureCollection(
    dadosCompilados.reduce((memo, atual) => memo.concat(atual.features), [])
  );
}
