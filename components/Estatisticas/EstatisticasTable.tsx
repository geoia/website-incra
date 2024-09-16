import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { fetchEstatisticasEstado, fetchEstatisticasMunicipio, fetchEstatisticasBioma } from '../../hooks/useEstatisticas';

interface EstatisticasTableProps {
  title: string;
  estadoId?: string;
  municipioId?: string;
  biomaId?: string;
}

const EstatisticasTable: React.FC<EstatisticasTableProps> = ({ title, estadoId, municipioId, biomaId }) => {
  const [data, setData] = useState<any[]>([]);

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

        const meses = response.flatMap((item: any) => 
          item.meses.map((mesData: any) => ({
            ano: item.ano,
            mes: mesData.mes,
            areaQueimada: mesData.area_queimada / 1000000,
          }))
        );

        const mesesOrdenados = meses.sort((a, b) => b.areaQueimada - a.areaQueimada);

        setData(mesesOrdenados);
      } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
      }
    };

    getEstatisticas();
  }, [estadoId, municipioId, biomaId]);

  return (
    <Card
      sx={{
        backgroundColor: '#509CBF',
        borderRadius: '25px',
        height: '396px',
      }}
    >
      <CardContent sx={{ padding: 3 }}>
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
            maxHeight: '300px',
            overflowY: 'auto',  
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Ano</TableCell>
                <TableCell>Mês</TableCell>
                <TableCell>Área Queimada (km²)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, 5).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.ano}</TableCell>
                  <TableCell>{row.mes}</TableCell>
                  <TableCell>{row.areaQueimada.toFixed(2)}</TableCell>
                </TableRow>
              ))}
              {data.slice(5).map((row, index) => (
                <TableRow key={index + 5}>
                  <TableCell>{index + 6}</TableCell>
                  <TableCell>{row.ano}</TableCell>
                  <TableCell>{row.mes}</TableCell>
                  <TableCell>{row.areaQueimada.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EstatisticasTable;
