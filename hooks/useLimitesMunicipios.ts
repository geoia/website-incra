import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

type Polygon = {
  type: 'Polygon';
  coordinates: number[][][];
};

export default function useLimitesMunicipios(id: number) {
  const { data, error, isLoading } =
    id > 100
      ? useSWR<AxiosResponse<Polygon>>(`/api/mapas/municipio/${id}`, axios)
      : useSWR<AxiosResponse<Polygon>>(`/api/mapas/estado/${id}`, axios);

  return { data: data?.data, isLoading, error };
}
