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
import MapOutlined from '@mui/icons-material/MapOutlined';
import MapIcon from '@mui/icons-material/Map';
import { Tooltip } from '@mui/material';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

interface ButtonCustomProps extends ButtonProps {
  tip: string;
  disable_tip?: string;
  tip_placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}

function BaseButton({ children, sx, tip, tip_placement, ...props }: ButtonCustomProps) {
  return (
    <Tooltip title={tip} arrow={true} placement={tip_placement}>
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
    </Tooltip>
  );
}

export function MenuButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <Menu fontSize="medium" />
    </BaseButton>
  );
}

export function DownloadButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <Download fontSize="medium" />
    </BaseButton>
  );
}

export function SettingsButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <SettingsIcon fontSize="medium" />
    </BaseButton>
  );
}

export function SatelliteButton({
  active,
  sx,
  tip,
  disable_tip,
  ...props
}: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? '#509CBF' : 'gray',
        '&:hover': {
          background: active ? '#509CBF' : 'gray',
        },
        ...sx,
      }}
      tip={active && disable_tip ? disable_tip : tip}
    >
      {active ? (
        <SatelliteAltOutlinedIcon fontSize="medium" />
      ) : (
        <SatelliteAltIcon fontSize="medium" />
      )}
    </BaseButton>
  );
}

export function LimitVisibilityButton({
  active,
  sx,
  ...props
}: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'gray' : '#509CBF',
        '&:hover': {
          background: active ? 'gray' : '#509CBF',
        },
        ...sx,
      }}
    >
      {active ? <MapOutlined fontSize="medium" /> : <MapIcon fontSize="medium" />}
    </BaseButton>
  );
}

export function FireButton({ active, sx, ...props }: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'red' : '#509CBF',
        '&:hover': {
          background: active ? 'red' : '#509CBF',
        },
        ...sx,
      }}
    >
      <Fire fontSize="medium" />
    </BaseButton>
  );
}

export function ForestButton({ active, sx, ...props }: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'gray' : 'gray',
        '&:hover': {
          background: active ? 'gray' : 'gray',
        },
        ...sx,
      }}
    >
      <Forest fontSize="medium" />
    </BaseButton>
  );
}

export function RoadButton({ active, sx, ...props }: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'gray' : 'gray',
        '&:hover': {
          background: active ? 'gray' : 'gray',
        },
        ...sx,
      }}
    >
      <Road fontSize="medium" />
    </BaseButton>
  );
}

export function WaterButton({ active, sx, ...props }: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton
      {...props}
      sx={{
        background: active ? 'gray' : 'gray',
        '&:hover': {
          background: active ? 'gray' : 'gray',
        },
        ...sx,
      }}
    >
      <Water fontSize="medium" />
    </BaseButton>
  );
}

export function AddButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <Add fontSize="medium" />
    </BaseButton>
  );
}

export function RemoveButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <Remove fontSize="medium" />
    </BaseButton>
  );
}

export function CropButton({
  active,
  tip,
  disable_tip,
  ...props
}: ButtonCustomProps & { active: boolean }) {
  return (
    <BaseButton {...props} tip={active && disable_tip ? disable_tip : tip}>
      <Crop fontSize="medium" />
    </BaseButton>
  );
}

export function MapButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <Map fontSize="medium" />
    </BaseButton>
  );
}
