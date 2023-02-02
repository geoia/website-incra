import React, { useState, useEffect } from 'react';
import { Popup, useMapEvents, Marker } from 'react-leaflet';
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
  iconUrl: '/markerImg.svg',
  iconSize: [60, 55],
})

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
  const [lat, setLat] = useState<null | number>(null)
  const [lng, setLng] = useState<null | number>(null)

  useEffect(() => {
    locationButtonAction();
    zoomInButtonAction();
    zoomOutButtonAction();
  }, [isLocationClicked, isZoomInClicked, isZoomOutClicked]);

  function locationButtonAction() {
    if (isLocationClicked) {
      map.locate({ setView: true });
      setIsLocationClicked(false);
    }
  }

  function zoomInButtonAction() {
    if (isZoomInClicked) {
      map.zoomIn();
      setIsZoomInClicked(false);
    }
  }

  function zoomOutButtonAction() {
    if (isZoomOutClicked) {
      map.zoomOut();
      setIsZoomOutClicked(false);
    }
  }

  function fullScreenAction() {
    if (isFullScreen) {
      setIsFullScreen(false);
    }
  }

  const map = useMapEvents({
    click: () => {
      fullScreenAction();
    },
    locationfound(e) {
      setLat(e.latlng.lat)
      setLng(e.latlng.lng)
    },
  });

  return lat === null || lng == null ? null : (
    <Marker icon={iconMarker} position={[lat, lng]}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
