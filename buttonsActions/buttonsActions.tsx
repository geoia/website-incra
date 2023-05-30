import turf from 'turf';
import { estados } from '../components/Map/brasil';

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

function returnCityPosition(cityId: number) {
  for (let i = 0; i < estados.features.length; i++) {
    const id = parseInt(estados.features[i].properties.id);

    if (id == cityId) {
      return i;
    }
  }

  return 0;
}

function returnZoomLevel(cityId: number) {
  if (cityId == 5003207) {
    return 7;
  }

  return 8;
}
export function changeCenter(map: L.Map, cityId: number) {
  const cityPositon = returnCityPosition(cityId);
  const polygon = turf.polygon(estados.features[cityPositon].geometry.coordinates);

  const zoom = returnZoomLevel(cityId);

  const center = turf.centroid(polygon).geometry.coordinates;
  map.flyTo({ lng: center[0], lat: center[1] }, zoom);
}
