import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from './teste';
import { pontos } from './pontos';

const center = [40.63463151377654, -97.89969605983609];

export default function Map() {
  return (
    <MapContainer
      center={[40.63463151377654, -97.89969605983609]}
      zoom={4}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ width: '100vw', height: '100vh', zIndex: '0' }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {statesData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

        return (
          <Polygon
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              color: 'white',
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  dashArray: '',
                  fillColor: '#BD0026',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: 'white',
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: '3',
                  color: 'white',
                  fillColor: '#FD8D3C',
                });
              },
              click: (e) => {},
            }}
          />
        );
      })}
    </MapContainer>
  );
}
