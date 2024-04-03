import Menu from '@mui/icons-material/Menu';
import Download from '@mui/icons-material/Download';
import Fire from '@mui/icons-material/LocalFireDepartment';
import Forest from '@mui/icons-material/Forest';
import Road from '@mui/icons-material/AddRoad';
import Water from '@mui/icons-material/Water';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Crop from '@mui/icons-material/CropFree';
import Map from '@mui/icons-material/FmdGood';
import SettingsIcon from '@mui/icons-material/Settings';
import Button, { ButtonProps } from '@mui/material/Button';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import VisibilityOn from '@mui/icons-material/Visibility';
// import GpsNotFixed from '@mui/icons-material/GpsNotFixed';
// import GpsOff from '@mui/icons-material/GpsOff';
import MapOutlined from '@mui/icons-material/MapOutlined';
import MapIcon from '@mui/icons-material/Map';

function BaseButton({ children, sx, ...props }: ButtonProps) {
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

export function MenuButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <Menu fontSize="medium" />
    </BaseButton>
  );
}

export function DownloadButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <Download fontSize="medium" />
    </BaseButton>
  );
}

export function SettingsButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <SettingsIcon fontSize="medium" />
    </BaseButton>
  );
}

export function LimitVisibilityButton({ active, sx, ...props }: ButtonProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'gray' : '#509CBF',
        '&:hover': {
          transform: 'translateY(-2px)',
          background: active ? 'gray' : '#509CBF',
        },
        ...sx,
      }}
    >
      {active ? <MapOutlined fontSize="medium" /> : <MapIcon fontSize="medium" />}
    </BaseButton>
  );
}

export function FireButton({ active, sx, ...props }: ButtonProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'red' : '#509CBF',
        '&:hover': {
          transform: 'translateY(-2px)',
          background: active ? 'red' : '#509CBF',
        },
        ...sx,
      }}
    >
      <Fire fontSize="medium" />
    </BaseButton>
  );
}

export function ForestButton({ active, sx, ...props }: ButtonProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'green' : '#509CBF',
        '&:hover': {
          background: '#0c850ceb',
        },
        ...sx,
      }}
    >
      <Forest fontSize="medium" />
    </BaseButton>
  );
}

export function RoadButton({ active, sx, ...props }: ButtonProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? '#964b00' : '#509CBF',
        '&:hover': {
          background: '#97510ced',
        },
        ...sx,
      }}
    >
      <Road fontSize="medium" />
    </BaseButton>
  );
}

export function WaterButton({ active, sx, ...props }: ButtonProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'blue' : '#509CBF',
        '&:hover': {
          background: '#1414f7dd',
        },
        ...sx,
      }}
    >
      <Water fontSize="medium" />
    </BaseButton>
  );
}

export function AddButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <Add fontSize="medium" />
    </BaseButton>
  );
}

export function RemoveButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <Remove fontSize="medium" />
    </BaseButton>
  );
}

export function CropButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <Crop fontSize="medium" />
    </BaseButton>
  );
}

export function MapButton(props: ButtonProps) {
  return (
    <BaseButton {...props}>
      <Map fontSize="medium" />
    </BaseButton>
  );
}
