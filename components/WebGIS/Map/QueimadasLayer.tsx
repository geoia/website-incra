import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { QueimadasRequestResponse, request } from '../../../lib/queimadas';
import { Feature, feature, featureCollection } from '@turf/turf';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData([]);
    setPages({ current: 0, next: 1 });
  }, [props.municipio, props.simplified, props.source]);

  useEffect(() => {
    if (!pages || !pages.next) {
      if (props.onFinish) props.onFinish(pages.current);
      setIsLoading(false);
      return;
    }

    if (props.onStart) props.onStart();

    const controller = new AbortController();
    setIsLoading(true); // Inicia o loading quando começa a requisição

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
        setIsLoading(false); // termina o loading quando a requisição é bem sucedida
      })
      .catch((err) => {
        setIsLoading(false); // para o loading em caso de erro
        if (err.name !== 'CanceledError') return Promise.reject(err);
        return Promise.resolve();
      });

    return () => controller.abort('unmounted');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages?.current, pages?.next]);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo transparente
            zIndex: 1000, // garante que o loading apareça por cima de tudo
          }}
        >
          <CircularProgress />
        </Box>
      )}
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
    </>
  );
}
