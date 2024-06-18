import { Feature, Polygon, feature } from '@turf/turf';
import useSWR from 'swr/immutable';
import axios from 'axios';

export function useLimites(id: number) {
  return useSWR<Feature<Polygon>>(
    `/api/mapas/${id > 100 ? 'municipio' : 'estado'}/${id}`,
    (url: string) => axios<Polygon>(url).then((res) => feature(res.data))
  );
}
