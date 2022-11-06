import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { WidthFull } from '@mui/icons-material';

export default function Login() {
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Email"
            sx={{ background: '#fff', maxWidth: 900, borderRadius: 3 }}
          />
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Senha"
            sx={{ background: '#fff', maxWidth: 900, margin: 1.5, borderRadius: 3 }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'right',
              width: 900,
              // background: '#000'
            }}
          >
            <Link href="#" underline="hover" color="secondary">
              Cadastrar-se
            </Link>
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
