import React, { useState, useEffect } from 'react';
import { TileLayer, useMapEvents } from 'react-leaflet';

const URLs = {
  streets: {
    primary:
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w',
    alternative:
      'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Ij36jyiXxRh4la8WMF45',
  },
  satellite: {
    primary:
      'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w',
    alternative:
      'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=Ij36jyiXxRh4la8WMF45',
  },
  dark: {
    primary:
      'https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGV1cy1uYW50ZXMiLCJhIjoiY2xhMXpoeTRrMDBvYTNvbWZvZXpua2htOCJ9.PeFH8oujEq1AI6a8-tkk7w',
    alternative:
      'https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=Ij36jyiXxRh4la8WMF45',
  },
};

export default function MapLayer(props: { type: 'satellite' | 'streets' | 'dark' }) {
  const [url, setUrl] = useState(URLs[props.type].primary);

  const map = useMapEvents({
    tileerror: (error) => {
      console.log('Tile error:', error);
      setUrl(URLs[props.type].alternative);
    },
  });

  useEffect(() => {
    console.log(`Setting URL for type ${props.type}`);
    setUrl(URLs[props.type].primary);
  }, [props.type]);

  return (
    <TileLayer
      url={url}
      attribution={`<a href="https://www.mapbox.com/" target="_blank">&copy; Mapbox</a>, <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>, <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>`}
      maxZoom={19}
    />
  );
}
