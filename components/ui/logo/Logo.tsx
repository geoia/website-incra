import { Grid, Avatar } from '@mui/material';

export default function Logo() {
  return (
    <Grid xl={3} lg={3} md={3} sm={3} xs={3}>
      <Avatar alt="Remy Sharp" src="/logo.svg" sx={{ width: '100%', height: '100%' }} />
    </Grid>
  );
}
