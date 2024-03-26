import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { QueimadasRequestResponse, request } from '../../../lib/queimadas';
import { Feature, feature, featureCollection } from '@turf/turf';

interface ObservableProps {
  onStart?: () => void;
  onFinish?: (page: number) => void;
  onUpdate?: (current: number, end?: number) => void;
}

export interface BaseProps {
  municipio: number;
  simplified: boolean;
  source?: string;
}

type PagesMeta = NonNullable<QueimadasRequestResponse['pages']>;

export default function QueimadasGeoJson(props: BaseProps & ObservableProps) {
  const [pages, setPages] = useState<PagesMeta>({ current: 0, next: 1 });
  const [data, setData] = useState<Feature[]>([]);

  useEffect(() => {
    setData([]);
    setPages({ current: 0, next: 1 });
  }, [props.municipio, props.simplified, props.source]);

  useEffect(() => {
    if (!pages || !pages.next) {
      if (props.onFinish) props.onFinish(pages.current);
      return;
    }

    if (props.onStart) props.onStart();

    const controller = new AbortController();

    request({
      municipio: props.municipio,
      simplified: props.simplified,
      page: pages.next,
      per_page: 1000,
      source: props.source,
      controller,
    })
      .then((result) => {
        if (result.data !== null) {
          setData([...data, feature(result.data)]);
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
      data={featureCollection(data)}
      pathOptions={{
        fillColor: props.simplified ? '#ff0000' : '#ff0000',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: props.simplified ? '#ff0000' : '#ff0000',
      }}
      key={pages?.current}
    />
  );
}
