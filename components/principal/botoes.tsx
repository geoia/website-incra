import React, { useState } from 'react';
import styles from '../../styles/Principal.module.css';

import Menu from '@mui/icons-material/Menu';
import Calendar from '@mui/icons-material/CalendarMonth';
import Download from '@mui/icons-material/Download';
import Upload from '@mui/icons-material/FileUpload';
import Fire from '@mui/icons-material/LocalFireDepartment';
import Forest from '@mui/icons-material/Forest';
import Road from '@mui/icons-material/AddRoad';
import Water from '@mui/icons-material/Water';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Crop from '@mui/icons-material/CropFree';
import Map from '@mui/icons-material/FmdGood';

interface Props {
  button: string;
}

export default function Botao(props: Props) {
  const [fireButton, setFireButton] = useState(false);
  const [forestButton, setForestButton] = useState(false);
  const [roadButton, setRoadButton] = useState(false);
  const [waterButton, setWaterButton] = useState(false);

  const buttons = () => {
    if (props.button == 'Menu') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('menu')}>
          <Menu fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Calendar') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('calendar')}>
          <Calendar fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Download') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('download')}>
          <Download fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Upload') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('upload')}>
          <Upload fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Fire') {
      return (
        <button
          className={styles.botao}
          type="button"
          style={{
            backgroundColor: fireButton ? 'red' : 'blue',
          }}
          onClick={() => setFireButton(!fireButton)}
        >
          <Fire fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Forest') {
      return (
        <button
          className={styles.botao}
          type="button"
          style={{
            backgroundColor: forestButton ? 'darkgreen' : 'blue',
          }}
          onClick={() => setForestButton(!forestButton)}
        >
          <Forest fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Road') {
      return (
        <button
          className={styles.botao}
          type="button"
          style={{
            backgroundColor: roadButton ? 'rgb(107, 38, 38)' : 'blue',
          }}
          onClick={() => setRoadButton(!roadButton)}
        >
          <Road sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Water') {
      return (
        <button
          className={styles.botao}
          type="button"
          style={{
            backgroundColor: waterButton ? 'rgb(4, 4, 65)' : 'blue',
          }}
          onClick={() => setWaterButton(!waterButton)}
        >
          <Water fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Add') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('ZoomIn')}>
          <Add fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Remove') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('ZoomOut')}>
          <Remove fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Crop') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('sla')}>
          <Crop fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    } else if (props.button == 'Map') {
      return (
        <button className={styles.botao} type="button" onClick={() => console.log('localizar')}>
          <Map fontSize="medium" sx={{ color: 'white' }} />
        </button>
      );
    }
  };

  return <>{buttons()}</>;
}
