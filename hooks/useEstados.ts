import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

type EstadosResponse = Array<{
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
}>;

export default function useEstados(source?: string) {
  const { data, error, isLoading } = useSWR<AxiosResponse<EstadosResponse>>(
    `/api/queimadas/${source || 'latest'}/estados`,
    axios
  );

  return { dataEstados: data?.data, isLoading, error };
}
