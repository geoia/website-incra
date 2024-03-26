import Image from 'next/image';
import Head from 'next/head';
import { Box, Grid, Typography } from '@mui/material';

import infraestrutura from '../public/images/infraestrutura.png';
import alagadas from '../public/images/alagadas.png';
import queimadas from '../public/images/queimadas.png';
import vegetacao from '../public/images/vegetacao.png';
import plantHomeLeft from '../public/images/plant-home-left.svg';
import homeLogoUfms from '../public/images/home-logo-ufms.png';
import homeFolhas from '../public/images/home-folhas.png';
import homeTucano from '../public/images/home-tucano.png';

import Menu from '../components/MainMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>GeoIA - Home</title>
      </Head>
      <Menu />
      <Grid
        sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Image src={homeTucano} alt="homeTucano" height={350} width={180} />
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Image src={homeTucano} alt="homeTucano" height={220} width={100} />
        </Box>
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <Image src={homeFolhas} alt="homeTucano" height={220} width={400} />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            zIndex: -1,
            position: 'absolute',
            right: 60,
            bottom: 40,
          }}
        >
          <Image src={homeLogoUfms} alt="homeTucano" height={220} width={115} />
        </Box>
        <Grid
          item
          sx={{
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 6,
            padding: 3,
          }}
        >
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 600, color: 'white' }}>
              EcoGis
            </Typography>
            <Typography variant="h6" color={'secondary'} fontWeight={500}>
              Universidade Federal de Mato Grosso do Sul
            </Typography>
          </Grid>
          <Typography variant="h4" color={'white'} fontWeight={500}>
            Laboratório Geomática e IA
          </Typography>
          <Typography variant="h3" color={'secondary'} fontWeight={500}>
            <em>Mapeando a biodiversidade brasileira</em>
          </Typography>
          <Typography variant="body1" color={'secondary'} maxWidth={600}>
            Projeto de pesquisa e extensão do laboratório Geomática e Inteligência Artificial em
            parceria com o Laboratório de Engenharia de Software, da Universidade Federal de Mato
            Grosso do Sul, para monitoramento e gestão dos biomas do Brasil, por meio da ferramenta
            WebGis
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          minHeight: '100vh',
          bgcolor: ' #0F1C3C',
          position: 'relative',
          padding: 5,
        }}
      >
        <Grid item>
          <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 600, color: '#FFF' }}>
            WebGis
          </Typography>
        </Grid>

        <Grid container sx={{ marginTop: 6, justifyContent: 'center', alignItems: 'center' }}>
          <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center', margin: 1.5 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Image src={queimadas} alt="Queimadas" width={150} height={150} />
              </Box>
              <Grid item>
                <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
                  Queimadas
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#509CBF', maxWidth: 500, textAlign: 'justify' }}
                >
                  As queimadas são incêndios que se propagam em áreas florestais, agrícolas ou
                  urbanas, causando danos socioambientais. Podem ocorrer por ação humana, como
                  desmatamento, queima de lixo ou negligência. Os efeitos incluem destruição da
                  fauna e flora, emissão de gases tóxicos e aumento do aquecimento global, colocando
                  em risco a saúde humana. Medidas incluem conscientização, fiscalização e punição
                  dos responsáveis.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', margin: 1.5 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Image src={alagadas} alt="Áreas alagadas" width={150} height={150} />
              </Box>
              <Grid item>
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
                  Áreas Alagadas
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#509CBF', maxWidth: 500, textAlign: 'justify' }}
                >
                  As áreas alagadas são essenciais para a biodiversidade e serviços ecossistêmicos,
                  protegendo contra enchentes e apoiando atividades econômicas locais. Mas, são
                  vulneráveis a impactos, como mudanças climáticas, exigindo gestão adequada para
                  conservação da biodiversidade, segurança hídrica e alimentar das populações
                  locais. Medidas como conservação, monitoramento da qualidade da água e práticas
                  sustentáveis são cruciais.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center', margin: 1.5 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Image src={infraestrutura} alt="Infraestrutura" width={150} height={150} />
              </Box>
              <Grid item>
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
                  Infraestrutura
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#509CBF', maxWidth: 500, textAlign: 'justify' }}
                >
                  Infraestrutura é fundamental para o desenvolvimento econômico e social, incluindo
                  construções, sistemas e equipamentos que oferecem serviços essenciais à sociedade.
                  Investimentos em infraestrutura são prioritários para países em busca de
                  progresso, pois a falta deles ou a baixa qualidade pode levar a problemas como
                  tráfego intenso, falta de energia e água.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', margin: 1.5 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Image src={vegetacao} alt="Vegetação" width={150} height={150} />
              </Box>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 1, fontSize: 17, color: '#FFFFFF' }}
                >
                  Vegetação
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#509CBF', maxWidth: 500, textAlign: 'justify' }}
                >
                  A vegetação é crucial para o equilíbrio ecológico e a produção de oxigênio.
                  Infelizmente, atividades humanas como agricultura intensiva e desmatamento
                  prejudicam a vegetação e afetam negativamente o ecossistema. Monitorar a vegetação
                  é importante para implementar políticas de preservação ambiental. O sensoriamento
                  remoto pode fornecer informações precisas sobre a cobertura vegetal e identificar
                  áreas afetadas.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            overflow: 'hidden',
            left: 0,
            bottom: 0,
          }}
        >
          <Image
            src={plantHomeLeft}
            alt="planta verde"
            width={300}
            height={300}
            style={{ transform: 'translate(-30%, 20%)' }}
          />
        </Grid>
      </Grid>
    </>
  );
}
