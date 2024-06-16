import { GeoJSON, useMapEvents } from 'react-leaflet';
import { useContext, useEffect, useMemo } from 'react';
import L from 'leaflet';
import { MapContext } from '.';
import { area, featureCollection } from '@turf/turf';
import hash from 'object-hash';
import numeral from 'numeral';

import 'numeral/locales/pt-br';
import format from '../../../helpers/formatter';

numeral.locale('pt-br');

export function LimitsLayer(props: { showSatellite: boolean }) {
  const events = useMapEvents({});

  const { municipio, queimadas } = useContext(MapContext);

  const areaMunicipio = useMemo(() => (municipio ? area(municipio) : 0), [municipio]);
  const areaQueimadas = useMemo(
    () => (queimadas ? area(featureCollection(queimadas)) : 0),
    [queimadas]
  );

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
            e.target.setStyle({ ...defaultLayerProps, fillOpacity: 0.3 });
          },
          mouseout: (e) => {
            e.target.setStyle(defaultLayerProps);
          },
          add: (e) => {
            const popup = L.popup()
              .setLatLng(e.target.getBounds().getCenter())
              .setContent(
                [
                  `<b>Área total:</b> ${format.area(areaMunicipio)}`,
                  `<b>Área queimada</b> ${format.area(areaQueimadas)} (${format.number((areaQueimadas / areaMunicipio) * 100)}%)`,
                  `<b>Pontos de queimada</b>: ${format.number(queimadas?.length || 0)}`,
                ].join('<br/>')
              )
              .openOn(e.target._map);
            e.target.bindPopup(popup).openPopup();
          },
        }}
        key={hash([municipio, queimadas])}
      />
    )
  );
}
