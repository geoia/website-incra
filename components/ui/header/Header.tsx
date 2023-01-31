import React from 'react';
import { Grid, Avatar } from '@mui/material';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderInstitucional() {
  return (
    <Grid
      item
      sx={{
        backgroundColor: 'white',
        height: 50,
        display: 'flex',
        padding: '0 2em',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Grid item display={'flex'} alignItems={'center'}>
        <Avatar alt="Remy Sharp" src="/logo.svg" />
        <Typography variant="h5" color={'secondary'} sx={{ marginLeft: 2, fontWeight: 600 }}>
          GeoIA
        </Typography>
      </Grid>
      <Grid item display={'flex'} alignItems={'center'}>
        <nav>
          <ul>
            <li>
              <NextLink href="/home" passHref>
                <a>Home</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/sobre" passHref>
                <a>Sobre</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/webgis" passHref>
                <a>WebGis</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/ajuda" passHref>
                <a>Ajuda</a>
              </NextLink>
            </li>
          </ul>
        </nav>
        <NextLink href="/login" passHref>
          <AccountCircleIcon
            sx={{
              color: '#0F1C3C',
              fontSize: 30,
              marginLeft: 8,
              cursor: 'pointer',
            }}
          />
        </NextLink>
      </Grid>
    </Grid>
  );
}
