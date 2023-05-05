import Head from 'next/head';
import Mapa from './Mapa';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import DownloadModal from '../components/principal/DownloadModal';
import MenuModal from '../components/principal/MenuModal';
import CalendarModal from '../components/principal/CalendarModal';
import Settings from '../components/principal/Settings';
import { Grid } from '@mui/material';
import Pesquisa from '../components/principal/Autocompletar';
import {
  CalendarBotao,
  MenuBotao,
  DownloadBotao,
  FireBotao,
  ForestBotao,
  RoadBotao,
  WaterBotao,
  AddBotao,
  RemoveBotao,
  CropBotao,
  MapBotao,
} from '../components/principal/Botao';

export default function Principal() {
  const [anchorElementOfDownloadButton, setAnchorElementOfDownloadButton] =
    useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isFireButtonClicked, setIsFireButtonClicked] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isZoomInClicked, setIsZoomInClicked] = useState(false);
  const [isZoomOutClicked, setIsZoomOutClicked] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const [isSimplifiedDatas, setIsSimplifiedDatas] = useState(false);
  const [areMunicipalBoundariesVisible, setAreMunicipalBoundariesVisible] = useState(true);
  const [cityId, setCityId] = useState(5003207);
  const [isAutocomplete, setIsAutocomplete] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>GeoIA - Principal</title>
        <style>
          {`
            body {            
                width: 100vw;
                height: 100vh;
                position: relative;
            }
            #__next{
                width: 100%;
                height: 100%;
            }
          `}
        </style>
      </Head>

      <Mapa
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        isZoomInClicked={isZoomInClicked}
        setIsZoomInClicked={setIsZoomInClicked}
        isZoomOutClicked={isZoomOutClicked}
        setIsZoomOutClicked={setIsZoomOutClicked}
        isLocationClicked={isLocationClicked}
        isFireButtonClicked={isFireButtonClicked}
        isSimplifiedDatas={isSimplifiedDatas}
        areMunicipalBoundariesVisible={areMunicipalBoundariesVisible}
        cityId={cityId}
        isAutocomplete={isAutocomplete}
        setIsDataLoading={setIsDataLoading}
      />

      <Grid
        sx={{
          position: 'absolute',
          top: 0,
          margin: '1rem',
          display: 'flex',
          alignItems: 'center',
          width: '40%',
          height: '40px',
          background: '#509CBF',
          borderRadius: '20px',
          zIndex: isFullScreen ? '-1' : '1',
        }}
      >
        <img src="/logo.svg" title="Logo" height="60px" />
        <Pesquisa setCityId={setCityId} isDataLoading={isDataLoading} />
      </Grid>

      <Grid
        sx={{
          position: 'absolute',
          width: '50px',
          height: '180px',
          top: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: isFullScreen ? '-1' : '1',
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '160px',
          },
        }}
      >
        <MenuBotao onClick={() => setIsDrawerOpen(true)} />
        <CalendarBotao onClick={() => setIsCalendarModalOpen(true)} />
        <DownloadBotao
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setAnchorElementOfDownloadButton(event.currentTarget)
          }
        />
      </Grid>
      <Grid
        sx={{
          position: 'absolute',
          width: '50px',
          height: '240px',
          top: '50%',
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',
          zIndex: isFullScreen ? '-1' : '1',
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '215px',
          },
        }}
      >
        <FireBotao
          isFireButtonClicked={isFireButtonClicked}
          setIsFireButtonClicked={setIsFireButtonClicked}
        />
        <ForestBotao />
        <RoadBotao />
        <WaterBotao />
      </Grid>
      <Grid
        sx={{
          position: 'absolute',
          width: '240px',
          height: '50px',
          bottom: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: isFullScreen ? '-1' : '1',
          '@media (max-width: 1500px)': {
            height: '45px',
            width: '215px',
          },
        }}
      >
        <AddBotao onClick={() => setIsZoomInClicked(true)} />
        <RemoveBotao onClick={() => setIsZoomOutClicked(true)} />
        <CropBotao onClick={() => setIsFullScreen(true)} />
        <MapBotao onClick={() => setIsLocationClicked(!isLocationClicked)} />
      </Grid>
      <DownloadModal
        anchorEl={anchorElementOfDownloadButton}
        setAnchorEl={setAnchorElementOfDownloadButton}
        isFireButtonClicked={isFireButtonClicked}
        setIsFireButtonClicked={setIsFireButtonClicked}
        isSimplifiedDatas={isSimplifiedDatas}
      />
      <MenuModal
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setIsSettingsVisible={setIsSettingsVisible}
      />
      <CalendarModal
        isCalendarModalOpen={isCalendarModalOpen}
        setIsCalendarModalOpen={setIsCalendarModalOpen}
      />
      <Settings
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        setIsSimplifiedDatas={setIsSimplifiedDatas}
        areMunicipalBoundariesVisible={areMunicipalBoundariesVisible}
        setAreMunicipalBoundariesVisible={setAreMunicipalBoundariesVisible}
      />
    </>
  );
}
