import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { fetchEstatisticas } from '../../hooks/useEstatisticas';

interface EstatisticasBarChartProps {
    local?: string;
    localId?: string;
    title: string;
}

const EstatisticasBarChart: React.FC<EstatisticasBarChartProps> = ({ local, localId, title }) => {
    const [data, setData] = useState<Array<any>>([]);

    useEffect(() => {
        const getEstatisticas = async () => {
          try {
            let response: any[] = [];
            
            if(local && localId){
              console.log(`Buscando estatísticas do ${local}...`);
              const data = await fetchEstatisticas(local, localId)
              response = data;
            }
    
            if (response.length === 0) {
              console.warn("Nenhuma estatística foi carregada.");
              setData([]);
              return;
            }
    
            const formattedData = response.reduce((acc: any, item: any) => {
              const totalFocos = item.meses.reduce((sum: number, mesData: any) => sum + Number(mesData.focos), 0);
              acc.push({
                ano: item.ano,
                focos: totalFocos,
              });
              return acc;
            }, []);
    
            setData(formattedData);
          } catch (error) {
            console.error("Erro ao buscar estatísticas:", error);
          }
        }

        getEstatisticas();
    }, [local, localId]); 

  return (
    <Card
      sx={{
        backgroundColor: '#509CBF',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CardContent sx={{ padding: 3, flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
          }}
        >
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ano" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="focos" fill="#8884d8" />
          </BarChart>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EstatisticasBarChart;
