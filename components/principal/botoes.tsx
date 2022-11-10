import React from 'react';
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
  icon: string;
}

export default function Botao(props: Props) {
  const icon = () => {
    if (props.icon == 'Menu') {
      return <Menu />;
    } else if (props.icon == 'Calendar') {
      return <Calendar />;
    } else if (props.icon == 'Download') {
      return <Download />;
    } else if (props.icon == 'Upload') {
      return <Upload />;
    } else if (props.icon == 'Fire') {
      return <Fire />;
    } else if (props.icon == 'Forest') {
      return <Forest />;
    } else if (props.icon == 'Road') {
      return <Road />;
    } else if (props.icon == 'Water') {
      return <Water />;
    } else if (props.icon == 'Add') {
      return <Add />;
    } else if (props.icon == 'Remove') {
      return <Remove />;
    } else if (props.icon == 'Crop') {
      return <Crop />;
    } else if (props.icon == 'Map') {
      return <Map />;
    }
  };

  return (
    <button className={styles.botao} type="button">
      {icon()}
    </button>
  );
}
