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
    <div style={{ minWidth: 150, minHeight: 150 }}>
      {caminhoImagem ? (
        <a href={caminhoImagem} target="_blank" rel="noopener noreferrer">
          <img
            src={caminhoImagem}
            alt="Imagem de Local"
            width="250"
            height="auto"
            onError={handleError}
            style={{ display: imageError ? 'none' : 'block' }}
          />
        </a>
      
      ) : (
        <div>Nenhuma imagem disponível</div>
      )}
      {imageError && <div>Erro ao carregar a imagem.</div>}
    </div>
  );
};


export default PopupContent;
