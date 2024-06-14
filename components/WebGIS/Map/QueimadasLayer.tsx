import React, { useEffect, useState } from 'react';
import { GeoJSON, useMap } from 'react-leaflet';
import { QueimadasRequestResponse, getQueimadas } from '../../../lib/queimadas';
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

type PagesMeta = NonNullable<QueimadasRequestResponse['pages']>;

export default function QueimadasGeoJson(props: BaseProps & ObservableProps) {
  const [pages, setPages] = useState<PagesMeta>({ current: 0, next: 1 });
  const [data, setData] = useState<Feature<Geometry>[]>([]); 
  const [isLoading, setIsLoading] = useState(false);
  const map = useMap();

  useEffect(() => {
    setData([]);
    setPages({ current: 0, next: 1 });
  }, [props.municipio, props.simplified, props.source]);

  useEffect(() => {
    if (!pages || !pages.next) {
      if (props.onFinish) props.onFinish(pages.current);
      setIsLoading(false);
      return;
    }

    if (props.onStart) props.onStart();

    const controller = new AbortController();
    setIsLoading(true);

    getQueimadas({
      municipio: props.municipio,
      simplified: props.simplified,
      source: props.source,
    })
      .then((result) => {
        if (result.geoJson.features.length) {
          setData(result.geoJson.features as Feature<Geometry>[]);
          setPages({ current: 1, next: undefined });
          if (props.onUpdate) props.onUpdate(1, 1);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.name !== 'CanceledError') return Promise.reject(err);
        return Promise.resolve();
      });

    return () => controller.abort('unmounted');
  }, [pages?.current, pages?.next]);

  const onEachFeature = (feature: Feature<Geometry>, layer: L.Layer) => {
    if (feature.properties) {
      const areaValue = area(feature); 
      const areaFormatted = (areaValue / 1e6).toFixed(2); 

      layer.on({
        mouseover: (e: L.LeafletMouseEvent) => {
          const popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(`Área queimada: ${areaFormatted} km²`)
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
        key={pages?.current}
      />
    </>
  );
}
