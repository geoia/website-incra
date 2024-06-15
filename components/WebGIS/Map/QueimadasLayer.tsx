import React, { useEffect, useState } from 'react';
import { GeoJSON, useMap } from 'react-leaflet';
import { getQueimadas } from '../../../lib/queimadas';
import { featureCollection, area } from '@turf/turf';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import L from 'leaflet';
import { Feature, Geometry } from 'geojson';

interface ObservableProps {
  onStart?: () => void;
  onFinish?: (page: number) => void;
  onUpdate?: (current: number, end?: number) => void;
}

export interface BaseProps {
  municipio: number;
  simplified: boolean;
  source?: string;
}

export default function QueimadasGeoJson(props: BaseProps & ObservableProps) {
  const [data, setData] = useState<Feature<Geometry>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const map = useMap();

  useEffect(() => {
    setData([]);
  }, [props.municipio, props.simplified, props.source]);

  useEffect(() => {
    if (props.onStart) props.onStart();

    const controller = new AbortController();
    setIsLoading(true);

    getQueimadas({
      municipio: props.municipio,
      simplified: props.simplified,
      source: props.source,
      signal: controller.signal,
    })
      .then((result) => {
        if (result.features.length) {
          setData(result.features);
          if (props.onUpdate) props.onUpdate(result.features.length);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.name !== 'CanceledError') return Promise.reject(err);
        return Promise.resolve();
      });

    return () => controller.abort('unmounted');
  }, [props]);

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
    <>
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo transparente
            zIndex: 1000, // garante que o loading apareça por cima de tudo
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <GeoJSON
        data={featureCollection(data)}
        pathOptions={{
          fillColor: props.simplified ? '#ff0000' : '#ff0000',
          fillOpacity: 0.7,
          weight: 2,
          opacity: 1,
          color: props.simplified ? '#ff0000' : '#ff0000',
        }}
        onEachFeature={onEachFeature}
        key={data.length}
      />
    </>
  );
}
