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
  setIsLocationClicked: (val: boolean) => void;
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
  setIsLocationClicked,
}: Props) {
  const [lat, setLat] = useState<null | number>(null);
  const [lng, setLng] = useState<null | number>(null);
  const [isMarkerOpen, setIsMarkerOpen] = useState(false);

  useEffect(() => {
    locationButtonAction(
      isLocationClicked,
      setIsLocationClicked,
      isMarkerOpen,
      setIsMarkerOpen,
      map
    );
    zoomInButtonAction(isZoomInClicked, setIsZoomInClicked, map);
    zoomOutButtonAction(isZoomOutClicked, setIsZoomOutClicked, map);
  }, [isLocationClicked, isZoomInClicked, isZoomOutClicked]);

  function setLagitudeAndLongitude(latitude: number, longitude: number) {
    if (isMarkerOpen == false) {
      setLat(latitude);
      setLng(longitude);
    } else {
      setLat(null);
      setLng(null);
    }
  }

  function openAndCloseMarker() {
    if (lat == null || lng == null) {
      return null;
    } else {
      return (
        <Marker icon={iconMarker} position={[lat, lng]}>
          <Popup>You are here</Popup>
        </Marker>
      );
    }
  }

  const map = useMapEvents({
    click: () => {
      fullScreenAction(isFullScreen, setIsFullScreen);
    },
    locationfound(e) {
      setLagitudeAndLongitude(e.latlng.lat, e.latlng.lng);
    },
  });

  return openAndCloseMarker();
}
