import React, { useState, useRef } from 'react';
import { useMapEvents, Popup } from 'react-leaflet';
import PopupContent from './PopupContent';

interface PopupHandlerProps {
  caminhoImagemPadrao?: string;
}

const PopupHandler: React.FC<PopupHandlerProps> = ({ caminhoImagemPadrao }) => {
  const [popupData, setPopupData] = useState<{ lat: number; lng: number; caminhoImagem: string | undefined } | null>(
    null
  );

  const popupRef = useRef<L.Popup | null>(null);

  useMapEvents({
    click: (e) => {
      setPopupData({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        caminhoImagem: caminhoImagemPadrao,
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
          <PopupContent caminhoImagem="/marcos/teste.jpg" />
        </Popup>
      )}
    </>
  );
};

export default PopupHandler;
