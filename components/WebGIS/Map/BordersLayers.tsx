import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { FeatureCollection } from 'geojson';

interface BordersLayerProps {
  geojsonData: FeatureCollection;
  color?: string;
}

const BordersLayer: React.FC<BordersLayerProps> = ({ geojsonData, color = 'blue' }) => {
  const style = {
    color: color,
    weight: 2,
    fillOpacity: 0,
  };

  return <GeoJSON data={geojsonData} style={() => style} />;
};

export default BordersLayer;
