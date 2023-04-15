import turf from "turf";
import { estados } from '../components/Map/brasil'

export function locationButtonAction(
  isLocationClicked: boolean,
  setIsMarkerOpen: (val: boolean) => void,
  isError: boolean,
  setIsError: (val: boolean) => void,
  map: L.Map
) {
  if (isLocationClicked) {
    setIsError(false);
    map.locate({ setView: true });
  } else if (!isLocationClicked && isError) {
    setIsError(false);
    map.locate({ setView: true });
  } else {
    setIsMarkerOpen(false);
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

export function changeCenter(map: L.Map, cityId: number) {
  for(let i = 0; i < estados.features.length; i ++) {
    const id = parseInt(estados.features[i].properties.id);

    if(id == cityId) {
      const polygon = turf.polygon(estados.features[i].geometry.coordinates);

      const center = turf.centroid(polygon).geometry.coordinates;
      map.setView({lng: center[0], lat: center[1]});

      break;
    }
}
}