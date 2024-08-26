import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
} from '@mui/material';
import Menu from '../components/MainMenu';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import FilterBar from '../components/Estatisticas/FilterBar';

const EstatisticasLineChart = dynamic(() => import('../components/Estatisticas/EstatisticasLineChart'), {
  ssr: false,
});

const dataBar = [
  { name: 'Category 1', uv: 225 },
  { name: 'Category 2', uv: 256 },
  // ...restante dos dados
];

export default function Estatisticas() {
  const [estadoId, setEstadoId] = useState<string | null>(null);
  const [municipioId, setMunicipioId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEstadoChange = (id: string) => {
    setEstadoId(id);
    setMunicipioId(null);  
  };

  const handleMunicipioChange = (id: string) => {
    setMunicipioId(id);
  };

  return (
    <>
      <Head>
        <title>WegGis - Estatísticas</title>
        <style>
          {`
            html, body {
              height: 100%;
              margin: 0;
              background-color: #0F1C3C !important;
            }
          `}
        </style>
      </Head>
      <Menu />
      {isClient && (
        <FilterBar 
          onEstadoChange={handleEstadoChange}
          onMunicipioChange={handleMunicipioChange}
        />
      )}

      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: '#0F1C3C',
          padding: 2,
          marginTop: '4rem',
        }}
      >
        {/* Primeira Camada: Gráfico de Barras + Tabelas */}
        {isClient && (
          <>
            <Grid item xs={12} lg={6}>
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
                    Gráfico de Barras
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
                    <BarChart width={500} height={250} data={dataBar}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      backgroundColor: '#509CBF',
                      borderRadius: '25px',
                      height: '100%',
                    }}
                  >
                    <CardContent sx={{ padding: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
                      >
                        Tabela de Dados
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '15px',
                          padding: '15px',
                          overflow: 'auto',
                        }}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Coluna 1</TableCell>
                              <TableCell>Coluna 2</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Dado 1</TableCell>
                              <TableCell>Dado 2</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Dado 3</TableCell>
                              <TableCell>Dado 4</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      backgroundColor: '#509CBF',
                      borderRadius: '25px',
                      height: '100%',
                    }}
                  >
                    <CardContent sx={{ padding: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
                      >
                        Tabela de Dados
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '15px',
                          padding: '15px',
                          overflow: 'auto',
                        }}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Coluna 1</TableCell>
                              <TableCell>Coluna 2</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Dado 1</TableCell>
                              <TableCell>Dado 2</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Dado 3</TableCell>
                              <TableCell>Dado 4</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}

        {/* Segunda Camada: Gráfico de Linhas utilizando EstatisticasChart */}
        {isClient && (
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <Card
              sx={{
                backgroundColor: '#509CBF',
                borderRadius: '25px',
              }}
            >
              <CardContent sx={{ padding: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
                >
                  Gráfico de Linhas
                </Typography>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '15px',
                  }}
                >
                  <EstatisticasLineChart 
                    estadoId={estadoId || undefined} 
                    municipioId={municipioId || undefined} 
                    title="Estatísticas Gerais de Queimadas" 
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}
