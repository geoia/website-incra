import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import useSWR from 'swr';

type MunicipiosResponse = Array<{
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
}>;

export default function useMunicipios(source?: string) {
  const { data, error, isLoading } = useSWR<AxiosResponse<MunicipiosResponse>>(
    `/api/queimadas/municipios${source ? `?source=${source}` : ''}`,
    axios
  );

  return { data: data?.data, isLoading, error };
}
