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
import Button, { ButtonProps } from '@mui/material/Button';
import { useState } from 'react';

function BaseBotao({ children, sx, ...props }: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        width: 40,
        minWidth: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#509CBF',
        border: 0,
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#2384b1',
          transition: '0.2s',
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
      <Menu fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function CalendarBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Calendar fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function DownloadBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Download fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function UploadBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Upload fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function FireBotao(props: ButtonProps) {
  const [fireButton, setFireButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{ background: fireButton ? 'red' : '#509CBF' }}
      onClick={() => setFireButton(!fireButton)}
    >
      <Fire fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function ForestBotao(props: ButtonProps) {
  const [forestButton, setForestButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{ background: forestButton ? 'green' : '#509CBF' }}
      onClick={() => setForestButton(!forestButton)}
    >
      <Forest fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function RoadBotao(props: ButtonProps) {
  const [roadButton, setRoadButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{ background: roadButton ? 'brown' : '#509CBF' }}
      onClick={() => setRoadButton(!roadButton)}
    >
      <Road fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function WaterBotao(props: ButtonProps) {
  const [waterButton, setWaterButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{ background: waterButton ? 'blue' : '#509CBF' }}
      onClick={() => setWaterButton(!waterButton)}
    >
      <Water fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function AddBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Add fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function RemoveBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Remove fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function CropBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Crop fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function MapBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Map fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}
