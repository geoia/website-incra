import { Drawer, Grid } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import ItemList from '../ui/itemList/ItemList';

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (val: boolean) => void;
}

export default function MenuModal({ isDrawerOpen, setIsDrawerOpen }: Props) {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#509CBF',
          height: '100%',
          width: '220px',
          color: 'white',
        },
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '200px',
          marginLeft: '10px',
        }}
      >
        <h3 style={{ fontWeight: '100', fontSize: '1.2rem' }}>Nome Do User</h3>
        <AccountCircleOutlinedIcon fontSize="large" />
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '200px',
          marginLeft: '10px',
          height: '25px',
          fontSize: '0.8rem',
        }}
      >
        <MailOutlineSharpIcon fontSize="medium" sx={{ marginRight: '10px' }} />
        <p
          style={{
            textDecoration: 'underline',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          email do user muito extenso
        </p>
      </Grid>
      <ItemList texts={['Menu', 'Informações Pessoais', 'Dados', 'Idioma', 'Sobre', 'Ajuda']} />
      <a
        href="#"
        style={{
          textDecoration: 'none',
          fontSize: '1rem',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '70px',
          marginLeft: '10px',
          position: 'absolute',
          top: '90%',
        }}
      >
        <LogoutIcon />
        <p>Sair</p>
      </a>
    </Drawer>
  );
}
