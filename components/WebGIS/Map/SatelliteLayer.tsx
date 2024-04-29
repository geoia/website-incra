import React from 'react';
import { TileLayer } from 'react-leaflet';

interface SatelliteLayerProps {
  showSatellite: boolean;
}

const SatelliteLayer: React.FC<SatelliteLayerProps> = ({ showSatellite }) => {
  const streetUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w';
  const satelliteUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w';

  const url = showSatellite ? satelliteUrl : streetUrl ;

  return (
    <>
      <TileLayer
        url={url}
        attribution='<a href="https://www.mapbox.com/" target="_blank">&copy; Mapbox</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        maxZoom={19}
      />
    </>
  );
};

export default SatelliteLayer;
