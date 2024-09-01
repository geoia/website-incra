import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { fetchEstatisticasEstado, fetchEstatisticasMunicipio, fetchEstatisticasBioma } from '../../hooks/useEstatisticas';

interface EstatisticasLineChartProps {
  estadoId?: string;
  municipioId?: string;
  biomaId?: string;
  title: string;
}

const EstatisticasLineChart: React.FC<EstatisticasLineChartProps> = ({ estadoId, municipioId, biomaId, title }) => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    const getEstatisticas = async () => {
      try {
        let response: any[] = [];

        if (municipioId) {
          console.log('Buscando estatísticas do município...');
          const municipioData = await fetchEstatisticasMunicipio(municipioId);
          response = municipioData;
        } else if (estadoId) {
          console.log('Buscando estatísticas do estado...');
          const estadoData = await fetchEstatisticasEstado(estadoId);
          response = estadoData;
        } else if (biomaId) {
          console.log('Buscando estatísticas do bioma...');
          const biomaData = await fetchEstatisticasBioma(biomaId);
          response = biomaData;
        }

        if (response.length === 0) {
          console.warn("Nenhuma estatística foi carregada.");
          setData([]);
          return;
        }

        const formattedData = response.flatMap((item: any) => 
          item.meses.map((mesData: any) => ({
            mes: `${mesData.mes}/${item.ano}`,
            area_queimada: mesData.area_queimada / 1000000,
            focos: Number(mesData.focos),
            percentual: mesData.percentual,
          }))
        );
        setData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
      }
    };

    getEstatisticas();
  }, [estadoId, municipioId, biomaId]); 

  return (
    <>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="area_queimada" name="Área Queimada (km²)" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="focos" name="Focos" stroke="#82ca9d" />
          <Line type="monotone" dataKey="percentual" name="Percentual" stroke="#ffc658" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default EstatisticasLineChart;
