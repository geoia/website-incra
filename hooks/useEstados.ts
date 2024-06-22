import axios from 'axios';
import useSWR from 'swr/immutable';

type EstadosResponse = Array<{
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
}>;

export default function useEstados(source?: string) {
  return useSWR(`/api/queimadas/${source || 'latest'}/estados`, (url) =>
    axios<EstadosResponse>(url).then((data) => data.data)
  );
}
