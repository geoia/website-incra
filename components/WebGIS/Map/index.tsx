import { RefObject, useMemo } from 'react';
import { MapContainer, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController';
import QueimadasLayer from './QueimadasLayer';
import Location from './Location';
import { LimitsLayer } from './LimitsLayer';
import MapLayer from './MapLayer';
import { Box, CircularProgress } from '@mui/material';
import { useLimites } from '../../../hooks/useLimites';
import { useQueimadas } from '../../../hooks/useQueimadas';

interface Props {
  showLocalizacao: boolean;
  showLimitVisibility: boolean;
  showSatellite: boolean;
  showQueimadas: boolean;
  simplificado: boolean;
  municipio: number;
  source?: string;
  forwardRef?: RefObject<L.Map>;
}

export default function Map(props: Props) {
  const municipio = useLimites(props.municipio);
  const queimadas = useQueimadas(props.municipio, props.source, props.simplificado);

  const isLoading = useMemo(
    () => municipio.isLoading || queimadas.isLoading,
    [municipio.isLoading, queimadas.isLoading]
  );

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
        <MapController ref={props.forwardRef} center={municipio.data} />
        <ScaleControl position="bottomleft" />
        <MapLayer type={props.showSatellite ? 'satellite' : 'streets'} />

        {props.showLocalizacao && <Location />}

        {!props.showLimitVisibility && municipio.data && (
          <LimitsLayer
            municipio={municipio.data}
            queimadas={queimadas.data}
            showSatellite={props.showSatellite}
          />
        )}

        {props.showQueimadas && queimadas.data && <QueimadasLayer queimadas={queimadas.data} />}
      </MapContainer>
    </>
  );
}
