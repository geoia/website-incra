import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';

import HeaderInstitucional from '../components/ui/header/Header';
import sobreAnimais from '../images/sobre-animais.png';
import ufmsClaro from '../images/ufms-escuro.png';
import laboratorioClaro from '../images/laboratorio-escuro.png';

export default function Sobre() {
  return (
    <>
      <HeaderInstitucional />
      <Grid container sx={{ height: '100vh', backgroundColor: '#0F1C3C' }}>
        <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={sobreAnimais} alt="Imagens do pantanal" width={400} height={480} />
        </Grid>
        <Grid item lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <Typography
              variant="h3"
              component={'h1'}
              sx={{ color: '#509CBF', fontWeight: 800, marginTop: 3 }}
            >
              Sobre o projeto
            </Typography>
            <Typography variant="h4" sx={{ color: '#A6DFFA', fontWeight: 800, marginTop: 3 }}>
              EcoGis
            </Typography>
            <Typography variant="body2" sx={{ color: '#FFF', marginTop: 3 }}>
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

      <Grid container sx={{ height: '100vh', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
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
    </>
  );
}
