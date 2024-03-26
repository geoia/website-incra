import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

type MunicipiosResponse = Array<{
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
}>;

export default function useMunicipios(source?: string) {
  const { data, error, isLoading } = useSWR<AxiosResponse<MunicipiosResponse>>(
    `/api/queimadas/${source || 'latest'}/municipios`,
    axios
  );

  return { dataMunicipios: data?.data, isLoading, error };
}
