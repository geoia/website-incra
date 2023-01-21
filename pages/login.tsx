import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';

import TextField from '../components/ui/input/TextField';
import Logo from '../components/ui/logo/logo';

export default function Login() {
  return (
    <>
      <Grid container component="main" direction={'column'} alignItems="center">
        <Grid
          md={5}
          sm={8}
          xs={10}
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Logo />
          <Typography variant="h3" sx={{ fontWeight: 500, marginLeft: 2, lineHeight: 1.1 }}>
            WebGis
            <br />
            GeoIA
          </Typography>
        </Grid>
        <Grid
          sm={8}
          xs={10}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: 8,
          }}
        >
          <TextField placeholder="Email" />
          <TextField placeholder="Senha" sx={{ margin: 1.5 }} />
        </Grid>
        <Grid
          sm={8}
          xs={10}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            width: '100%',
            //  background: '#000'
          }}
        >
          <Link href="/cadastro" underline="hover" color="secondary" sx={{ mr: 2 }}>
            Cadastrar-se
          </Link>
          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
