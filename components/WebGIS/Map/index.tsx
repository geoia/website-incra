import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import MapController from './MapController';
import QueimadasGeoJson from './QueimadasLayer';
import Location from './Location';
import { LimitsLayer } from './LimitsLayer';

const center = {
  lat: -20.2634,
  lng: -54.3847,
};

interface Props {
  showLocalizacao: boolean;
  showLimitVisibility: boolean;
  showQueimadas: boolean;
  simplificado: boolean;
  municipio: number;
  source?: string;
  forwardRef?: React.RefObject<L.Map>;
}

function Map({
  showLocalizacao,
  showLimitVisibility,
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

      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

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
