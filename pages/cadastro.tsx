import SelectEscolaridade from '../components/ui/select/selectEscolaridade';
import { Grid } from '@mui/material/';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import TextField from '../components/ui/input/TextField';

export default function Cadastro() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Grid
          lg={3}
          md={3}
          sm={4.5}
          xs={5.6}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid>
            <Avatar
              alt="logo Geomatica WebGis"
              src="/logo.svg"
              sx={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Typography variant="h2" component="h1" sx={{ lineHeight: 1.1 }}>
            WebGis
            <br />
            GeoIA
          </Typography>
        </Grid>
        <Grid
          lg={8}
          md={11}
          sm={11}
          xs={11}
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
              control={<Checkbox defaultChecked size="small" />}
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
              <Link href="/login" underline="hover" color="secondary" sx={{ mr: 2 }}>
                Já tenho conta
              </Link>
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
