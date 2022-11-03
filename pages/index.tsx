import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
