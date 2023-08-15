import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';
import Head from 'next/head';

import CrouselParticipant from '../components/Carousel';
import Menu from '../components/Menu';

import sobreAnimais from '../public/images/sobre-animais.png';
import ufmsClaro from '../public/images/ufms-escuro.png';
import laboratorioClaro from '../public/images/laboratorio-escuro.png';
import facomEscuro from '../public/images/facom-escuro.png';
import plantAboutLeft from '../public/images/plant-about-left.svg';
import plantAboutRight from '../public/images/plant-about-right.svg';
import plantAboutBottom from '../public/images/plant-about-bottom.svg';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>GeoIA - Sobre</title>
      </Head>
      <Menu />
      <Grid container sx={{ minHeight: '100vh', backgroundColor: '#0F1C3C' }}>
        <Grid
          item
          lg
          md
          sx={{
            display: { xs: 'none', md: 'none', lg: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={sobreAnimais} alt="Imagens do pantanal" width={500} />
        </Grid>
        <Grid
          item
          lg={7}
          md={6}
          sm
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 8 }}
        >
          <Box>
            <Typography variant="h2" sx={{ color: '#509CBF', fontWeight: 800, marginTop: 3 }}>
              Sobre o projeto
            </Typography>
            <Typography variant="h3" sx={{ color: '#A6DFFA', fontWeight: 800, marginTop: 3 }}>
              EcoGis
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFF', marginTop: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde porro deleniti,
              qui dolore officiis omnis rem necessitatibus maiores doloremque non repudiandae,
              mollitia aperiam quas fugit fuga vel eveniet numquam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere voluptas, tempora nulla quod provident quasi
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, reprehenderit! Dicta
              harum suscipit maiores ratione, perspiciatis, natus nesciunt, odio provident
              consequuntur nisi enim quisquam culpa nulla. Veritatis earum porro eos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Impedit illum doloribus omnis cupiditate
              consequuntur, voluptatum molestias doloremque beatae similique distinctio corporis
              sapiente sunt consequatur voluptates qui ut natus aliquam iste. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Maiores rem ex vel nihil commodi cumque dicta, ut
              praesentium facilis necessitatibus quod at officia sequi, accusamus, exercitationem
              inventore quasi laudantium! Eum?
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
        }}
      >
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid item>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Image src={laboratorioClaro} alt="ufmsEscuro" width={300} height={300} />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h5" component={'h2'} sx={{ fontWeight: 600, color: '#0F1C3C' }}>
              Laboratório Geomática e IA
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C', maxWidth: 800 }}
            >
              O laboratório de Geomática e Inteligência Artificial utiliza técnicas e tecnologias da
              informação para gestão de dados espaciais, identificando padrões, tendências e
              relações para oferecer soluções inovadoras para desafios geográficos complexos. A
              Geomática abrange áreas como cartografia, topografia, sensoriamento remoto e sistemas
              de informação geográfica (SIG), que têm aplicação em diversos setores, como
              planejamento urbano, gestão de recursos naturais, monitoramento ambiental e
              gerenciamento de desastres. O laboratório propõe projetos de pesquisa e extensão
              capazes de resolver ou minimizar problemas ambientais e urbanos, como desmatamento,
              queimadas, falta de planejamento urbano, infraestrutura e saneamento básico do Brasil.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid item>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Image src={facomEscuro} alt="facomEscuro" width={300} height={300} />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h5" component={'h2'} sx={{ fontWeight: 600, color: '#0F1C3C' }}>
              Laboratório de Engenharia de Software (LEDES)
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C', maxWidth: 800 }}
            >
              O Laboratório de Engenharia de Software (LEDES), da Faculdade de Computação - UFMS,
              caminha com a missão de promover o avanço do estado-da-arte e do estado-da-prática de
              Engenharia de Software, por meio de atividades de pesquisa científica, formação humana
              e fornecimento de soluções inovadoras para desafios reais da academia e indústria. As
              soluções desenvolvidas no LEDES, desde sua criação em 2003, possibilitaram a formação
              de pessoal qualificado, o aprimoramento das habilidades do grupo de Engenharia de
              Software no desenvolvimento de soluções computacionais, bem como a formação de uma
              infraestrutura tecnológica para fomentar a transferência do conhecimento entre
              universidade, governo e iniciativa privada. Com a visão de futuro que o laboratório se
              torne um centro de referência internacional, destacando-se pelo rigor científico e
              ética profissional. E para isso, os seguintes valores no laboratório são destacados:
              compromisso e responsabilidade; respeito ao ser humano e valorização de suas relações;
              foco em qualidade; valorização da criatividade; rigor científico e ética profissional.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: 3, display: 'flex', alignItems: 'center' }}>
          <Grid item>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Image src={ufmsClaro} alt="ufmsEscuro" width={300} height={300} />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h5" component={'h2'} sx={{ fontWeight: 600, color: '#0F1C3C' }}>
              UFMS
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C', maxWidth: 800 }}
            >
              A UFMS é uma universidade pública federal do Brasil que começou em 1962 e recebeu esse
              nome após a divisão do estado de Mato Grosso. A instituição cresceu significativamente
              a partir de 1967, com a criação de novos institutos, faculdades, cursos e
              departamentos. Atualmente, a UFMS tem mais de 15 mil alunos e mais de mil professores
              em mais de 100 municípios, com campus em diversas cidades do interior. A universidade
              oferece cursos de graduação, pós-graduação, especialização, mestrado e doutorado,
              tanto presenciais quanto a distância. Segundo o IGC do MEC, a UFMS é a melhor
              universidade de Mato Grosso do Sul e está entre as 100 melhores do país. A UFMS se
              dedica à pesquisa, à extensão e à preservação dos recursos naturais, especialmente da
              fauna e flora do Pantanal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#0F1C3C',
        }}
      >
        <Grid
          item
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            left: 0,
            width: 250,
            height: 500,
            overflow: 'hidden',
          }}
        >
          <Image
            src={plantAboutLeft}
            alt="Planta"
            style={{ width: 'auto', height: '100%', marginLeft: -200 }}
          />
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            right: 0,
            overflow: 'hidden',
            width: 250,
            height: 500,
          }}
        >
          <Image src={plantAboutRight} alt="Planta" />
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            bottom: 0,
            overflow: 'hidden',
            width: 550,
            height: 300,
          }}
        >
          <Image src={plantAboutBottom} alt="Planta" style={{}} />
        </Grid>
        <Grid item sx={{ textAlign: 'center', padding: 1 }}>
          <Typography variant="h2" sx={{ color: '#fff' }}>
            Nosso time
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Professores, pesquisadores e estudantes <br /> da Universidade Federal de Mato Grosso do
            Sul
          </Typography>
          <Grid
            sx={{
              marginTop: 5,
              width: 1000,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <CrouselParticipant tam={5} />
          </Grid>
          <Grid
            sx={{
              marginTop: 5,
              width: '100%',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <CrouselParticipant tam={2} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
