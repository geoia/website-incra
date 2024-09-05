import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button, // Import Button from Material-UI
} from '@mui/material';
import Menu from '../components/MainMenu';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import FilterBar from '../components/Estatisticas/FilterBar';
import EstatisticasTable from '../components/Estatisticas/EstatisticasTable';

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
  const [biomaId, setBiomaId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

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

  const handleBiomaChange = (id: string) => {
    setBiomaId(id);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
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

      {isClient && showFilter && (
        <FilterBar 
          onEstadoChange={handleEstadoChange}
          onMunicipioChange={handleMunicipioChange}
          onBiomaChange={handleBiomaChange}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          marginTop: '1rem',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={toggleFilter}
          sx={{
            backgroundColor: '#0F1C3C',
            borderRadius: '10px',
            border: '1px solid white',
            color: 'white',
            padding: 2,
            marginLeft: 2,
            '&:hover': {
              backgroundColor: '#0F1C3C',
            },
          }}
        >
          {showFilter ? 'Esconder Filtros' : 'Mostrar Filtros'}
        </Button>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: '#0F1C3C',
          padding: 2,
          marginTop: '2rem',
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
                  <EstatisticasTable 
                  title="Ranking de meses" 
                  estadoId={estadoId || undefined}
                  municipioId={municipioId || undefined}
                  biomaId={biomaId || undefined}
                  />
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
                    biomaId={biomaId || undefined}
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