import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import {
  AddButton,
  MinusButton,
  MapButton,
  HomeButton,
  SettingsButton,
  DownloadButton,
  InfoButton,
} from '../components/WebGIS/Buttons';
import dynamic from 'next/dynamic';
import { SearchMenu } from '../components/WebGIS/SearchMenu';
import L from 'leaflet';
import InfoContent from '../components/WebGIS/InfoContent';

const Mapa = dynamic(() => import('../components/WebGIS/Map'), {
  loading: () => <p>O mapa está carregando</p>,
  ssr: false,
});

export default function Principal() {
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleInfoButtonClick = () => {
    setShowInfoPanel(!showInfoPanel);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowInfoPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [anchorElementOfDownloadButton, setAnchorElementOfDownloadButton] =
    useState<null | HTMLElement>(null);
  const [anchorElementOfSettingsButton, setAnchorElementOfSettingsButton] =
    useState<null | HTMLElement>(null);

  const [showLocation, setShowLocation] = useState(false);

  const mapRef = useRef<L.Map & { centralize: () => void }>(null);

  const handleHomeButtonClick = () => {
    mapRef?.current?.centralize();
  };

  const handleDownloadButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElementOfDownloadButton) {
      setAnchorElementOfDownloadButton(null);
    } else {
      setAnchorElementOfDownloadButton(event.currentTarget);
    }
  };

  const handleSettingsButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElementOfSettingsButton) {
      setAnchorElementOfSettingsButton(null);
    } else {
      setAnchorElementOfSettingsButton(event.currentTarget);
    }
  };

  return (
    <>
      <Head>
        <title>EcoGis - WebGis</title>
      </Head>

      <Mapa showLocalizacao={showLocation} forwardRef={mapRef} />

      <SearchMenu />

      <Grid
        sx={{
          mt: '15px',
          position: 'absolute',
          top: 'calc(3rem + 20px)',
          left: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <HomeButton tip="Centralizar" tip_placement="right" onClick={handleHomeButtonClick} />
        <MapButton
          tip="Localização atual"
          tip_placement="right"
          onClick={() => setShowLocation(!showLocation)}
        />
        <AddButton
          tip="Aumentar Zoom"
          tip_placement="right"
          onClick={() => mapRef.current?.zoomIn()}
        />
        <MinusButton
          tip="Diminuir Zoom"
          tip_placement="right"
          onClick={() => mapRef.current?.zoomOut()}
        />
      </Grid>

      <Grid
        sx={{
          position: 'absolute',
          width: '45px',
          height: '45px',
          top: '0.9rem',
          right: '8rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '0.7rem',
          justifyContent: 'space-between',
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '45px',
          },
          '@media (max-width: 600px)': {
            right: '3.5rem',
            gap: '0.5rem',
          },
        }}
      >
        <InfoButton tip="Informações Gerais" tip_placement="top" onClick={handleInfoButtonClick} />
        <SettingsButton
          tip="Configurações"
          tip_placement="top"
          onClick={handleSettingsButtonClick}
        />
        <DownloadButton tip="Download" tip_placement="top" onClick={handleDownloadButtonClick} />
      </Grid>
      {showInfoPanel && (
        <Box
          ref={panelRef}
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '25%',
            height: '100%',
            bgcolor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 10px',
            padding: '1rem',
            overflowY: 'auto',
            borderRadius: '30px 0 0 30px',
            zIndex: 1300,
          }}
        >
          <InfoContent />
        </Box>
      )}
      <Grid
        sx={{
          position: 'absolute',
          width: '50px',
          height: '220px',
          top: '50%',
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',

          '@media (max-width: 1500px)': {
            width: '45px',
            height: '220px',
          },

          '@media (max-width: 600px)': {
            transform: 'none',
            marginTop: 0,
          },
        }}
      ></Grid>
    </>
  );
}
