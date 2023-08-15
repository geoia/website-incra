import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import useSWR from 'swr';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-br';

dayjs.extend(customParseFormat);
dayjs.locale('pt-br');

export default function useSources() {
  const { data, error, isLoading } = useSWR<AxiosResponse<string[]>>(
    '/api/queimadas/sources',
    axios
  );

  return {
    data: data?.data
      .map((source) => dayjs(source, 'YYYYMM'))
      .sort((d1, d2) => (d1.isAfter(d2) ? -1 : 1))
      .map((source) => ({
        source: source.format('YYYYMM'),
        label: source.format('MMM/YYYY'),
      })),
    isLoading,
    error,
  };
}
