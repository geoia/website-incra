import { GeoJSON, useMap } from 'react-leaflet';
import { area, FeatureCollection, Polygon } from '@turf/turf';
import L from 'leaflet';
import { Feature, Geometry } from 'geojson';
import format from '../../../helpers/formatter';

export default function QueimadasLayer({ queimadas }: { queimadas: FeatureCollection<Polygon> }) {
  const map = useMap();

  const onEachFeature = (feature: Feature<Geometry>, layer: L.Layer) => {
    if (feature.properties) {
      layer.on({
        mouseover: (e: L.LeafletMouseEvent) => {
          const popup = L.tooltip()
            .setLatLng(e.latlng)
            .setContent(`<b>Área queimada:</b> ${format.area(area(feature))}`)
            .openOn(map);
          e.target.bindTooltip(popup).openTooltip();
        },
        mouseout: (e: L.LeafletMouseEvent) => {
          e.target.closeTooltip();
        },
      });
    }
  };

  return (
    <GeoJSON
      data={queimadas}
      pathOptions={{
        fillColor: '#ff0000',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: '#ff0000',
      }}
      onEachFeature={onEachFeature}
      key={area(queimadas)}
    />
  );
}
