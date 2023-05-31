import { forwardRef, useImperativeHandle } from 'react';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import turf from 'turf';

export type MapEvents = L.Map & { centralize: (coordinates: number[][][]) => void };

const Controlador = forwardRef<MapEvents>((_, ref) => {
  const events = useMapEvents({});

  useImperativeHandle(
    ref,
    () =>
      Object.assign(events, {
        centralize(coordinates: number[][][]) {
          const [lng, lat] = turf.centroid(turf.polygon(coordinates)).geometry.coordinates;
          events.flyTo({ lng, lat }, 7);
        },
      }),
    [events]
  );

  return null;
});

Controlador.displayName = 'MapController';

export default Controlador;
