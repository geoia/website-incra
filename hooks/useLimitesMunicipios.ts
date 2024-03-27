import type { Polygon } from '@turf/turf';
import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr/immutable';

export default function useLimitesMunicipios(id: number) {
  const { data, error, isLoading } = useSWR<AxiosResponse<Polygon>>(
    `/api/mapas/${id > 100 ? 'municipio' : 'estado'}/${id}`,
    axios
  );

  return { data: data?.data, isLoading, error };
}
