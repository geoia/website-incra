import React from 'react';
import { MapContainer, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController';
import QueimadasLayer from './QueimadasLayer';
import Location from './Location';
import { LimitsLayer } from './LimitsLayer';
import SatelliteLayer from './SatelliteLayer';
import { Feature, Polygon, feature } from '@turf/turf';
import { getQueimadas } from '../../../lib/queimadas';
import { Box, CircularProgress } from '@mui/material';
import useLimitesMunicipios from '../../../hooks/useLimitesMunicipios';

interface Props {
  showLocalizacao: boolean;
  showLimitVisibility: boolean;
  showSatellite: boolean;
  showQueimadas: boolean;
  simplificado: boolean;
  municipio: number;
  source?: string;
  forwardRef?: React.RefObject<L.Map>;
}

type MapContext = {
  queimadas?: Array<Feature<Polygon>>;
  municipio?: Feature<Polygon>;
};

export const MapContext = React.createContext<MapContext>({});

export default function Map(props: Props) {
  const { data: limitesMunicipais, isLoading: isLoadingLimites } = useLimitesMunicipios(
    props.municipio
  );

  const [context, setContext] = React.useState<MapContext>({
    municipio: limitesMunicipais && feature(limitesMunicipais),
  });

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    getQueimadas({
      municipio: props.municipio,
      simplified: props.simplificado,
      source: props.source,
      signal: controller.signal,
    })
      .then((result) => {
        setContext({ ...context, queimadas: result.features });
      })
      .catch((err) => {
        if (err.name !== 'CanceledError') return Promise.reject(err);
        return Promise.resolve();
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort('unmounted');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.municipio, props.simplificado, props.source]);

  return (
    <MapContext.Provider value={context}>
      {(isLoading || isLoadingLimites) && (
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
      <MapContainer
        center={{
          lat: -20.2634,
          lng: -54.3847,
        }}
        zoom={0}
        zoomControl={false}
        minZoom={5}
        scrollWheelZoom={true}
        style={{ width: '100vw', height: '100vh', zIndex: '0' }}
        inertia={false}
        inertiaDeceleration={0}
        zoomAnimation={true}
        maxBoundsViscosity={10}
        preferCanvas={true}
        maxBounds={[
          [-32.63463151377654, -90.89969605983609],
          [5.63463151377654, -20.89969605983609],
        ]}
      >
        <MapController ref={props.forwardRef} />
        <ScaleControl position="bottomleft" />
        <SatelliteLayer type={props.showSatellite ? 'satellite' : 'streets'} />

        {props.showLocalizacao && <Location />}

        {!props.showLimitVisibility && (
          <LimitsLayer key={props.municipio} showSatellite={props.showSatellite} />
        )}

        {props.showQueimadas && <QueimadasLayer />}
      </MapContainer>
    </MapContext.Provider>
  );
}
