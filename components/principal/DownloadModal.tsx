import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Download from '@mui/icons-material/Download';
import FormCheckbox from '../ui/FormCheckbox/FormCheckbox';

interface Props {
  anchorEl: null | HTMLElement;
  setAnchorEl: (val: null | HTMLElement) => void;
}

export default function DownloadModal({ anchorEl, setAnchorEl }: Props) {
  const [checked, setChecked] = useState([false, false, false, false]);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeInParentCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChangeInFireCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleChangeInForestCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const handleChangeInInfrastructure = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const handleChangeInWaterCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#509CBF',
          left: 'auto!important',
          right: 'calc(50px + 1rem)',
        },
      }}
    >
      <FormGroup
        sx={{
          height: 'min-content',
          marginLeft: '10px',
        }}
      >
        <FormCheckbox
          label="Selecionar todas"
          checked={checked[0] && checked[1] && checked[2] && checked[3]}
          onChange={handleChangeInParentCheckbox}
          indeterminate={
            checked[0] !== checked[1] || checked[0] !== checked[2] || checked[0] != checked[3]
          }
        />
        <FormCheckbox
          label="Queimadas"
          checked={checked[0]}
          onChange={handleChangeInFireCheckbox}
          indeterminate={undefined}
        />
        <FormCheckbox
          label="Vegetação"
          checked={checked[1]}
          onChange={handleChangeInForestCheckbox}
          indeterminate={undefined}
        />
        <FormCheckbox
          label="Infraestrutura"
          checked={checked[2]}
          onChange={handleChangeInInfrastructure}
          indeterminate={undefined}
        />
        <FormCheckbox
          label="Inundação"
          checked={checked[3]}
          onChange={handleChangeInWaterCheckbox}
          indeterminate={undefined}
        />
      </FormGroup>
      <Button
        variant="contained"
        startIcon={<Download />}
        sx={{
          backgroundColor: '#fff',
          border: 0,
          borderRadius: '10px',
          color: '#509cbf',
          marginTop: '10px',
          height: '40px',
          width: '160px',
          marginLeft: '10px',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ffffffc3',
            transition: '0.2s',
          },
        }}
      >
        Download
      </Button>
    </Menu>
  );
}
