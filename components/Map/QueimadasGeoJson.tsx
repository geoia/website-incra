import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import axios from 'axios';

interface ObservableProps {
  onStart?: () => void;
  onFinish?: (page: number) => void;
  onUpdate?: (current: number, end?: number) => void;
}

interface BaseProps {
  municipio: number;
  simplified: boolean;
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

async function requestData(opts: BaseProps & PaginationProps & { controller?: AbortController }) {
  const querystring = new URLSearchParams({
    page: `${opts.page || 1}`,
    per_page: `${opts.per_page || 1000}`,
  }).toString();

  const { data, headers, status } = await axios.get<Record<string, any>>(
    `/api/queimadas/municipio/${opts.municipio}?${querystring}`,
    { signal: opts?.controller?.signal }
  );

  if (status !== 200) return { data: null };

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
  const { municipio, simplified } = props;

  const [pages, setPages] = useState<PagesMeta>({ current: 0 });
  const [data, setData] = useState<Record<string, any>[]>([]);

  useEffect(() => setPages({ current: 0, next: 1 }), []);

  useEffect(() => {
    if (!pages || !pages.next) {
      if (props.onFinish) props.onFinish(pages.current);
      return;
    }

    if (props.onStart) props.onStart();

    const controller = new AbortController();

    requestData({ municipio, simplified, page: pages.next, per_page: 1000, controller })
      .then((result) => {
        if (result.data !== null) {
          setData([...data, result.data]);
          setPages(result.pages);
          if (props.onUpdate) props.onUpdate(result.pages.current, result.pages.last);
        }
      })
      .catch((err) => (err.name !== 'AbortError' ? Promise.reject(err) : Promise.resolve()));

    return () => controller.abort('unmounted');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages?.current, pages?.next]);

  return (
    <GeoJSON
      data={data as any}
      pathOptions={{
        fillColor: simplified ? '#0055ff' : '#ff5500',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: simplified ? '#0055ff' : '#ff5500',
      }}
      key={pages?.current}
    />
  );
}
