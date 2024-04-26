import Head from 'next/head';

import React, { useState } from 'react';

import DownloadModal from '../components/WebGIS/DownloadModal';
import MenuModal from '../components/WebGIS/MenuModal';
import Settings from '../components/WebGIS/Settings';
import { Grid } from '@mui/material';
import {
  DownloadButton,
  FireButton,
  ForestButton,
  RoadButton,
  WaterButton,
  AddButton,
  RemoveButton,
  CropButton,
  MapButton,
  SettingsButton,
  LimitVisibilityButton,
  SatelliteButton,
} from '../components/WebGIS/Buttons';
import dynamic from 'next/dynamic';
import { SearchMenu } from '../components/WebGIS/SearchMenu';

export default function Principal() {
  const [anchorElementOfDownloadButton, setAnchorElementOfDownloadButton] =
    useState<null | HTMLElement>(null);

  const [city, setCity] = useState(5003207);
  const [source, setSource] = useState<string | undefined>();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFire, setShowFire] = useState(true);
  const [showLimitVisibility, setLimitVisibility] = useState(false);
  const [showSatellite, setSatelliteView] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [simplified, setSimplified] = useState(false);

  const ref = React.createRef<L.Map>();

  const Mapa = React.useMemo(
    () =>
      dynamic(
        () => import('../components/WebGIS/Map'), // replace '@components/map' with your component's location
        {
          loading: () => <p>O mapa está carregando</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  return (
    <>
      <Head>
        <title>GeoIA - WebGis</title>
      </Head>

      <Mapa
        showLocalizacao={showLocation}
        showLimitVisibility={showLimitVisibility}
        showSatellite={showSatellite}
        showQueimadas={showFire}
        simplificado={simplified}
        municipio={city}
        source={source}
        forwardRef={ref}
      />

      <SearchMenu city={city} onCityChange={setCity} onSourceChange={setSource} />

      <Grid
        sx={{
          position: 'absolute',
          width: '50px',
          height: '115px',
          top: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '102.5px',
          },
          '@media (max-width: 600px)': {
            top: 'calc(3rem + 40px)',
            marginTop: 0,
          },
        }}
      >
        <SettingsButton onClick={() => setShowSettings(!showSettings)} />

        <DownloadButton
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

          '@media (max-width: 1500px)': {
            width: '45px',
            height: '265px',
          },

          '@media (max-width: 600px)': {
            transform: 'none',
            marginTop: 0,
          },
        }}
      >
        <SatelliteButton
          active={showSatellite}
          onClick={() => setSatelliteView(!showSatellite)}
        />
        
        <LimitVisibilityButton
          active={showLimitVisibility}
          onClick={() => setLimitVisibility(!showLimitVisibility)}
        />

        <FireButton active={showFire} onClick={() => setShowFire(!showFire)} />

        <ForestButton active={false} disabled />

        <RoadButton active={false} disabled />

        <WaterButton active={false} disabled />
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
          '@media (max-width: 1500px)': {
            height: '45px',
            width: '215px',
          },
        }}
      >
        <AddButton onClick={() => ref.current?.zoomIn()} />

        <RemoveButton onClick={() => ref.current?.zoomOut()} />

        <CropButton
          onClick={() => {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
          }}
        />

        <MapButton onClick={() => setShowLocation(!showLocation)} />
      </Grid>
      <DownloadModal
        anchorEl={anchorElementOfDownloadButton}
        setAnchorEl={setAnchorElementOfDownloadButton}
        isFireButtonClicked={showFire}
        setIsFireButtonClicked={setShowFire}
        isSimplifiedDatas={simplified}
      />
      <MenuModal
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setIsSettingsVisible={setShowSettings}
      />

      <Settings
        isSettingsVisible={showSettings}
        setIsSettingsVisible={setShowSettings}
        setIsSimplifiedDatas={setSimplified}
      />
    </>
  );
}
