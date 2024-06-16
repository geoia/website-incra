import { GeoJSON, useMap } from 'react-leaflet';
import { featureCollection, area } from '@turf/turf';
import L from 'leaflet';
import { Feature, Geometry } from 'geojson';
import { MapContext } from '.';
import { useContext } from 'react';

export default function QueimadasLayer() {
  const map = useMap();
  const { queimadas } = useContext(MapContext);

  const onEachFeature = (feature: Feature<Geometry>, layer: L.Layer) => {
    if (feature.properties) {
      const m2 = area(feature);
      const k2 = m2 / 1e6;

      const formatted =
        k2 >= 0.01 ? `${k2.toFixed(2)} km²` : `${m2.toFixed(2)} m² (${k2.toFixed(4)} km²)`;

      layer.on({
        mouseover: (e: L.LeafletMouseEvent) => {
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(`Área queimada: ${formatted}`)
            .openOn(map);
          e.target.bindPopup(popup).openPopup();
        },
        mouseout: (e: L.LeafletMouseEvent) => {
          e.target.closePopup();
        },
      });
    }
  };

  return (
    <GeoJSON
      data={featureCollection(queimadas || [])}
      pathOptions={{
        fillColor: '#ff0000',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: '#ff0000',
      }}
      onEachFeature={onEachFeature}
      key={queimadas?.length}
    />
  );
}
