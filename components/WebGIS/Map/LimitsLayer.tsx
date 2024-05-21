import { GeoJSON, useMapEvents } from 'react-leaflet';
import { useEffect } from 'react';
import useLimitesMunicipios from '../../../hooks/useLimitesMunicipios';
import L from 'leaflet';

export function LimitsLayer(props: {
  municipio: number;
  showLimitVisibility: boolean;
  showSatellite: boolean;
}) {
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
        fillColor: props.showSatellite ? 'white' : '#000000',
        fillOpacity: props.showLimitVisibility ? 0 : 0.2,
        weight: props.showLimitVisibility ? 0 : 2,
        opacity: 1,
        color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
      }}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            dashArray: '0',
            ffillColor: props.showSatellite ? 'white' : '#000000',
            fillOpacity: props.showLimitVisibility ? 0 : 0.3,
            weight: props.showLimitVisibility ? 0 : 2,
            opacity: 1,
            color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: props.showLimitVisibility ? 0 : 0.2,
            weight: props.showLimitVisibility ? 0 : 2,
            dashArray: '0',
            color: props.showSatellite ? '#CCCCCC' : '#4f4f4f',
            fillColor: props.showSatellite ? 'white' : '#000000',
          });
        },
        click: (e) => {},
      }}
    />
  );
}
