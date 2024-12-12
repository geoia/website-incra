import { Box, Typography } from '@mui/material';
import React from 'react';

export default function InfoContent() {
  return (
    <Box sx={{ padding: '1rem', maxWidth: '400px', backgroundColor: 'white', borderRadius: '8px' }}>
      <Typography
        variant="h6"
        component="h2"
        color="#509CBF"
        fontFamily='Arial'
        fontWeight="800"
        fontSize="32"
      >
        SOBRE O PROJETO ECOGIS
      </Typography>
      <Typography variant="body2" fontFamily={'sans-serif'} sx={{ mt: 1 }} align='justify'>
        EcoGis é uma plataforma de inteligência artificial que utiliza imagens de satélite e
        processamento de dados para mapeamento de áreas de queimadas, áreas alagadas e vegetação com
        maior precisão. A plataforma também visa apoiar diversos setores da sociedade, como o setor
        público, privado e a sociedade civil, com informações geográficas e ambientais para tomada
        de decisão, planejamento e gestão de recursos naturais. A plataforma permite acesso à dados
        históricos e estatísticos sobre os dados monitorados. A plataforma é uma iniciativa do
        Laboratório de Geomática e Inteligência Artificial (GeoIA) da Universidade Federal de Mato
        Grosso do Sul (UFMS), em parceria com o Laboratório de Engenharia de Software (LEDES) da
        Faculdade de Computação (FACOM) da UFMS.
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        color="#509CBF"
        fontFamily='Arial'
        fontWeight="800"
        fontSize="32"
        sx={{ mt: 2 }}
      >
        Laboratório Geomática e IA
      </Typography>
      <Typography variant="body2" fontFamily={'sans-serif'} sx={{ mt: 1 }} align='justify'>
        O laboratório de Geomática e Inteligência Artificial utiliza técnicas e tecnologias da
        informação para gestão de dados espaciais, identificando padrões, tendências e relações para
        oferecer soluções inovadoras para desafios geográficos complexos. A Geomática abrange áreas
        como cartografia, topografia, sensoriamento remoto e sistemas de informação geográfica
        (SIG), que têm aplicação em diversos setores, como planejamento urbano, gestão de recursos
        naturais, monitoramento ambiental e gerenciamento de desastres. O laboratório propõe
        projetos de pesquisa e extensão capazes de resolver ou minimizar problemas ambientais e
        urbanos, como desmatamento, queimadas, falta de planejamento urbano, infraestrutura e
        saneamento básico do Brasil.
      </Typography>
    </Box>
  );
}
