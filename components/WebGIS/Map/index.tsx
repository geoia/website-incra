import { RefObject, useState, useRef } from 'react';
import { MapContainer, ScaleControl, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController';
import Location from './Location';
import MapLayer from './MapLayer';
import PopupContent from './PopupContent';
import { Feature, Geometry } from '@turf/turf';

interface Props {
  showLocalizacao: boolean;
  forwardRef?: RefObject<L.Map>;
}

export default function Map(props: Props) {
  const mapType = 'satellite';

  const defaultCenter: Feature<Geometry> = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-70.811, -9.0238],
    },
    properties: {},
  };

  const [popupData, setPopupData] = useState<{ lat: number; lng: number; caminhoImagem: string | undefined } | null>(
    null
  );

  const popupRef = useRef<L.Popup | null>(null);

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        setPopupData({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          caminhoImagem: '/marcos/teste.jpg',
        });

        if (popupRef.current) {
          popupRef.current.setLatLng(e.latlng)
          .openOn(e.target);
        }
      },
    });
    return null;
  };

  return (
    <>
      <MapContainer
        center={{
          lat: -70.0,
          lng: -9.0,
        }}
        zoom={0}
        zoomControl={false}
        minZoom={5}
        scrollWheelZoom={true}
        style={{ position: 'absolute', width: '100dvw', height: '100dvh', zIndex: '0' }}
        inertia={false}
        inertiaDeceleration={0}
        zoomAnimation={true}
        maxBoundsViscosity={10}
        preferCanvas={true}
        maxBounds={[
          [-11.0, -72.0],
          [-7.5, -67.8],
        ]}
      >
        <MapController ref={props.forwardRef} center={defaultCenter} zoom={7} />
        <ScaleControl position="bottomleft" />
        <MapLayer type={mapType} />
        <MapClickHandler />

        {props.showLocalizacao && <Location />}

        {popupData && (
          <Popup ref={popupRef} position={[popupData.lat, popupData.lng]}>
            <PopupContent caminhoImagem={popupData.caminhoImagem} />
          </Popup>
        )}

      </MapContainer>
    </>
  );
}
