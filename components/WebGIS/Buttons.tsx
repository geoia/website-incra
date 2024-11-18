import Menu from '@mui/icons-material/Menu';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Map from '@mui/icons-material/FmdGood';
import Button, { ButtonProps } from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import Home from '@mui/icons-material/Home';
import Download from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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

function SmallBaseButton({ children, sx, tip, tip_placement, ...props }: ButtonCustomProps) {
  return (
    <Tooltip title={tip} arrow={true} placement={tip_placement}>
      <Button
        variant="contained"
        sx={{
          width: '35px',
          minWidth: '0px',
          height: '35px',
          borderRadius: 20,
          backgroundColor: 'white',
          border: 0,
          color: '#509CBF',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#e0e0e0',
          },
          '&:disabled': {
            backgroundColor: 'rgba(18, 18, 133, 0.39);',
          },
          '@media (max-width: 1500px)': {
            width: '35px',
            minWidth: '35px',
            height: '35px',
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

export function InfoButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <InfoOutlinedIcon fontSize="medium" />
    </BaseButton>
  );
}

export function AddButton(props: ButtonCustomProps) {
  return (
    <SmallBaseButton {...props}>
      <Add fontSize="small" />
    </SmallBaseButton>
  );
}

export function MinusButton(props: ButtonCustomProps) {
  return (
    <SmallBaseButton {...props}>
      <Remove fontSize="small" />
    </SmallBaseButton>
  );
}

export function HomeButton(props: ButtonCustomProps) {
  return (
    <SmallBaseButton {...props}>
      <Home fontSize="small" />
    </SmallBaseButton>
  );
}

export function MenuButton(props: ButtonCustomProps) {
  return (
    <BaseButton {...props}>
      <Menu fontSize="medium" />
    </BaseButton>
  );
}

export function MapButton(props: ButtonCustomProps) {
  return (
    <SmallBaseButton {...props}>
      <Map fontSize="small" />
    </SmallBaseButton>
  );
}
