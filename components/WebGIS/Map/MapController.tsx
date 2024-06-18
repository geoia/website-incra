import { forwardRef, useImperativeHandle } from 'react';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Feature, Geometry } from '@turf/turf';

const MapController = forwardRef<L.Map, { center?: Feature<Geometry> }>(function (props, ref) {
  const events = useMapEvents({});

  useImperativeHandle(
    ref,
    () =>
      Object.assign(events, {
        centralize: () => props.center && events.flyToBounds(L.geoJSON(props.center).getBounds()),
      }),
    [events, props.center]
  );

  return null;
});

MapController.displayName = 'MapController';

export default MapController;
