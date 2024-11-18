import { RefObject} from 'react';
import { MapContainer, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController';
import Location from './Location';
import MapLayer from './MapLayer';
import PopupHandler from './PopupHandler';
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
        <PopupHandler />

        {props.showLocalizacao && <Location />}

      </MapContainer>
    </>
  );
}