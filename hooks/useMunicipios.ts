import axios from 'axios';
import useSWR from 'swr/immutable';

type MunicipiosResponse = Array<{
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
}>;

export default function useMunicipios(source?: string) {
  return useSWR(`/api/queimadas/${source || 'latest'}/municipios`, (url) =>
    axios<MunicipiosResponse>(url).then((res) => res.data)
  );
}
