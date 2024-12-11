import React  from 'react';
import { Popup } from 'react-leaflet';
import PopupContent from './PopupContent';

const PopupHandler = ({ popupData }: { popupData: { lat: number; lng: number; caminhoImagem?: string } }) => {
  return (
    <Popup position={[popupData.lat, popupData.lng]}>
      <PopupContent caminhoImagem={popupData.caminhoImagem} />
    </Popup>
  );
};

export default PopupHandler;
