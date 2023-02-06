import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeaderInstitucional from '../components/ui/header/Header';
import homeLogoUfms from '../images/home-logo-ufms.png';
import homeFolhas from '../images/home-folhas.png';
import homeTucano from '../images/home-tucano.png';
import { Box, Button, Grid, Typography, Avatar, AvatarProps } from '@mui/material';
import NextLink from 'next/link';
import logoGeoIA from '../public/logo.ico';
import sobreAnimais from '../images/sobre-animais.png';

export default function Home() {
  return (
    <>
      <Grid sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <HeaderInstitucional />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Image src={homeTucano} alt="homeTucano" height={350} width={180} />
        </Box>
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <Image src={homeFolhas} alt="homeTucano" height={220} width={400} />
        </Box>
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            right: 60,
            bottom: 40,
          }}
        >
          <Image src={homeLogoUfms} alt="homeTucano" height={220} width={115} />
        </Box>
        <Grid
          item
          sx={{
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 6,
            marginTop: 10,
          }}
        >
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 600, color: 'white' }}>
              GeoIA
            </Typography>
            <Typography variant="subtitle1" color={'secondary'} fontWeight={500}>
              Universidade Federal de Mato Grosso do Sul
            </Typography>
          </Grid>
          <Typography variant="h4" color={'white'} fontWeight={500}>
            <em>Lorem ipsum dolor sit amet consectetur</em>
          </Typography>
          <Typography variant="h3" color={'secondary'} fontWeight={500}>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
          </Typography>
          <Typography variant="body1" color={'secondary'} maxWidth={600}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aut repellendus expedita
            cupiditate dolores at nam ipsam minima in? Eveniet dolorum at quidem quaerat suscipit
            saepe, sed voluptatibus et earum!
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ flexDirection: 'column', height: '100vh', bgcolor: ' #0F1C3C' }}>
        <Grid
          item
          sx={{
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            gap: 2,
            marginTop: 5,
          }}
        >
          <Typography variant="h2" fontWeight={600} textAlign={'center'} marginTop={5}>
            WebGis
          </Typography>
          <Grid
            item
            sx={{
              marginTop: 4,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 5,
              maxHeight: 400,
            }}
          >
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Imagem src="https://source.unsplash.com/random" />
              <Grid item>
                <Typography variant="subtitle1">QUEIMADAS</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero fugiat et
                  temporibus accusamus necessitatibus minima quae sapiente dolor atque nobis sit,
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 130, height: 130 }} src="https://source.unsplash.com/random" />
              <Grid item>
                <Typography variant="subtitle1">ÁREAS ALAGADAS</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero fugiat et
                  temporibus accusamus necessitatibus minima quae sapiente dolor atque nobis sit,
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 130, height: 130 }} src="https://source.unsplash.com/random" />
              <Grid item>
                <Typography variant="subtitle1">INFRAESTRUTURA</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero fugiat et
                  temporibus accusamus necessitatibus minima quae sapiente dolor atque nobis sit,
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 130, height: 130 }} src="https://source.unsplash.com/random" />
              <Grid item>
                <Typography variant="subtitle1">VEGETAÇÃO</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero fugiat et
                  temporibus accusamus necessitatibus minima quae sapiente dolor atque nobis sit,
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box></Box>
          <Button color={'primary'} sx={{ marginTop: 3, fontSize: 20, bgColor: '#FFF' }}>
            Webgis
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const Imagem = ({ src }: AvatarProps) => {
  return (
    <>
      <Avatar sx={{ width: 130, height: 130 }} src={src} />
    </>
  );
};
