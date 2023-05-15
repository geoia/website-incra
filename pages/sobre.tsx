import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Box, Container } from '@mui/material';

import CrouselParticipant from '../components/ui/Carousel';
import Menu from '../components/ui/header/Menu';
import sobreAnimais from '../images/sobre-animais.png';
import ufmsClaro from '../images/ufms-escuro.png';
import laboratorioClaro from '../images/laboratorio-escuro.png';
import plantAboutLeft from '../images/plant-about-left.svg';
import plantAboutRight from '../images/plant-about-right.svg';
import plantAboutBottom from '../images/plant-about-bottom.svg';
import { Translate } from '@mui/icons-material';

export default function Sobre() {
  return (
    <>
      <Menu />
      <Grid container sx={{ height: '100vh', backgroundColor: '#0F1C3C' }}>
        <Grid item lg md sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={sobreAnimais} alt="Imagens do pantanal" width={500} height={580} />
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
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid item>
            <Image src={laboratorioClaro} alt="ufmsEscuro" width={300} height={300} />
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
            <Image src={ufmsClaro} alt="ufmsEscuro" width={300} height={300} />
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
        <Grid item sx={{ position: 'absolute', left: 0 }}>
          <Image
            src={plantAboutLeft}
            alt="Planta"
            width={500}
            height={500}
            style={{ transform: 'translateX(-40%)' }}
          />
        </Grid>
        <Grid item sx={{ position: 'absolute', right: 0 }}>
          <Image
            src={plantAboutRight}
            alt="Planta"
            width={500}
            height={500}
            style={{ transform: 'translateX(50%)' }}
          />
        </Grid>
        <Grid item sx={{ position: 'absolute', bottom: 0 }}>
          <Image
            src={plantAboutBottom}
            alt="Planta"
            width={400}
            height={400}
            style={{ transform: 'translateY(50%)' }}
          />
        </Grid>
        <Grid item sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: '#fff' }}>
            Nosso time
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Professores, pesquisadores e estudantes <br /> da Universidade Federal de Mato Grosso do
            Sul
          </Typography>
          <Grid sx={{ marginTop: 5, width: '100%' }}>
            <CrouselParticipant></CrouselParticipant>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
