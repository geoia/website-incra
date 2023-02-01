import React from 'react';
import dynamic from 'next/dynamic';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: (val: boolean) => void;
}

function Mapa({ isFullScreen, setIsFullScreen }: Props) {
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import('../components/Map/Map'), // replace '@components/map' with your component's location
        {
          loading: () => <p>O mapa está carregando</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  );
  return <Map isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />;
}

export default Mapa;
