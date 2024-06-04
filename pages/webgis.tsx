import Head from 'next/head';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  SatelliteButton,
} from '../components/WebGIS/Buttons';
import dynamic from 'next/dynamic';
import { SearchMenu } from '../components/WebGIS/SearchMenu';

export default function Principal() {
  const router = useRouter();

  const [anchorElementOfDownloadButton, setAnchorElementOfDownloadButton] =
    useState<null | HTMLElement>(null);

  const [city, setCity] = useState(5003207);
  const [source, setSource] = useState<string | undefined>('202304');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFire, setShowFire] = useState(true);
  const [showLimitVisibility, setShowLimitVisibility] = useState(false);
  const [showSatellite, setSatelliteView] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showFullScreen, setFullScreen] = useState(false);
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

  useEffect(() => {
    const { municipio, source } = router.query;
    if (municipio) setCity(Number(municipio));
    if (source) setSource(source.toString());
  }, [router.query]);

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

      <SearchMenu
        city={city}
        source={source}
        onCityChange={(id) => {
          router.query.municipio = id.toString();
          router.push(router);
        }}
        onSourceChange={(newSource) => {
          router.query.source = newSource;
          router.push(router);
        }}
      />

      <Grid
        sx={{
          position: 'absolute',
          width: '50px',
          height: '100px',
          top: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '110x',
          },
          '@media (max-width: 600px)': {
            top: 'calc(3rem + 40px)',
            marginTop: 0,
          },
        }}
      >
        <SettingsButton
          tip="Configurações"
          tip_placement="left"
          onClick={() => setShowSettings(!showSettings)}
        />
        <DownloadButton
          tip="Download"
          tip_placement="left"
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setAnchorElementOfDownloadButton(event.currentTarget)
          }
        />
      </Grid>
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
      >
        <FireButton
        tip={showFire ? "Desabilitar queimadas" : "Habilitar queimadas"}
        tip_placement="left"
        active={showFire}
        onClick={() => setShowFire(!showFire)}
      />

        <ForestButton tip="Em breve" tip_placement="left" active={false} />

        <RoadButton tip="Em breve" tip_placement="left" active={false} />

        <WaterButton tip="Em breve" tip_placement="left" active={false} />
      </Grid>
      <Grid
        sx={{
          position: 'absolute',
          width: '340px',
          height: '50px',
          bottom: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          '@media (max-width: 1500px)': {
            height: '45px',
            width: '280px',
          },
        }}
      >
        <SatelliteButton
          tip="Ativar visão de satélite"
          disable_tip="Desativar visão de satélite"
          tip_placement="top"
          active={showSatellite}
          onClick={() => setSatelliteView(!showSatellite)}
        />

        <AddButton tip="Aumentar zoom" onClick={() => ref.current?.zoomIn()} />

        <RemoveButton tip="Diminuir zoom" onClick={() => ref.current?.zoomOut()} />

        <CropButton
          tip="Tela cheia"
          disable_tip="Sair da tela cheia"
          tip_placement="top"
          active={showFullScreen}
          onClick={() => {
            setFullScreen(!showFullScreen);
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
          }}
        />

        <MapButton
          tip="Localização atual"
          tip_placement="top"
          onClick={() => setShowLocation(!showLocation)}
        />
      </Grid>
      <DownloadModal
        anchorEl={anchorElementOfDownloadButton}
        setAnchorEl={setAnchorElementOfDownloadButton}
        isFireButtonClicked={showFire}
        setIsFireButtonClicked={setShowFire}
        isSimplifiedDatas={simplified}
        forwardRef={ref}
      />
      <MenuModal
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setShowSettings={setShowSettings}
      />

      <Settings
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        showSimplifiedData={simplified}
        setShowSimplifiedData={setSimplified}
        showLimitVisibility={showLimitVisibility}
        setShowLimitVisibility={setShowLimitVisibility}
      />
    </>
  );
}
