import { RefObject, useEffect, useState } from 'react';
import { MapContainer, Polygon, Popup, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import PopupHandler from './PopupHandler'; 
import MapLayer from './MapLayer';

// Tipos de dados
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

interface Ponto {
  id: number;
  shape: {
    type: 'Point';
    coordinates: [number, number];
  };
  codigo: string;
}

interface Foto {
  id: number;
  shape: {
    type: 'Point';
    coordinates: [number, number];
  };
  path: string;
}

interface AssentamentoData {
  shape: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  lotes: Lote[];
  pontos: Ponto[];
  fotos: Foto[];
}

export default function Map(props: Props) {
  const [assentamento, setAssentamento] = useState<AssentamentoData | null>(null);

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

  const areCoordinatesClose = (
    coord1: [number, number],
    coord2: [number, number],
    tolerance = 0.001
  ): boolean => {
    return (
      Math.abs(coord1[0] - coord2[0]) <= tolerance &&
      Math.abs(coord1[1] - coord2[1]) <= tolerance
    );
  };
  

  const renderPontosComFotos = () => {
    if (!assentamento) return null;

    return assentamento.pontos.map((ponto) => {
      const fotosAssociadas = assentamento.fotos.filter((foto) =>
        areCoordinatesClose(foto.shape.coordinates, ponto.shape.coordinates)
      );
      

      return (
        <Marker
          key={ponto.id}
          position={[ponto.shape.coordinates[1], ponto.shape.coordinates[0]]}
          icon={L.divIcon({
            className: 'custom-icon',
            html: '<div style="width: 10px; height: 10px; background-color: red; border-radius: 50%;"></div>',
            iconSize: [10, 10],
          })}
        >
          <PopupHandler
            popupData={{
              lat: ponto.shape.coordinates[1],
              lng: ponto.shape.coordinates[0],
              caminhoImagem: fotosAssociadas.length > 0 ? fotosAssociadas[0].path : undefined,
            }}
          />
        </Marker>
      );
    });
  };

  return (
    <MapContainer
      center={{
        lat: -9.707326936,
        lng: -67.411226722,
      }}
      zoom={10}
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
        [-15.0, -80.0],
        [-7.0, -35.0],
      ]}
    >
      {renderPolygons()}
      {renderPontosComFotos()}
      <MapLayer type={'satellite'}></MapLayer>
    </MapContainer>
  );
}
