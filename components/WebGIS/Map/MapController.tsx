import { forwardRef, useImperativeHandle } from 'react';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Feature, Geometry } from '@turf/turf';

const MapController = forwardRef<L.Map, { center?: Feature<Geometry>; zoom?: number }>(
  function (props, ref) {
    const events = useMapEvents({});

    useImperativeHandle(
      ref,
      () =>
        Object.assign(events, {
          centralize: () => {
            if (props.center) {
              const bounds = L.geoJSON(props.center).getBounds();
              events.flyToBounds(bounds, { maxZoom: props.zoom || 8 });
            }
          },
        }),
      [events, props.center, props.zoom]
    );

    return null;
  }
);

MapController.displayName = 'MapController';

export default MapController;
