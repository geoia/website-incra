import axios from 'axios';
import useSWR from 'swr/immutable';

type BiomasResponse = Array<{
  id: string;
  bioma: string;
  queimadas: boolean;
}>;

export default function useBiomas(source?: string) {
  // WARNING - atualmente a plataforma analisa somente o bioma pantanal
  return useSWR(`/api/queimadas/${source || 'latest'}/biomas`, (url: string) =>
    axios<BiomasResponse>(url).then((data) => data.data.filter((bioma) => bioma.id === 'pantanal'))
  );
}
