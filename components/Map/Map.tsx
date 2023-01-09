import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Corumba } from './teste';
import L from 'leaflet';
import { pontos } from './pontos';
import { estados } from './brasil';

const center = [-20.2634, -54.3847];

const fogo = L.icon({
  iconUrl: '/iconeFogo.png',
  iconSize: [25, 25],
});

export default function Map() {
  return (
    <MapContainer
      center = {center}
      zoom={5}
      zoomControl={false}
      minZoom={5}
      scrollWheelZoom={true}
      style={{ width: '100vw', height: '100vh', zIndex: '0' }}
      inertia={false}
      inertiaDeceleration={0}
      zoomAnimation={false}
      maxBoundsViscosity={10}
      maxBounds={[
        //sudoeste
        [-32.63463151377654, -90.89969605983609],
        //nordeste
        [5.63463151377654, -20.89969605983609],
      ]}
    >
      /**limite sudoeste */
    <Marker icon={fogo} position={[-32.63463151377654, -90.89969605983609]}/>
    
    /**limite nordeste */
    <Marker icon={fogo} position={[5.63463151377654, -20.89969605983609]}/>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />


      /**Bordas dos municípios */
      {estados.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

        return (
          <>
            <Polygon
              pathOptions={{
                dashArray: '3',
                fillColor: '#90ee90',
                fillOpacity: 0.3,
                weight: 2,
                opacity: 1,
                color: '#4f4f4f',
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: '3',
                    fillColor: '#90ee90',
                    fillOpacity: 0.5,
                    weight: 2,
                    opacity: 1,
                    color: '#0f0f0f',
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.3,
                    weight: 2,
                    dashArray: '3',
                    color: '#4f4f4f',
                    fillColor: '#90ee90',
                  });
                },
                click: (e) => {},
              }}
            />
          </>
        );
      })}
     {/**
        {pontos.features.map((state) => {
        const coordenada = state.geometry.coordinates;

        return (
          <>
            <Marker icon={fogo} position={coordenada}/>
          </>
        );
      })}
    */}

      /**Queimadas */
      {Corumba.features.map((state) => {
        const coord = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

        return (
          <>
            <Polygon
              pathOptions={{
                fillColor: '#ff5500',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                color: '#ff5500',
              }}
              positions={coord}
            />
          </>
        );
      })}
    
    </MapContainer>
  );
}
