import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

import { TextField } from '../components/ui/Input';
import Logo from '../components/ui/Logo';

export default function Login() {
  return (
    <>
      <Grid container component="main" direction={'column'} alignItems="center">
        <Grid
          xs={10}
          sm={8}
          md={5}
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
            EcoGis
          </Typography>
        </Grid>
        <Grid
          xs={10}
          sm={8}
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
          xs={10}
          sm={8}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            width: '100%',
            //  background: '#000'
          }}
        >
          <NextLink href="/cadastro" passHref>
            <Link underline="hover" color="secondary" sx={{ mr: 2 }}>
              Cadastrar-se
            </Link>
          </NextLink>

          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
