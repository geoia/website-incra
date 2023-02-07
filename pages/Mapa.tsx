import React from 'react';
import dynamic from 'next/dynamic';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: (val: boolean) => void;
  isZoomInClicked: boolean;
  setIsZoomInClicked: (val: boolean) => void;
  isZoomOutClicked: boolean;
  setIsZoomOutClicked: (val: boolean) => void;
  isLocationClicked: boolean;
  setIsLocationClicked: (val: boolean) => void;
  isFireButtonClicked: boolean;
}

function Mapa({
  isFullScreen,
  setIsFullScreen,
  isZoomInClicked,
  setIsZoomInClicked,
  isZoomOutClicked,
  setIsZoomOutClicked,
  isLocationClicked,
  setIsLocationClicked,
  isFireButtonClicked
}: Props) {
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
  return (
    <Map
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      isZoomInClicked={isZoomInClicked}
      setIsZoomInClicked={setIsZoomInClicked}
      isZoomOutClicked={isZoomOutClicked}
      setIsZoomOutClicked={setIsZoomOutClicked}
      isLocationClicked={isLocationClicked}
      setIsLocationClicked={setIsLocationClicked}
      isFireButtonClicked={isFireButtonClicked}
    />
  );
}

export default Mapa;
