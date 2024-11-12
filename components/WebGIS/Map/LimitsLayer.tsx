import { GeoJSON } from 'react-leaflet';
import { useMemo } from 'react';
import L from 'leaflet';
import { createRoot } from 'react-dom/client';
import { Feature, FeatureCollection, Polygon, area } from '@turf/turf';
import numeral from 'numeral';

import PopupContent from './PopupContent';
import 'numeral/locales/pt-br';
import { useUnmountRef } from '../../../hooks/useUnmountRef';

numeral.locale('pt-br');

export function LimitsLayer(props: {
  location: Feature<Polygon>;
  queimadas?: FeatureCollection<Polygon>;
  showSatellite: boolean;
  darkMode: boolean;
}) {
  const unmount = useUnmountRef();

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

          const popupNode = document.createElement('div');
          popupNode.style.minWidth = '200px';

          const root = createRoot(popupNode);
          root.render(
            <PopupContent
              areaMunicipio={areaMunicipio}
              areaQueimadas={areaQueimadas}
              queimadasCount={props.queimadas?.features.length || 0}
              caminhoImagem={`https://inovaveterinaria.com.br/wp-content/uploads/2024/01/Inova-Veterinaria-Cachorro-com-ansiedade-entenda-por-que-acontece-e-o-que-fazer-GS2-Marketing-Divulgacao.jpg`}
            />
          );

          e.target
            .bindPopup(
              L.popup()
                .setLatLng(e.target.getBounds().getCenter())
                .setContent(popupNode)
                .openOn(e.target._map)
            )
            .openPopup();
        },
      }}
      key={`${props.location.id}-${areaQueimadas}`}
      ref={unmount}
    />
  );
}
