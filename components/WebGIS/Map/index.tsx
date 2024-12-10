import { RefObject, useEffect, useState } from 'react';
import { MapContainer, Polygon, Popup, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapController from './MapController';
import Location from './Location';
import MapLayer from './MapLayer';
import PopupHandler from './PopupHandler';
import { Feature, Geometry } from '@turf/turf';
import { FeatureCollection } from 'geojson';
import axios from 'axios';

interface Props {
  showLocalizacao: boolean;
  forwardRef?: RefObject<L.Map>;
}

interface Lote {
  id: number;
  shape: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  nome: string;
  proprietario: string;
}

interface AssentamentoData {
  shape: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  lotes: Lote[];
}

export default function Map(props: Props) {
  const mapType = 'satellite';
  const [limitesEstadosLayer, setLimitesEstadosLayer] = useState<FeatureCollection | null>(null);
  const [assentamento, setAssentamento] = useState<AssentamentoData | null>(null);

  useEffect(() => {
    fetch('/BR_UF_2022.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar GeoJSON');
        }
        return response.json();
      })
      .then((geojsonData: FeatureCollection) => {
        setLimitesEstadosLayer(geojsonData);
      })
      .catch((err) => console.error('Erro ao carregar GeoJSON:', err));
  }, []);

  useEffect(() => {
    const fetchAssentamento = async (assentamentoId: number) => {
      try {
        const response = await axios.get(`/api/assentamentos/${assentamentoId}`);
        console.log('Dados recebidos:', response.data); 
        setAssentamento(response.data); 
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Erro ao buscar dados do backend:', error.response?.data || error.message);
        } else {
          console.error('Erro desconhecido:', error);
        }
      }
    };
  
    fetchAssentamento(0);
  }, []);
  

  const defaultCenter: Feature<Geometry> = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-70.811, -9.0238],
    },
    properties: {},
  };

  const renderPolygons = () => {
    if (!assentamento) return null;

    return (
      <>
        {/* Polígono do assentamento */}
        <Polygon
          positions={assentamento.shape.coordinates[0].map(([lng, lat]) => [lat, lng])}
          color="blue"
          fillOpacity={0.5}
        >
          <Popup>Assentamento Principal</Popup>
        </Polygon>

        {/* Polígonos dos lotes */}
        {assentamento.lotes.map((lote) => (
          <Polygon
            key={lote.id}
            positions={lote.shape.coordinates[0].map(([lng, lat]) => [lat, lng])}
            color="yellow"
            fillOpacity={0.3}
          >
            <Popup>
              <div>
                <strong>{lote.nome}</strong>
                <br />
                Proprietário: {lote.proprietario}
              </div>
            </Popup>
          </Polygon>
        ))}
      </>
    );
  };

  return (
    <>
      <MapContainer
        center={{
          lat: -9.707326936,
          lng: -67.411226722,
        }}
        zoom={7}
        zoomControl={false}
        minZoom={3}
        scrollWheelZoom={true}
        style={{ position: 'absolute', width: '100dvw', height: '100dvh', zIndex: '0' }}
        inertia={false}
        inertiaDeceleration={0}
        zoomAnimation={true}
        maxBoundsViscosity={10}
        preferCanvas={true}
        maxBounds={[
          [-15.0, -60.0],
          [-7.5, -67.8],
        ]}
      >
        <MapController ref={props.forwardRef} center={defaultCenter} zoom={7} />
        <ScaleControl position="bottomleft" />
        <MapLayer type={mapType} />
        {/* <PopupHandler /> */}
        {limitesEstadosLayer && null}

        {props.showLocalizacao && <Location />}
        {renderPolygons()}
      </MapContainer>
    </>
  );
}
