import React, { useEffect } from 'react';
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
  });

  return null;
}
