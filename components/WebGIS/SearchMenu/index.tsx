import { Grid } from '@mui/material';
import Link from 'next/link';
import Logo from '../../ui/Logo';

export function SearchMenu() {
  return (
    <Grid
      sx={{
        position: 'absolute',
        top: 0,
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 4rem - 70px)',
        maxWidth: '550px',
        height: '50px',
        backgroundColor: '#509CBF',
        borderRadius: '20px',
        '@media (max-width: 950px)': {
          width: 'calc(100% - 8rem - 65px)',
        },
        '@media (max-width: 600px)': {
          width: 'calc(100% - 10rem)',
        },
      }}
    >
      <Link href="/">
        <Logo sx={{ width: 65, height: 64, transform: 'translateX(-2px)' }} />
      </Link>
    </Grid>
  );
}
