import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { WidthFull } from '@mui/icons-material';

export default function Login() {
  return (
    <>
      <Grid container component="main" direction={'column'} alignItems="center">
        <Grid
          lg={8}
          sm={8}
          xs={10}
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <img
            src="/imgLogo.png"
            title="Logo temporário"
            style={{ width: '300px', height: '40%', paddingRight: '20px' }}
          />
          <Typography variant="h1" sx={{ maxWidth: 250 }}>
            WebGis GeoIA
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
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Email"
            sx={{ background: '#fff', borderRadius: 3 }}
          />
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Senha"
            sx={{ background: '#fff', margin: 1.5, borderRadius: 3 }}
          />
        </Grid>
        <Grid
          sm={8}
          xs={10}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'right',
            width: '100%',
            // background: '#000'
          }}
        >
          <Link href="#" underline="hover" color="secondary" sx={{mr: 2}}>
            Cadastrar-se
          </Link>
          <Button variant="contained" color="secondary">
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
