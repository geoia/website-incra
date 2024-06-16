import { GeoJSON, useMapEvents } from 'react-leaflet';
import { useContext, useEffect } from 'react';
import L from 'leaflet';
import { MapContext } from '.';

export function LimitsLayer(props: { showSatellite: boolean }) {
  const events = useMapEvents({});
  const { municipio } = useContext(MapContext);

  useEffect(() => {
    if (municipio) events.flyToBounds(L.geoJSON(municipio).getBounds());
  }, [municipio, events]);

  return (
    municipio && (
      <GeoJSON
        data={municipio}
        pathOptions={{
          dashArray: '0',
          fillColor: props.showSatellite ? 'white' : '#000000',
          fillOpacity: 0.2,
          weight: 2,
          opacity: 1,
          color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
        }}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
              dashArray: '0',
              ffillColor: props.showSatellite ? 'white' : '#000000',
              fillOpacity: 0.3,
              weight: 2,
              opacity: 1,
              color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
            });
          },
          mouseout: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillOpacity: 0.2,
              weight: 2,
              dashArray: '0',
              color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
              fillColor: props.showSatellite ? 'white' : '#000000',
            });
          },
          click: (e) => {},
        }}
      />
    )
  );
}
