import React from 'react';
import { TileLayer } from 'react-leaflet';

const URLs = {
  streets:
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w',
  satellite:
    'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w',
};

export default function SatelliteLayer(
  props: { type: 'satellite' | 'streets' } = { type: 'streets' }
) {
  return (
    <TileLayer
      url={URLs[props.type]}
      attribution='<a href="https://www.mapbox.com/" target="_blank">&copy; Mapbox</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      maxZoom={19}
    />
  );
}
