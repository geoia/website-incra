import SelectEscolaridade from '../components/ui/select/selectEscolaridade';
import { Grid } from '@mui/material/';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

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
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Nome"
              sx={{ background: '#fff', borderRadius: 3, marginBottom: 2 }}
            />
            <SelectEscolaridade />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Email"
              type={'email'}
              sx={{ background: '#fff', borderRadius: 3, marginBottom: 2 }}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Crie uma senha"
              type={'senha'}
              sx={{ background: '#fff', borderRadius: 3, marginBottom: 2 }}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Repita a senha"
              type={'senha'}
              sx={{ background: '#fff', borderRadius: 3, marginBottom: 2 }}
            />
            <p>Localização</p>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Estado"
              type={'senha'}
              sx={{ background: '#fff', borderRadius: 3, marginBottom: 2 }}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Cidade"
              type={'senha'}
              sx={{ background: '#fff', borderRadius: 3, marginBottom: 1 }}
            />
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
