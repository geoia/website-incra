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
      return <Menu fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Calendar') {
      return <Calendar fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Download') {
      return <Download fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Upload') {
      return <Upload fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Fire') {
      return <Fire fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Forest') {
      return <Forest fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Road') {
      return <Road sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Water') {
      return <Water fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Add') {
      return <Add fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Remove') {
      return <Remove fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Crop') {
      return <Crop fontSize="medium" sx={{ color: 'white' }}/>;
    } else if (props.icon == 'Map') {
      return <Map fontSize="medium" sx={{ color: 'white' }}/>;
    }
  };

  return (
    <button className={styles.botao} type="button">
      {icon()}
    </button>
  );
}
