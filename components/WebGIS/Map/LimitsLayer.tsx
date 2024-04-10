import { GeoJSON, useMapEvents } from 'react-leaflet';
import { useEffect } from 'react';
import useLimitesMunicipios from '../../../hooks/useLimitesMunicipios';
import L from 'leaflet';

export function LimitsLayer(props: { municipio: number; showLimitVisibility: boolean }) {
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
        fillOpacity: props.showLimitVisibility ? 0 : 0.1,
        weight: props.showLimitVisibility ? 0 : 2,
        opacity: 1,
        color: '#4f4f4f',
      }}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            dashArray: '0',
            fillColor: '#000000',
            fillOpacity: props.showLimitVisibility ? 0 : 0.1,
            weight: props.showLimitVisibility ? 0 : 2,
            opacity: 1,
            color: '#3f3f3f',
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: props.showLimitVisibility ? 0 : 0.1,
            weight: props.showLimitVisibility ? 0 : 2,
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
