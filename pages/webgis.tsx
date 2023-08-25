import Head from 'next/head';

import React, { HTMLAttributes, useEffect, useState } from 'react';

import DownloadModal from '../components/principal/DownloadModal';
import MenuModal from '../components/principal/MenuModal';
import CalendarModal from '../components/principal/CalendarModal';
import Settings from '../components/principal/Settings';
import { Avatar, Grid } from '@mui/material';
import Pesquisa from '../components/principal/Autocompletar';
import {
  DownloadBotao,
  FireBotao,
  ForestBotao,
  RoadBotao,
  WaterBotao,
  AddBotao,
  RemoveBotao,
  CropBotao,
  MapBotao,
  SettingsBotao,
} from '../components/principal/Botao';
import dynamic from 'next/dynamic';
import { MapEvents } from '../components/Map/Controlador';
import Link from 'next/link';
import Logo from '../components/Logo';
import useSources from '../hooks/useSources';

export default function Principal() {
  const [anchorElementOfDownloadButton, setAnchorElementOfDownloadButton] =
    useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isFireButtonClicked, setIsFireButtonClicked] = useState(true);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const [isSimplifiedDatas, setIsSimplifiedDatas] = useState(false);
  const [cityId, setCityId] = useState(5003207);

  const ref = React.createRef<MapEvents>();

  const [selectedSource, setSelectedSource] = useState<string | undefined>();
  const { data: sources, isLoading: isSourcesLoading } = useSources();

  const Mapa = React.useMemo(
    () =>
      dynamic(
        () => import('../components/Map'), // replace '@components/map' with your component's location
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
        showLocalizacao={isLocationClicked}
        showQueimadas={isFireButtonClicked}
        simplificado={isSimplifiedDatas}
        municipio={cityId}
        source={selectedSource}
        forwardRef={ref}
      />

      <SearchMenu cityId={cityId} setCityId={setCityId} />

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
        <SettingsBotao
          isSettingsVisible={isSettingsVisible}
          setIsSettingsVisible={setIsSettingsVisible}
        />
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
          '@media (max-width: 1500px)': {
            width: '45px',
            height: '215px',
          },
          '@media (max-width: 600px)': {
            transform: 'none',
            marginTop: 0,
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
          '@media (max-width: 1500px)': {
            height: '45px',
            width: '215px',
          },
        }}
      >
        <AddBotao onClick={() => ref.current?.zoomIn()} />
        <RemoveBotao onClick={() => ref.current?.zoomOut()} />
        <CropBotao
          onClick={() => {
            var elem = document.documentElement;
            if (elem.requestFullscreen) elem.requestFullscreen();
          }}
        />
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
      {!isSourcesLoading && (
        <CalendarModal
          options={sources?.map((s) => s.label) || []}
          open={isCalendarModalOpen}
          onSelect={(value) => {
            setSelectedSource(sources?.find((s) => s.label === value)?.source);
            setIsCalendarModalOpen(false);
          }}
          onClose={() => setIsCalendarModalOpen(false)}
        />
      )}
      <Settings
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        setIsSimplifiedDatas={setIsSimplifiedDatas}
      />
    </>
  );
}

function SearchMenu(props: { cityId: number; setCityId: (v: number) => void }) {
  return (
    <Grid
      sx={{
        position: 'absolute',
        top: 0,
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        height: '50px',
        backgroundColor: '#509CBF',

        borderRadius: '20px',
        '@media (max-width: 950px)': {
          width: '50%',
        },
        '@media (max-width: 600px)': {
          width: 'calc(100% - 2rem)',
        },
      }}
    >
      <Link href="/">
        <Logo sx={{ width: 64, height: 64 }} />
      </Link>
      <Pesquisa cityId={props.cityId} onChange={(id) => id && props.setCityId(id)} />
    </Grid>
  );
}
