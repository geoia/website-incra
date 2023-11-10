import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

type Polygon = {
  type: 'Polygon';
  coordinates: number[][][];
};

export default function useLimitesMunicipios(id: number) {
  const { data, error, isLoading } = useSWR<AxiosResponse<Polygon>>(
    `/api/mapas/${id > 100 ? 'municipio' : 'estado'}/${id}`,
    axios
  );

  return { data: data?.data, isLoading, error };
}
