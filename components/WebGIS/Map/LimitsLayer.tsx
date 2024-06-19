import { GeoJSON } from 'react-leaflet';
import { useMemo } from 'react';
import L from 'leaflet';
import { Feature, FeatureCollection, Polygon, area } from '@turf/turf';
import numeral from 'numeral';

import 'numeral/locales/pt-br';
import format from '../../../helpers/formatter';

numeral.locale('pt-br');

export function LimitsLayer({
  municipio,
  queimadas,
  showSatellite,
}: {
  municipio: Feature<Polygon>;
  queimadas?: FeatureCollection<Polygon>;
  showSatellite: boolean;
}) {
  const areaMunicipio = useMemo(() => (municipio ? area(municipio) : 0), [municipio]);
  const areaQueimadas = useMemo(() => (queimadas ? area(queimadas) : 0), [queimadas]);

  const defaultLayerProps = useMemo(
    () => ({
      dashArray: '0',
      fillColor: showSatellite ? 'white' : '#000000',
      fillOpacity: 0.2,
      weight: 2,
      opacity: 1,
      color: showSatellite ? '#CCCCCC' : '#4f4f4f',
    }),
    [showSatellite]
  );

  return (
    <GeoJSON
      data={municipio}
      pathOptions={defaultLayerProps}
      eventHandlers={{
        add: (e) => {
          e.target._map.flyToBounds(L.geoJSON(municipio).getBounds());

          const popupContent = `<b>Área total:</b> ${format.area(areaMunicipio)}<br/><br/><b>Queimada</b><br/>${format.area(areaQueimadas)} (${format.number((areaQueimadas / areaMunicipio) * 100)}% do total)<br/>${format.number(queimadas?.features.length || 0)} focos de queimada`;

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
      key={`${municipio.id}-${areaQueimadas}`}
    />
  );
}
