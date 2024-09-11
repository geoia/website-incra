import axios from 'axios';

export const fetchMunicipiosComEstatisticas = async () => {
  const response = await axios.get('/api/estatisticas/municipios');
  return response.data;
};

export const fetchEstadosComEstatisticas = async () => {
  const response = await axios.get('/api/estatisticas/estados');
  return response.data;
};

export const fetchEstatisticasMunicipio = async (municipioId: string, ano?: string) => {
  const response = await axios.get(`/api/estatisticas/municipios/${municipioId}`, {
    params: { year: ano },
  });
  return response.data;
};

export const fetchEstatisticasEstado = async (estadoId: string, ano?: string) => {
  const response = await axios.get(`/api/estatisticas/estados/${estadoId}`, {
    params: { year: ano },
  });
  return response.data;
};

export const fetchBiomasComEstatisticas = async () => {
  const response = await axios.get('/api/estatisticas/biomas');
  return response.data;
};

export const fetchEstatisticasBioma = async (biomaId: string, ano?: string) => {
  const response = await axios.get(`/api/estatisticas/biomas/${biomaId}`, {
    params: { year: ano },
  });
  return response.data;
};
