import { GeoJSON, useMapEvents } from 'react-leaflet';
import { useContext, useEffect, useMemo } from 'react';
import L from 'leaflet';
import { MapContext } from '.';

export function LimitsLayer(props: { showSatellite: boolean }) {
  const events = useMapEvents({});
  const { municipio } = useContext(MapContext);

  useEffect(() => {
    if (municipio) events.flyToBounds(L.geoJSON(municipio).getBounds());
  }, [municipio, events]);

  const defaultLayerProps = useMemo(
    () => ({
      dashArray: '0',
      fillColor: props.showSatellite ? 'white' : '#000000',
      fillOpacity: 0.2,
      weight: 2,
      opacity: 1,
      color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
    }),
    [props.showSatellite]
  );

  return (
    municipio && (
      <GeoJSON
        data={municipio}
        pathOptions={defaultLayerProps}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({ ...defaultLayerProps, fillOpacity: 0.3 });
          },
          mouseout: (e) => {
            const layer = e.target;
            layer.setStyle(defaultLayerProps);
          },
        }}
      />
    )
  );
}
