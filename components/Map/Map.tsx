import React from 'react';
import {
  MapContainer,
  GeoJSON,
  TileLayer,
  Polygon,
  LayersControl,
  LayerGroup,
  FeatureGroup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { estados } from './brasil';
import Dados from './jsons/01response_1674240947890.json';
import DadosS from './jsons/0response_1674238134734.json';
import Dados1 from './jsons/response_1674159027012.json';
import Dados1S from './jsons/Sresponse_1674158232241.json';
import Dados2 from './jsons/response_1674159049779.json';
import Dados2S from './jsons/Sresponse_1674158344922.json';
import Dados3 from './jsons/response_1674159089248.json';
import Dados3S from './jsons/Sresponse_1674158379064.json';

import EventsListenerOfMap from './EventsListenerOfMap';

const center = {
  lat: -20.2634,
  lng: -54.3847,
};

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: (val: boolean) => void;
  isZoomInClicked: boolean;
  setIsZoomInClicked: (val: boolean) => void;
  isZoomOutClicked: boolean;
  setIsZoomOutClicked: (val: boolean) => void;
  isLocationClicked: boolean;
  setIsLocationClicked: (val: boolean) => void;
  isFireButtonClicked: boolean;
}

export default function Map({
  isFullScreen,
  setIsFullScreen,
  isZoomInClicked,
  setIsZoomInClicked,
  isZoomOutClicked,
  setIsZoomOutClicked,
  isLocationClicked,
  setIsLocationClicked,
  isFireButtonClicked
}: Props) {
  return (
    <MapContainer
      center={center}
      zoom={7}
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
      <EventsListenerOfMap
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        isZoomInClicked={isZoomInClicked}
        setIsZoomInClicked={setIsZoomInClicked}
        isZoomOutClicked={isZoomOutClicked}
        setIsZoomOutClicked={setIsZoomOutClicked}
        isLocationClicked={isLocationClicked}
        setIsLocationClicked={setIsLocationClicked}
      />
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <LayersControl position="bottomleft">
        <LayersControl.Overlay name="Queimadas Sem Simplificação">
          <LayerGroup>
            {isFireButtonClicked ? (
              <GeoJSON
                data={[Dados, Dados1, Dados2, Dados3] as any}
                pathOptions={{
                  fillColor: '#ff5500',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: '#ff5500',
                }}
              />
            ) : null}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Queimadas Com Simplificação">
          <LayerGroup>
            {isFireButtonClicked ? (
              <GeoJSON
                data={[DadosS, Dados1S, Dados2S, Dados3S] as any}
                pathOptions={{
                  fillColor: '#0055ff',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: '#0055ff',
                }}
              />
            ) : null}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Limites municipais">
          <FeatureGroup pathOptions={{ color: '#d3d3d3' }}>
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
                      color: '#d3d3d3',
                    }}
                    positions={coordinates as any}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          dashArray: '3',
                          fillColor: '#90ee90',
                          fillOpacity: 0.5,
                          weight: 2,
                          opacity: 1,
                          color: '#d3d3d3',
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.3,
                          weight: 2,
                          dashArray: '3',
                          color: '#d3d3d3',
                          fillColor: '#90ee90',
                        });
                      },
                      click: (e) => {},
                    }}
                  />
                </>
              );
            })}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
