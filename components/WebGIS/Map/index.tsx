import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController';
import QueimadasGeoJson from './QueimadasLayer';
import Location from './Location';
import { LimitsLayer } from './LimitsLayer';
import SatelliteLayer from './SatelliteLayer'; 

const center = {
  lat: -20.2634,
  lng: -54.3847,
};

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

function Map({
  showLocalizacao,
  showLimitVisibility,
  showSatellite,
  showQueimadas,
  simplificado,
  municipio,
  source,
  forwardRef,
}: Props) {
  return (
    <MapContainer
      center={center}
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
      <MapController ref={forwardRef} />

      <SatelliteLayer showSatellite = {showSatellite}/>

      {showLocalizacao && <Location />}

      {showQueimadas && (
        <QueimadasGeoJson municipio={municipio} simplified={simplificado} source={source} />
      )}

      <LimitsLayer
        municipio={municipio}
        key={municipio}
        showLimitVisibility={showLimitVisibility}
      />
    </MapContainer>
  );
}

export default Map;
