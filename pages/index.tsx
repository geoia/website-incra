import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="subtitle1">subtitle</Typography>
      <Typography>body1</Typography>
      <Button>Button</Button>
    </>
  );
};

export default Home;