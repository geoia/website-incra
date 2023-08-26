import React, { useEffect, useState } from 'react';
import { Popup, useMapEvents, Marker } from 'react-leaflet';
import L from 'leaflet';
import ToastError from '../principal/ToastError';

const iconMarker = new L.Icon({
  iconUrl: '/location.png',
  iconSize: [50, 50],
});

export default function Localizacao() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isError, setIsError] = useState(false);

  const map = useMapEvents({
    locationfound(e) {
      setIsError(false);
      setLagitudeAndLongitude(e.latlng.lat, e.latlng.lng);
    },
    locationerror() {
      setIsError(true);
    },
  });

  function setLagitudeAndLongitude(latitude: number, longitude: number) {
    setLat(latitude);
    setLng(longitude);
  }

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 7 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isError ? (
    <ToastError message="Erro ao tentar encontrar a localização" />
  ) : (
    <Marker icon={iconMarker} position={[lat, lng]}>
      <Popup>Você está aqui</Popup>
    </Marker>
  );
}
