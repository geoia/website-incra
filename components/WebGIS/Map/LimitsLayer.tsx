import { GeoJSON, useMapEvents } from 'react-leaflet';
import { useEffect } from 'react';
import useLimitesMunicipios from '../../../hooks/useLimitesMunicipios';
import L from 'leaflet';

export function LimitsLayer(props: { municipio: number }) {
  const events = useMapEvents({});
  const { data: limitesMunicipais } = useLimitesMunicipios(props.municipio);

  useEffect(() => {
    if (limitesMunicipais) events.flyToBounds(L.geoJSON(limitesMunicipais).getBounds());
  }, [limitesMunicipais, events]);

  return !limitesMunicipais ? (
    <></>
  ) : (
    <GeoJSON
      data={limitesMunicipais}
      pathOptions={{
        dashArray: '0',
        fillColor: '#000000',
        fillOpacity: 0.1,
        weight: 2,
        opacity: 1,
        color: '#4f4f4f',
      }}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            dashArray: '0',
            fillColor: '#000000',
            fillOpacity: 0.2,
            weight: 2,
            opacity: 1,
            color: '#3f3f3f',
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.1,
            weight: 2,
            dashArray: '0',
            color: '#4f4f4f',
            fillColor: '#000000',
          });
        },
        click: (e) => {},
      }}
    />
  );
}
