import React, { useState, useRef } from 'react';
import { useMapEvents, Popup } from 'react-leaflet';
import PopupContent from './PopupContent';

const PopupHandler = () => {
  const [popupData, setPopupData] = useState<{ lat: number; lng: number; caminhoImagem: string | undefined } | null>(
    null
  );

  const popupRef = useRef<L.Popup | null>(null);

  useMapEvents({
    click: (e) => {
      setPopupData({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        caminhoImagem: "/marcos/teste.jpg",
      });

      if (popupRef.current) {
        popupRef.current.setLatLng(e.latlng).openOn(e.target);
      }
    },
  });

  return (
    <>
      {popupData && (
        <Popup ref={popupRef} position={[popupData.lat, popupData.lng]}>
          <PopupContent caminhoImagem={popupData.caminhoImagem} />
        </Popup>
      )}
    </>
  );
};

export default PopupHandler;
