import React from 'react';
import { useMapEvents } from 'react-leaflet';

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
  const map = useMapEvents({
    click: () => {
      if (isFullScreen) {
        setIsFullScreen(false);
      }
    },
  });
  if (isLocationClicked) {
    map.locate({ setView: true });
    setIsLocationClicked(false);
  }
  if (isZoomInClicked) {
    map.zoomIn();
    setIsZoomInClicked(false);
  }
  if (isZoomOutClicked) {
    map.zoomOut();
    setIsZoomOutClicked(false);
  }

  return null;
}
