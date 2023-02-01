import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { FormGroup } from '@mui/material';
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
    setChecked([event.target.checked]);
  };

  const handleChangeInFireCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleChangeInForestCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const handleChangeInInfrastructureCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          right: 'calc(65px + 1rem)',
          color: 'white',
          minWidth: '230px!important',
          minHeight: '245px',
          '@media (max-width: 1500px)': {
            right: 'calc(55px + 1rem)',
          },
        },
        '& .MuiList-root': {
          paddingTop: 0,
          paddingBottom: 0,
        },
      }}
    >
      <FormGroup
        sx={{
          height: 'min-content',
          marginLeft: '20px',
          width: '190px',
          marginTop: '10px',
        }}
      >
        <FormCheckbox
          label="Selecionar todas"
          checked={checked[0]}
          onChange={handleChangeInParentCheckbox}
          indeterminate={!checked[0]}
          disabled={false}
        />
        <FormCheckbox
          label="Queimadas"
          checked={checked[0]}
          onChange={handleChangeInFireCheckbox}
          indeterminate={undefined}
          disabled={false}
        />
        <FormCheckbox
          label="Vegetação"
          checked={checked[1]}
          onChange={handleChangeInForestCheckbox}
          indeterminate={undefined}
          disabled={true}
        />
        <FormCheckbox
          label="Infraestrutura"
          checked={checked[2]}
          onChange={handleChangeInInfrastructureCheckbox}
          indeterminate={undefined}
          disabled={true}
        />
        <FormCheckbox
          label="Inundação"
          checked={checked[3]}
          onChange={handleChangeInWaterCheckbox}
          indeterminate={undefined}
          disabled={true}
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
          width: '190px',
          marginLeft: '20px',
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
