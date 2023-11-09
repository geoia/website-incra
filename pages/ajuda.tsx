import React from 'react';
import Head from 'next/head';
import { Grid, Box, Typography, Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
require('dotenv').config();

import plantaDeFundo from '../public/images/planta-de-fundo.svg';
import Menu from '../components/Menu';

export default function Ajuda() {
  const topicos: Array<{ titulo: string; conteudo: string }> = [];

  return (
    <>
      <Head>
        <title>GeoIA - Ajuda</title>
      </Head>
      <Menu />
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          zIndex: -1,
          top: '50px',
          right: 0,
        }}
      >
        <Image src={plantaDeFundo} alt="planta de fundo" />
      </Box>
      <Box
        sx={{
          display: { sm: 'flex', md: 'none' },
          position: 'absolute',
          zIndex: -1,
          // top: '50px',
          right: 0,
        }}
      >
        <Image src={plantaDeFundo} alt="planta de fundo" width={800}/>
      </Box>
      <Container>
        {topicos.length > 0 && (
          <Grid container sx={{ marginTop: 5, justifyContent: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 500, marginBottom: 5, textAlign: 'center' }}>
              Tópicos frequentes
            </Typography>
            <Grid item>
              {topicos.map((topico, index) => {
                return (
                  <Accordion sx={{ marginTop: 2 }} key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{topico.titulo}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{topico.conteudo}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Grid>
          </Grid>
        )}

        <Grid item lg={8} sx={{ marginTop: 5, bgColor: '#000' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500, color: 'secondary', textAlign: 'center' }}
          >
            Ainda tem dúvida, <br /> Entre em contato com a gente:
          </Typography>
        </Grid>
        <Grid container justifyContent={'center'} marginTop={5}>
          <Paper sx={{ maxWidth: '200px', textAlign: 'center', padding: '10px', color: '#0F1C3C' }}>
            <EmailIcon color="secondary" sx={{ fontSize: 60 }} />
            <Typography variant="body1">Email</Typography>
            <Typography variant="body2" marginTop={2}>
              {process.env.NEXT_PUBLIC_EMAIL_CONTATO}
            </Typography>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}
