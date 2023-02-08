import React, { useState, useEffect } from 'react';
import { Popup, useMapEvents, Marker } from 'react-leaflet';
import {
  locationButtonAction,
  zoomInButtonAction,
  zoomOutButtonAction,
  fullScreenAction,
} from '../../buttonsActions/buttonsActions';
import L from 'leaflet';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: (val: boolean) => void;
  isZoomInClicked: boolean;
  setIsZoomInClicked: (val: boolean) => void;
  isZoomOutClicked: boolean;
  setIsZoomOutClicked: (val: boolean) => void;
  isLocationClicked: boolean;
}

const iconMarker = new L.Icon({
  iconUrl: '/location.png',
  iconSize: [50, 50],
});

export default function EventsListener({
  isFullScreen,
  setIsFullScreen,
  isZoomInClicked,
  setIsZoomInClicked,
  isZoomOutClicked,
  setIsZoomOutClicked,
  isLocationClicked,
}: Props) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isMarkerOpen, setIsMarkerOpen] = useState(false);

  useEffect(() => {
    zoomInButtonAction(isZoomInClicked, setIsZoomInClicked, map);
    zoomOutButtonAction(isZoomOutClicked, setIsZoomOutClicked, map);
  }, [isZoomInClicked, isZoomOutClicked]);

  useEffect(() => {
    locationButtonAction(
      isLocationClicked,
      setIsMarkerOpen,
      map
    );
  }, [isLocationClicked])

  const map = useMapEvents({
    click: () => {
      fullScreenAction(isFullScreen, setIsFullScreen);
    },
    locationfound(e) {
      setLagitudeAndLongitude(e.latlng.lat, e.latlng.lng);
    },
  });

  function setLagitudeAndLongitude(latitude: number, longitude: number) {
    setLat(latitude);
    setLng(longitude);
  }

  function openAndCloseMarker() {
    if (isMarkerOpen) {
      return (
        <Marker icon={iconMarker} position={[lat, lng]}>
          <Popup>Você está aqui</Popup>
        </Marker>
      );
    } else {
      return null;
    }
  }

  return openAndCloseMarker();
}
