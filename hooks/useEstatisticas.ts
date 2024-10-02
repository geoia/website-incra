import axios from 'axios';

export const fetchComEstatisticas = async (local: string) => {
  const response = await axios.get(`/api/estatisticas/${local}`);
  return response.data;
};

export const fetchEstatisticas = async (local: string, localId: string, ano?: string) => {
  const response = await axios.get(`/api/estatisticas/${local}/${localId}`, {
    params: { year: ano },
  });
  return response.data;
};
