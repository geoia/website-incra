export function locationButtonAction(
  isLocationClicked: boolean,
  setIsLocationClicked: (val: boolean) => void,
  isMarkerOpen: boolean,
  setIsMarkerOpen: (val: boolean) => void,
  map: L.Map
) {
  if (isLocationClicked) {
    map.locate({ setView: true });
    setIsLocationClicked(false);
    setIsMarkerOpen(!isMarkerOpen);
  }
}

export function zoomInButtonAction(
  isZoomInClicked: boolean,
  setIsZoomInClicked: (val: boolean) => void,
  map: L.Map
) {
  if (isZoomInClicked) {
    map.zoomIn();
    setIsZoomInClicked(false);
  }
}

export function zoomOutButtonAction(
  isZoomOutClicked: boolean,
  setIsZoomOutClicked: (val: boolean) => void,
  map: L.Map
) {
  if (isZoomOutClicked) {
    map.zoomOut();
    setIsZoomOutClicked(false);
  }
}

export function fullScreenAction(isFullScreen: boolean, setIsFullScreen: (val: boolean) => void) {
  if (isFullScreen) {
    setIsFullScreen(false);
  }
}
