import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Grid, Button, Box, Typography, Card, CardContent } from '@mui/material';
import { useRouter } from 'next/router';
import Menu from '../components/MainMenu';
import FilterBar from '../components/Estatisticas/FilterBar';
import EstatisticasTable from '../components/Estatisticas/EstatisticasTable';
import EstatisticasBarChart from '../components/Estatisticas/EstatisticasBarChart';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const EstatisticasLineChart = dynamic(() => import('../components/Estatisticas/EstatisticasLineChart'), {
  ssr: false,
});

function isValidParam(param: any): boolean {
  return typeof param === 'string' && param.length > 0;
}

export const getServerSideProps: GetServerSideProps<{ estadoId?: string; municipioId?: string; biomaId?: string }> = async ({ query }) => {
  const props: { estadoId?: string; municipioId?: string; biomaId?: string } = {};

  if (isValidParam(query.estadoId)) props.estadoId = query.estadoId as string;
  if (isValidParam(query.municipioId)) props.municipioId = query.municipioId as string;
  if (isValidParam(query.biomaId)) props.biomaId = query.biomaId as string;

  return { props };
};

export default function Estatisticas(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [local, setLocal] = useState<string | null>(''); 
  const [localId, setLocalId] = useState<string | null>(null);
  const [localSelecionado, setLocalSelecionado] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const { estadoId, municipioId, biomaId } = router.query;

    if (isValidParam(estadoId)) {
        setLocalId(estadoId as string);
        setLocal('estados');
    } else if (isValidParam(municipioId)) {
        setLocalId(municipioId as string);
        setLocal('municipios');
    } else if (isValidParam(biomaId)) {
        setLocalId(biomaId as string);
        setLocal('biomas');
    }
}, [router.query]);


const buildQuery = (local: string, localId: string) => {
  const query = { ...router.query };

  switch (local) {
      case 'municipios':
          query.biomaId = undefined; // Limpa o bioma se município for selecionado
          query.estadoId = undefined; // Limpa o estado se município for selecionado
          query.municipioId = localId; // Define o município selecionado
          break;
      case 'biomas':
          query.estadoId = undefined; // Limpa o estado se bioma for selecionado
          query.municipioId = undefined; // Limpa o município se bioma for selecionado
          query.biomaId = localId; // Define o bioma selecionado
          break;
      case 'estados':
          query.biomaId = undefined; // Limpa o bioma se estado for selecionado
          query.municipioId = undefined; // Limpa o município se estado for selecionado
          query.estadoId = localId; // Define o estado selecionado
          break;
  }

  return query;
};

const handleLocalChange = (local: string, localId: string, localNome: string) => {
  setLocal(local);
  setLocalId(localId);
  setLocalSelecionado(localNome);
  router.push({ query: buildQuery(local, localId) }); // Atualiza a URL com os parâmetros corretos
};


  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const renderEstatisticas = () => (
    <>
      <Grid item xs={12} lg={6}>
        <EstatisticasBarChart 
          title="Linha do tempo de focos de queimadas"
          local={local || undefined}
          localId={localId || undefined}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={12}>
            <EstatisticasTable 
              title="Ranking de meses" 
              local={local || undefined}
              localId={localId || undefined}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Card sx={{ backgroundColor: '#509CBF', borderRadius: '25px' }}>
          <CardContent sx={{ padding: 3 }}>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}>
              Linha do tempo de área queimada
            </Typography>
            <Box sx={{ backgroundColor: 'white', borderRadius: '15px', padding: '15px' }}>
              <EstatisticasLineChart 
                local={local || undefined}
                localId={localId || undefined} 
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );

  return (
    <>
      <Head>
        <title>WegGis - Estatísticas</title>
        <style>{`
          html, body {
            height: 100%;
            margin: 0;
            background-color: #0F1C3C !important;
          }
        `}</style>
      </Head>
      <Menu />

      {isClient && showFilter && (
        <FilterBar
        onLocalChange={(local, localId, localNome) => handleLocalChange(local, localId, localNome)}
        initialBiomaId={props.biomaId}
        initialEstadoId={props.estadoId}
        initialMunicipioId={props.municipioId}
    />
    
      )}

      <Box sx={{ display: 'flex', justifyContent: 'left', marginTop: '1rem' }}>
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
            '&:hover': { backgroundColor: '#0F1C3C' },
          }}
        >
          {showFilter ? 'Esconder Filtros' : 'Mostrar Filtros'}
        </Button>
      </Box>

      <Typography variant='h2' style={{ textAlign: "center", color: "white" }}>
        {localSelecionado}
      </Typography>

      <Grid container spacing={2} sx={{ backgroundColor: '#0F1C3C', padding: 2, marginTop: '2rem' }}>
        {isClient && renderEstatisticas()}
      </Grid>
    </>
  );
}
