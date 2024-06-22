import { GeoJSON } from 'react-leaflet';
import { useMemo } from 'react';
import L from 'leaflet';
import { Feature, FeatureCollection, Polygon, area } from '@turf/turf';
import numeral from 'numeral';

import 'numeral/locales/pt-br';
import format from '../../../helpers/formatter';

numeral.locale('pt-br');

export function LimitsLayer(props: {
  location: Feature<Polygon>;
  queimadas?: FeatureCollection<Polygon>;
  showSatellite: boolean;
}) {
  const areaMunicipio = useMemo(
    () => (props.location ? area(props.location) : 0),
    [props.location]
  );

  const areaQueimadas = useMemo(
    () => (props.queimadas ? area(props.queimadas) : 0),
    [props.queimadas]
  );

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
    <GeoJSON
      data={props.location}
      pathOptions={defaultLayerProps}
      eventHandlers={{
        add: (e) => {
          e.target._map.flyToBounds(L.geoJSON(props.location).getBounds());

          const popupContent = `<b>Área total:</b> ${format.area(areaMunicipio)}<br/><br/><b>Queimada</b><br/>${format.area(areaQueimadas)} (${format.number((areaQueimadas / areaMunicipio) * 100)}% do total)<br/>${format.number(props.queimadas?.features.length || 0)} focos de queimada`;

          e.target
            .bindPopup(
              L.popup()
                .setLatLng(e.target.getBounds().getCenter())
                .setContent(popupContent)
                .openOn(e.target._map)
            )
            .openPopup();
        },
      }}
      key={`${props.location.id}-${areaQueimadas}`}
    />
  );
}
