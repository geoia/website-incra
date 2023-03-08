import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

import HeaderInstitucional from '../components/ui/header/Header';
import TextField from '../components/ui/input/TextField';

export default function Ajuda() {
  return (
    <>
      <HeaderInstitucional />
      <Grid container direction={'column'} alignItems={'center'} marginTop={15}>
        <Grid item>
          <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 800, color: '#FFF' }}>
            Como podemos <br />
            te ajudar?
            <TextField sx={{ marginTop: 7 }} />
          </Typography>
        </Grid>
        <Grid item lg={10} sx={{ marginTop: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, marginBottom: 5, color: 'secondary', textAlign: 'center' }}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita ex repudiandae eos. <br/>Atque esse vitae beatae dolorum soluta ex fugit impedit aperiam corporis, eveniet quae sit vel, saepe nihil.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{marginTop: 2}}>
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
          <Accordion sx={{marginTop: 2}}>
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
          <Accordion sx={{marginTop: 2}}>
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
          <Accordion sx={{marginTop: 2}}>
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
          {/* <Typography variant='h4' sx={{fontWeight: 500, color: 'secondary'}}>Ainda tem dúvida? <br/> Entre em contato com a gente?</Typography> */}
          <Grid item sx={{ marginTop: 5, display: 'flex', justifyContent: 'space-around' }}>
            <Grid item sx={{ bgcolor: '#FFF', width: 200, height: 200 }}>
              <EmailIcon color='secondary'/>
            </Grid>
            <Grid item sx={{ bgcolor: '#FFF' }}>
              <LocalPhoneIcon color='secondary'/>
            </Grid>
            <Grid item sx={{ bgcolor: '#FFF' }}>
              <NoteAltIcon color='secondary'/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
