import Menu from '@mui/icons-material/Menu';
import Calendar from '@mui/icons-material/CalendarMonth';
import Download from '@mui/icons-material/Download';
import Fire from '@mui/icons-material/LocalFireDepartment';
import Forest from '@mui/icons-material/Forest';
import Road from '@mui/icons-material/AddRoad';
import Water from '@mui/icons-material/Water';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Crop from '@mui/icons-material/CropFree';
import Map from '@mui/icons-material/FmdGood';
import Button, { ButtonProps } from '@mui/material/Button';
import { useState } from 'react';

interface Props {
  isFireButtonClicked: boolean;
  setIsFireButtonClicked: (val: boolean) => void;
}

function BaseBotao({ children, sx, ...props }: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        width: '50px',
        minWidth: '50px',
        height: '50px',
        borderRadius: 20,
        backgroundColor: '#509CBF',
        border: 0,
        color: 'white',
        '&:hover': {
          transform: 'translateY(-2px)',
          cursor: 'pointer',
          backgroundColor: '#509CBF',
        },
        '&:disabled': {
          backgroundColor: 'rgba(18, 18, 133, 0.39);',
        },
        '@media (max-width: 1500px)': {
          width: '45px',
          minWidth: '45px',
          height: '45px',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function MenuBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Menu fontSize="medium" />
    </BaseBotao>
  );
}

export function CalendarBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Calendar fontSize="medium" />
    </BaseBotao>
  );
}

export function DownloadBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Download fontSize="medium" />
    </BaseBotao>
  );
}

export function FireBotao({ isFireButtonClicked, setIsFireButtonClicked }: Props) {
  return (
    <BaseBotao
      sx={{
        background: isFireButtonClicked ? 'red' : '#509CBF',
        '&:hover': {
          transform: 'translateY(-2px)',
          background: isFireButtonClicked ? 'red' : '#509CBF'
        },
      }}
      onClick={() => setIsFireButtonClicked(!isFireButtonClicked)}
    >
      <Fire fontSize="medium" />
    </BaseBotao>
  );
}

export function ForestBotao(props: ButtonProps) {
  const [forestButton, setForestButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{
        background: forestButton ? 'green' : '#509CBF',
        '&:hover': {
          background: '#0c850ceb',
        },
      }}
      onClick={() => setForestButton(!forestButton)}
      disabled
    >
      <Forest fontSize="medium" />
    </BaseBotao>
  );
}

export function RoadBotao(props: ButtonProps) {
  const [roadButton, setRoadButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{
        background: roadButton ? '#964b00' : '#509CBF',
        '&:hover': {
          background: '#97510ced',
        },
      }}
      onClick={() => setRoadButton(!roadButton)}
      disabled
    >
      <Road fontSize="medium" />
    </BaseBotao>
  );
}

export function WaterBotao(props: ButtonProps) {
  const [waterButton, setWaterButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{
        background: waterButton ? 'blue' : '#509CBF',
        '&:hover': {
          background: '#1414f7dd',
        },
      }}
      onClick={() => setWaterButton(!waterButton)}
      disabled
    >
      <Water fontSize="medium" />
    </BaseBotao>
  );
}

export function AddBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Add fontSize="medium" />
    </BaseBotao>
  );
}

export function RemoveBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Remove fontSize="medium" />
    </BaseBotao>
  );
}

export function CropBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Crop fontSize="medium" />
    </BaseBotao>
  );
}

export function MapBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Map fontSize="medium" />
    </BaseBotao>
  );
}
