import { forwardRef, useImperativeHandle } from 'react';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const MapController = forwardRef<L.Map>((_, ref) => {
  const events = useMapEvents({});

  useImperativeHandle(ref, () => events, [events]);

  return null;
});

MapController.displayName = 'MapController';

export default MapController;
