import { Feature, Polygon, feature } from '@turf/turf';
import useSWR from 'swr/immutable';
import axios from 'axios';

import { isNumber } from 'lodash';
import { useMemo } from 'react';

export function useLimites(id: number | string) {
  const path = useMemo(() => (isNumber(id) ? (id > 100 ? 'municipio' : 'estado') : 'bioma'), [id]);

  return useSWR<Feature<Polygon>>(`/api/mapas/${path}/${id}`, (url: string) =>
    axios<Polygon>(url).then((res) => feature(res.data))
  );
}
