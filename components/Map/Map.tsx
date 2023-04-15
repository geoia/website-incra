import React from 'react';
import { MapContainer, TileLayer, Polygon, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { estados } from './brasil';

import EventsListenerOfMap from './EventsListenerOfMap';
import QueimadasGeoJson from './QueimadasGeoJson';

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
  isFireButtonClicked: boolean;
  isSimplifiedDatas: boolean;
  areMunicipalBoundariesVisible: boolean;
  isSettingsVisible: boolean;
  cityId: number;
}

const municipalBoundaries = (areMuncipalBoundariesVisibles: boolean, idMunicipio: number) => {
  if (areMuncipalBoundariesVisibles) {
    return (
      <FeatureGroup pathOptions={{ color: '#d3d3d3' }}>
        {estados.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
          const id = parseInt(state.properties.id);
          if (id == idMunicipio) {
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
          }
        })}
      </FeatureGroup>
    );
  }
};

export default function Map({
  isFullScreen,
  setIsFullScreen,
  isZoomInClicked,
  setIsZoomInClicked,
  isZoomOutClicked,
  setIsZoomOutClicked,
  isLocationClicked,
  isFireButtonClicked,
  isSimplifiedDatas,
  areMunicipalBoundariesVisible,
  isSettingsVisible,
  cityId,
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
        cityId={cityId}
      />
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      {isFireButtonClicked && !isSettingsVisible && (
        <QueimadasGeoJson municipio={cityId} simplified={isSimplifiedDatas} />
      )}

      {municipalBoundaries(areMunicipalBoundariesVisible, cityId)}
    </MapContainer>
  );
}
