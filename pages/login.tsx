import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

import TextField from '../components/ui/input/TextField';

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
          <Grid>
            <Avatar alt="Remy Sharp" src="/logo.svg" sx={{ width: '100%', height: '100%' }} />
          </Grid>
          <Typography variant="h2" sx={{ marginLeft: 2 }}>
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
            marginTop: 10,
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
