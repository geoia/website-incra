import { Grid, Box } from '@mui/material/';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import NextLink from 'next/link';

import SelectEscolaridade from '../components/ui/select/selectEscolaridadecopy';
import TextField from '../components/ui/input/TextField';
import Logo from '../components/ui/logo/logo';
import { useState } from 'react';

export default function Cadastro() {
  const [{}, setUsuario] = useState({});

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          height: '100vh',
          maxWidth: '95%',
          margin: '0px auto',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Grid item lg={4.5} md={5} sm={4} sx={{ alignSelf: 'start', marginTop: 15 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Logo />
            <Typography
              variant="h3"
              component="h1"
              sx={{ marginLeft: 2, fontWeight: 500, lineHeight: 1.1 }}
            >
              WebGis
              <br />
              GeoIA
            </Typography>
          </Box>
        </Grid>
        <Grid
          lg={7}
          md={11}
          sm={11}
          xs={11}
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 3,
          }}
        >
          <form action="#" method="post">
            <p>Informações Pessoais</p>
            <TextField placeholder="Nome" sx={{ marginBottom: 2 }} />
            <SelectEscolaridade />
            <TextField placeholder="Email" type="email" sx={{ marginBottom: 2 }} />
            <TextField placeholder="Crie uma senha" type="password" sx={{ marginBottom: 2 }} />
            <TextField placeholder="Repita a senha" type="password" sx={{ marginBottom: 2 }} />
            <p>Localização</p>
            <TextField placeholder="Estado" sx={{ marginBottom: 2 }} />
            <TextField placeholder="Cidade" sx={{ marginBottom: 1 }} />
            <FormControlLabel
              control={
                <Checkbox color="primary" size="small" sx={{ color: 'white' }} />
              }
              label="Eu li e aceito os termos de contrado e permito o uso dos dados"
            />

            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <NextLink href="/login" passHref>
                <Link underline="hover" color="secondary" sx={{ mr: 2 }}>
                  Já tenho conta
                </Link>
              </NextLink>
              <Button type="submit" variant="contained" color="secondary">
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
