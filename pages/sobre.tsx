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
            <Typography variant="h3" component={'h1'} sx={{color: '#509CBF', fontWeight: 800, marginTop:3}}>Sobre o projeto</Typography>
            <Typography variant="h4" sx={{color: '#A6DFFA', fontWeight: 800, marginTop:3}}>
              EcoGis
            </Typography>
            <Typography variant="body2" sx={{color: '#FFF', marginTop:3}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde porro deleniti,
              qui dolore officiis omnis rem necessitatibus maiores doloremque non repudiandae,
              mollitia aperiam quas fugit fuga vel eveniet numquam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere voluptas, tempora nulla quod provident quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, reprehenderit! Dicta harum suscipit maiores ratione, perspiciatis, natus nesciunt, odio provident consequuntur nisi enim quisquam culpa nulla. Veritatis earum porro eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illum doloribus omnis cupiditate consequuntur, voluptatum molestias doloremque beatae similique distinctio corporis sapiente sunt consequatur voluptates qui ut natus aliquam iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem ex vel nihil commodi cumque dicta, ut praesentium facilis necessitatibus quod at officia sequi, accusamus, exercitationem inventore quasi laudantium! Eum?
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item>
            <Image src={ufmsClaro} alt="ufmsEscuro" width={750} height={750} />
          </Grid>
          <Grid item>
            <Image src={laboratorioClaro} alt="LaboratorioClaro" width={750} height={750} />
          </Grid>
        </Grid>
        <Grid item lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <Typography variant="h5" component={'h2'} sx={{ fontWeight: 600, color: '#0F1C3C' }}>
              Laboratório Geomática e IA
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C' }}>
            No laboratório de Geomática e Inteligência Artificial, utilizamos técnicas e tecnologias da informação para gestão de dados espaciais, buscando identificar padrões, tendências e relações entre esses dados, com o objetivo de oferecer insights e soluções inovadoras para desafios geográficos complexos.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C' }}>
              A Geomática engloba diversas áreas do conhecimento, como a cartografia, topografia, sensoriamento remoto e sistemas de informação geográfica (SIG), e tem como objetivo coletar, processar, analisar e gerenciar dados geográficos, por meio de serviços de tecnologia da informação. Essas áreas estão em crescente expansão e desenvolvimento, sendo aplicáveis em uma ampla gama de setores, como planejamento urbano, gestão de recursos naturais, monitoramento ambiental e gerenciamento de desastres, as quais podemos contribuir por meio da identificação de áreas críticas para ações preventivas e da previsão de eventos futuros e apoiar a tomada de decisões informadas e assertivas.
             </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C' }}>
              Dessa forma, o laboratório de Geomática e Inteligência Artificial propõe projetos de pesquisa e extensão capazes de resolver ou minimizar problemas ambientais e urbanos, como desmatamento, queimadas, falta de planejamento urbano, infraestrutura e saneamento básico do Brasil.
            </Typography>
            <Typography
              variant="h5"
              component={'h2'}
              sx={{ marginTop: 5, fontWeight: 600, color: '#0F1C3C' }}
            >
              UFMS
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C' }}>
              A Universidade Federal de Mato Grosso do Sul (UFMS) é uma instituição de ensino superior pública federal brasileira, que começou sua história em 1962. Contudo, a Universidade ganhou esse nome somente depois da divisão do estado em Mato Grosso e Mato Grosso do Sul. A partir de 1966, novos institutos, faculdades, cursos e departamentos foram criados e, em 1967, a rede de ensino superior do estado teve um crescimento significativo.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C' }}>
              Hoje, a Universidade está presente direta e indiretamente em um raio de mais de 500 km, que abrange mais de 100 municípios, em que cerca de 15 mil alunos são beneficiados pela instituição e mais de mil professores integram o corpo docente da faculdade. Com campi instalados em diversas cidades do interior, o que contribui para descentralizar o ensino para atender à demanda de várias regiões do estado, por meio de cursos de graduação e pós-graduação, presenciais e a distância, os quais também englobam os cursos de especialização e os programas de mestrado e doutorado. O campus principal e a sede administrativa da UFMS compõem a Cidade Universitária, localizada em Campo Grande, capital do estado. Segundo o Índice Geral de Cursos (IGC), criado pelo Ministério da Educação (MEC), a UFMS é a melhor universidade de Mato Grosso do Sul. Em 2011, ela foi classificada com conceito 4, em uma escala de 1 a 5, e está entre as 100 universidades com maior IGC contínuo. 
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 14, color: '#0F1C3C' }}>
             Visando ultrapassar os objetivos essenciais de aprimoramento do ensino e estímulo às atividades de pesquisa e de extensão, a UFMS vem participando do ensino e da preservação dos recursos naturais do meio ambiente, especialmente da fauna e flora do Pantanal, região onde está inserida, e que motiva estudos e pesquisas ecológicas na instituição.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
