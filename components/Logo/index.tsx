import { Grid, Avatar, SxProps, Theme } from '@mui/material';
import { HTMLAttributes } from 'react';

export default function Logo() {
  return (
    <Grid xs={3}>
      <Avatar alt="Remy Sharp" src="/logo.svg" sx={{ width: '100%', height: '100%' }} />
    </Grid>
  );
}
