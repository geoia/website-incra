import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { fetchEstatisticasEstado } from '../../hooks/useEstatisticas';

interface EstatisticasChartProps {
  estadoId: string;
  title: string;
}

const EstatisticasChart: React.FC<EstatisticasChartProps> = ({ estadoId, title }) => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    const getEstatisticas = async () => {
      try {
        const response = await fetchEstatisticasEstado(estadoId);
        const formattedData = response.flatMap((item: any) => 
          item.meses.map((mesData: any) => ({
            mes: `${mesData.mes}/${item.ano}`, // Formata mês/ano para o eixo X
            area_queimada: mesData.area_queimada / 1000000, // Converte para km²
            focos: Number(mesData.focos), // Converte o valor para número
            percentual: mesData.percentual,
          }))
        );
        setData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
      }
    };

    getEstatisticas();
  }, [estadoId]);

  return (
    <>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="area_queimada" name="Área Queimada (km²)" stroke="#8884d8" />
          <Line type="monotone" dataKey="focos" name="Focos" stroke="#82ca9d" />
          <Line type="monotone" dataKey="percentual" name="Percentual" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default EstatisticasChart;
