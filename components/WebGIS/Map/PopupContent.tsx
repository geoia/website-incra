import React from 'react';

interface PopupContentProps {
  caminhoImagem: string | undefined;
}

const PopupContent: React.FC<PopupContentProps> = ({ caminhoImagem }) => {
  return (
    <div style={{minWidth: 200, minHeight: 150}}>
      {caminhoImagem &&(
        <img src={caminhoImagem} alt="Imagem de Local" width="200" height="auto" />
      )}
    </div>
  );
};

export default PopupContent;
