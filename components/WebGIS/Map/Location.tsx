import React, { useEffect, useState } from 'react';
import { Popup, useMapEvents, Marker } from 'react-leaflet';
import L, { ErrorEvent } from 'leaflet';
import ToastError from '../ToastError';

const iconMarker = new L.Icon({
  iconUrl: '/location.png',
  iconSize: [50, 50],
});

export default function Location() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [error, setError] = useState<ErrorEvent | undefined>();

  const map = useMapEvents({
    locationfound(e) {
      setError(undefined);
      setLagitudeAndLongitude(e.latlng.lat, e.latlng.lng);
    },
    locationerror(err) {
      setError(err);
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

  return error ? (
    <ToastError message="Erro ao tentar encontrar a localização" />
  ) : (
    <Marker icon={iconMarker} position={[lat, lng]}>
      <Popup>Você está aqui</Popup>
    </Marker>
  );
}
