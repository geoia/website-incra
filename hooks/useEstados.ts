import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import useSWR from 'swr';

type EstadosResponse = Array<{
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
}>;

export default function useEstados(source?: string) {
  const { data, error, isLoading } = useSWR<AxiosResponse<EstadosResponse>>(
    `/api/queimadas/estados${source ? `?source=${source}` : ''}`,
    axios
  );

  return { dataEstados: data?.data, isLoading, error };
}
