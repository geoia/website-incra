import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';

import HeaderInstitucional from '../components/ui/header/Header';
import TextField from '../components/ui/input/TextField';
import SelectEscolaridade from '../components/ui/select/selectEscolaridadecopy';

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
          <Typography variant="h3" sx={{ fontWeight: 500, marginBottom: 5, color: 'secondary'}}>
            Tópicos frequentes
          </Typography>
          <SelectEscolaridade />
          <SelectEscolaridade />
          <SelectEscolaridade />
          <SelectEscolaridade />
          <SelectEscolaridade />
        </Grid>
        <Grid item lg={8} sx={{marginTop:  5, bgColor: '#000'}}>
          {/* <Typography variant='h4' sx={{fontWeight: 500, color: 'secondary'}}>Ainda tem dúvida? <br/> Entre em contato com a gente?</Typography> */}
          <Grid item sx={{marginTop: 5, display: 'flex', justifyContent: 'space-around'}}>
            <Grid item sx={{bgcolor: '#FFF', width: 200, height: 200}}>Email</Grid>
            <Grid item sx={{bgcolor: '#FFF'}}>Telefone</Grid>
            <Grid item sx={{bgcolor: '#FFF'}}>Formulário</Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
