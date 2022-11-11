import React from 'react'
import dynamic from 'next/dynamic'

function Mapa() {
  const Map = React.useMemo(() => dynamic(
    () => import('../components/Map/Map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>O mapa está carregando</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  ), [/* list variables which should trigger a re-render here */])
  return <Map />
}

export default Mapa