import { Drawer, Grid } from '@mui/material';
import styles from '../../styles/Principal.module.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ItemList from '../ui/itemList/ItemList';

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (val: boolean) => void;
  setIsSettingsVisible: (val: boolean) => void;
}

export default function MenuModal({ isDrawerOpen, setIsDrawerOpen, setIsSettingsVisible }: Props) {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#509CBF',
          height: '100%',
          width: '350px',
          color: 'white',
          '@media (max-width: 1500px)': {
            width: '300px',
          },
        },
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '310px',
          marginLeft: '20px',
          '@media (max-width: 1500px)': {
            width: '260px',
          },
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
          width: '310px',
          marginLeft: '20px',
          height: '40px',
          fontSize: '0.8rem',
          '@media (max-width: 1500px)': {
            width: '260px',
            height: '25px',
          },
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
          email do user muito extensoooooooooooooooooooooooooooooo
        </p>
      </Grid>
      <ItemList texts={['Menu', 'Informações Pessoais', 'Dados', 'Idioma', 'Sobre', 'Ajuda']} />
      <Grid
        onClick={() => {
          setIsDrawerOpen(false);
          setIsSettingsVisible(true);
        }}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '20px',
          width: 'min-content',
          top: 'calc(92% - 40px)',
          '&:hover': {
            cursor: 'pointer',
          },
          '@media (max-width: 1500px)': {
            top: 'calc(90% - 40px)',
          },
        }}
      >
        <SettingsIcon sx={{ color: 'white', marginRight: '15px' }} />
        <p>Configurações</p>
      </Grid>
      <a href="#" className={styles.logoutAnchor}>
        <LogoutIcon />
        <p>Sair</p>
      </a>
    </Drawer>
  );
}
