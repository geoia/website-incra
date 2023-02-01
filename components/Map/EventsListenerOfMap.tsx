import React from 'react';
import { useMapEvents } from 'react-leaflet';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: (val: boolean) => void;
  isZoomInClicked: boolean;
  setIsZoomInClicked: (val: boolean) => void;
  isZoomOutClicked: boolean;
  setIsZoomOutClicked: (val: boolean) => void;
}

export default function EventsListener({
  isFullScreen,
  setIsFullScreen,
  isZoomInClicked,
  setIsZoomInClicked,
  isZoomOutClicked,
  setIsZoomOutClicked,
}: Props) {
  const map = useMapEvents({
    click: () => {
      if (isFullScreen) {
        setIsFullScreen(false);
      }
    },
  });

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
