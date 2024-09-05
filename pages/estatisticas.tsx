import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import Menu from '../components/MainMenu';
import FilterBar from '../components/Estatisticas/FilterBar';
import EstatisticasTable from '../components/Estatisticas/EstatisticasTable';
import EstatisticasBarChart from '../components/Estatisticas/EstatisticasBarChart'; 

const EstatisticasLineChart = dynamic(() => import('../components/Estatisticas/EstatisticasLineChart'), {
  ssr: false,
});


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
              <EstatisticasBarChart 
                  title="Linha do tempo de focos de queimadas" 
                  estadoId={estadoId || undefined}
                  municipioId={municipioId || undefined}
                  biomaId={biomaId || undefined} />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} sm={12}>
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

        {/* Segunda Camada: Gráfico de Linhas */}
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
                  Linha do tempo de área queimada
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
