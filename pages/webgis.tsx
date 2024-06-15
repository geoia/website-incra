import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import DownloadModal from '../components/WebGIS/DownloadModal';
import Settings from '../components/WebGIS/Settings';
import { Grid } from '@mui/material';
import {
  DownloadButton,
  FireButton,
  ForestButton,
  RoadButton,
  WaterButton,
  AddButton,
  MinusButton,
  MapButton,
  SettingsButton,
  SatelliteButton,
  HomeButton,
} from '../components/WebGIS/Buttons';
import dynamic from 'next/dynamic';
import { SearchMenu } from '../components/WebGIS/SearchMenu';
import L from 'leaflet';
import useLimitesMunicipios from '../hooks/useLimitesMunicipios';

export default function Principal() {
  const router = useRouter();

  const [anchorElementOfDownloadButton, setAnchorElementOfDownloadButton] =
    useState<null | HTMLElement>(null);
  const [anchorElementOfSettingsButton, setAnchorElementOfSettingsButton] =
    useState<null | HTMLElement>(null);

  const [city, setCity] = useState(5003207);
  const [source, setSource] = useState<string | undefined>('202304');
  const [showFire, setShowFire] = useState(true);
  const [showLimitVisibility, setShowLimitVisibility] = useState(false);
  const [showSatellite, setSatelliteView] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [simplified, setSimplified] = useState(false);

  const mapRef = useRef<L.Map>(null);
  const { data: limitesMunicipais } = useLimitesMunicipios(city);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      if (mapRef.current && limitesMunicipais) {
        mapRef.current.flyToBounds(L.geoJSON(limitesMunicipais).getBounds());
      }
    }
  }, [limitesMunicipais]);

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

  const handleHomeButtonClick = () => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      if (mapRef.current && limitesMunicipais) {
        mapRef.current.flyToBounds(L.geoJSON(limitesMunicipais).getBounds());
      }
    }
  };

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
        forwardRef={mapRef}
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
          mt: '15px',
          position: 'absolute',
          top: 'calc(3rem + 20px)',
          left: '1rem',
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
          width: '50px',
          height: '50px',
          bottom: '0',
          left: '45%',
          transform: 'translateX(-50%)',
          margin: '1rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '0.7rem',
          justifyContent: 'space-between',
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '45px',
            mt: '5rem',
          },
          '@media (max-width: 600px)': {
            left: '30%',
            gap: '0.5rem',
          },
          '@media (max-width: 400px)': {
            gap: '0.1rem',
          },
        }}
      >
        <SettingsButton
          tip="Configurações"
          tip_placement="top"
          onClick={handleSettingsButtonClick}
        />
        <DownloadButton tip="Download" tip_placement="top" onClick={handleDownloadButtonClick} />
        <SatelliteButton
          tip="Ativar visão de satélite"
          disable_tip="Desativar visão de satélite"
          tip_placement="top"
          active={showSatellite}
          onClick={() => setSatelliteView(!showSatellite)}
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
          tip={showFire ? 'Desabilitar queimadas' : 'Habilitar queimadas'}
          tip_placement="left"
          active={showFire}
          onClick={() => setShowFire(!showFire)}
        />

        <ForestButton tip="Em breve" tip_placement="left" active={false} />

        <RoadButton tip="Em breve" tip_placement="left" active={false} />

        <WaterButton tip="Em breve" tip_placement="left" active={false} />
      </Grid>

      <DownloadModal
        anchorEl={anchorElementOfDownloadButton}
        setAnchorEl={setAnchorElementOfDownloadButton}
        isFireButtonClicked={showFire}
        setIsFireButtonClicked={setShowFire}
        isSimplifiedDatas={simplified}
        forwardRef={mapRef}
        municipio={city}
        source={source}
      />
      <Settings
        anchorEl={anchorElementOfSettingsButton}
        setAnchorEl={setAnchorElementOfSettingsButton}
        showSimplifiedData={simplified}
        setShowSimplifiedData={setSimplified}
        showLimitVisibility={showLimitVisibility}
        setShowLimitVisibility={setShowLimitVisibility}
      />
    </>
  );
}
