import React, { useState } from 'react';

interface PopupContentProps {
  caminhoImagem?: string;
}

const PopupContent: React.FC<PopupContentProps> = ({ caminhoImagem }) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  console.log("Caminho da imagem recebido:", caminhoImagem); // Verifique o valor aqui

  return (
    <div style={{ minWidth: 200, minHeight: 150 }}>
      {caminhoImagem ? (
        <img
          src={caminhoImagem}
          alt="Imagem de Local"
          width="200"
          height="auto"
          onError={handleError}
          style={{ display: imageError ? 'none' : 'block' }}
        />
      ) : (
        <div>Nenhuma imagem disponível</div>
      )}
      {imageError && <div>Erro ao carregar a imagem.</div>}
    </div>
  );
};


export default PopupContent;
