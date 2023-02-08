import { GeoJSON } from 'react-leaflet';
import Dados from './jsons/01response_1674240947890.json';
import DadosS from './jsons/0response_1674238134734.json';
import Dados1 from './jsons/response_1674159027012.json';
import Dados1S from './jsons/Sresponse_1674158232241.json';
import Dados2 from './jsons/response_1674159049779.json';
import Dados2S from './jsons/Sresponse_1674158344922.json';
import Dados3 from './jsons/response_1674159089248.json';
import Dados3S from './jsons/Sresponse_1674158379064.json';

interface Props {
  simplified: boolean;
}

export default function DisplayGeoJsons({ simplified }: Props) {
  const datas = () => {
    if (simplified) {
      return ([DadosS, Dados1S, Dados2S, Dados3S] as any);
    }
    return([Dados, Dados1, Dados2, Dados3] as any)
  };

  return (
    <GeoJSON
      data={datas()}
      pathOptions={{
        fillColor: simplified? '#0055ff': '#ff5500',
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: simplified? '#0055ff': '#ff5500',
      }}
    />
  );
}
