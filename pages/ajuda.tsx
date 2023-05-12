import React from 'react';
import { Grid, Box, Typography, Container, SxProps } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';

import HeaderInstitucional from '../components/ui/header/Header';
import plantaDeFundo from '../images/planta-de-fundo.svg';

export default function Ajuda() {
  const box: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: '#FFF',
    width: 200,
    height: 200,
    border: 'none',
    borderRadius: 10,
  };

  return (
    <>
      <HeaderInstitucional />
      <Box sx={{ position: 'absolute', zIndex: -1, top: '50px', right: 0 }}>
        <Image src={plantaDeFundo} />
      </Box>
      <Container sx={{marginTop: '50px'}}>
        <Grid item sx={{ marginTop: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, marginBottom: 5, textAlign: 'center' }}>
            Tópicos frequentes
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita ex repudiandae
                eos. <br />
                Atque esse vitae beatae dolorum soluta ex fugit impedit aperiam corporis, eveniet
                quae sit vel, saepe nihil.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item lg={8} sx={{ marginTop: 5, bgColor: '#000' }}>
          <Typography variant="h4" sx={{ fontWeight: 500, color: 'secondary' }}>
            Ainda tem dúvida? <br /> Entre em contato com a gente?
          </Typography>
          <Grid item>
            <Box sx={box}>
              <Grid item textAlign={'center'}>
                <EmailIcon color="secondary" sx={{ fontSize: 60 }} />
                <Typography variant="body1">Email</Typography>
                <Typography variant="body2" marginTop={2}>
                  geoiawebgiz@gmail.com
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
