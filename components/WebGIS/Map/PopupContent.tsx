import React from 'react';
import format from '../../../helpers/formatter';

interface PopupContentProps {
  areaMunicipio: number;
  areaQueimadas: number;
  queimadasCount: number;
  caminhoImagem: string | undefined;
}

const PopupContent: React.FC<PopupContentProps> = ({ areaMunicipio, areaQueimadas, queimadasCount, caminhoImagem }) => {
  return (
    <div style={{minWidth: 200, minHeight: 150}}>
      <b>Área total:</b> {format.area(areaMunicipio)}
      <br />
      <br />
      <b>Queimada</b>
      <br />
      {format.area(areaQueimadas)} ({((areaQueimadas / areaMunicipio) * 100).toFixed(2)}% do total)
      <br />
      {queimadasCount} focos de queimada
      <br />
      <br />
      {caminhoImagem &&(
        <img src={caminhoImagem} alt="Imagem de Local" width="200" height="auto" />
      )}
    </div>
  );
};

export default PopupContent;
