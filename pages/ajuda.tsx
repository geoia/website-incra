import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import HeaderInstitucional from '../components/ui/header/Header';
import TextField from '../components/ui/input/TextField';
import { fontWeight } from '@mui/system';

export default function Ajuda() {
  return (
    <>
      <HeaderInstitucional />
      <Grid container direction={'column'} alignItems={'center'} margin={'80px auto'}>
        <Grid item>
          <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 800, color: '#FFF' }}>
            Como podemos <br />
            te ajudar?
            <TextField placeholder='Descreva sua dúvida' sx={{ marginTop: 7 }} InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon color='secondary'/>
            </InputAdornment>
          ),
          disableUnderline: true,
        }}/>
          </Typography>
        </Grid>
        <Grid item sx={{ marginTop: 5 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 500, marginBottom: 5, color: 'secondary', textAlign: 'center' }}
          >
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
          <Typography variant='h4' sx={{fontWeight: 500, color: 'secondary'}}>Ainda tem dúvida? <br/> Entre em contato com a gente?</Typography>
          <Grid
            item
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: 5,
              gap: 3,
            }}
          >
            <Typography></Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FFF',
                width: 200,
                height: 200,
                border: 'none',
                borderRadius: 10
              }}
            >
              <Grid item textAlign={'center'}>
                <EmailIcon color="secondary" sx={{fontSize: 60}} />
                <Typography variant="body1"><strong>Email</strong></Typography>
                <Typography variant="body2" marginTop={2}>geoiawebgiz@gmail.com</Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FFF',
                width: 200,
                height: 200,
                border: 'none',
                borderRadius: 10
              }}
            >
              <Grid item textAlign={'center'}>
                <LocalPhoneIcon color="secondary" sx={{fontSize: 60}}/>
                <Typography variant="body1"><strong>Telefone</strong></Typography>
                <Typography variant="body2" marginTop={2}>(67) 99999-9999</Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FFF',
                width: 200,
                height: 200,
                border: 'none',
                borderRadius: 10
              }}
            >
              <Grid item textAlign={'center'}>
                <NoteAltIcon color="secondary" sx={{fontSize: 60}}/>
                <Typography variant="body1"><strong>Fomulário</strong></Typography>
                <Typography variant="body2" marginTop={1}>
                  Envie-nos sua dúvida por meio do formulário de contato.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
