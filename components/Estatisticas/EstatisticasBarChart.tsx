import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { fetchEstatisticasBioma, fetchEstatisticasEstado, fetchEstatisticasMunicipio } from '../../hooks/useEstatisticas';

interface EstatisticasBarChartProps {
    estadoId?: string;
    municipioId?: string;
    biomaId?: string;
    title: string;
}

const EstatisticasBarChart: React.FC<EstatisticasBarChartProps> = ({ estadoId, municipioId, biomaId, title }) => {
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
                focos: Number(mesData.focos),      
              }))
            );
            setData(formattedData);
          } catch (error) {
            console.error("Erro ao buscar estatísticas:", error);
          }
        }

        getEstatisticas();
    }, [estadoId, municipioId, biomaId]); 

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
            <XAxis dataKey="mes" />
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
