import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { FormGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Download from '@mui/icons-material/Download';
import FormCheckbox from '../ui/FormCheckbox';
import { queimadas } from '../../hooks/useQueimadas';
import { exportarPNG } from '../../helpers/exportMap';

interface Props {
  anchorEl: null | HTMLElement;
  setAnchorEl: (val: null | HTMLElement) => void;
  isFireButtonClicked: boolean;
  setIsFireButtonClicked: (val: boolean) => void;
  isSimplifiedDatas: boolean;
  forwardRef?: React.RefObject<L.Map>;
  municipio: number;
  source?: string;
}

export default function DownloadModal({
  anchorEl,
  setAnchorEl,
  isFireButtonClicked,
  setIsFireButtonClicked,
  isSimplifiedDatas,
  forwardRef,
  municipio,
  source,
}: Props) {
  const [checked, setChecked] = useState([false, false, false, false]);

  const open = Boolean(anchorEl);

  const handleChangeInParentCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFireButtonClicked(event.target.checked);
    setChecked([event.target.checked]);
  };

  const handleChangeInFireCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFireButtonClicked(event.target.checked);
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

  async function downloadDatas() {
    let anchor = createDownloadAnchor();

    let data = isFireButtonClicked
      ? await queimadas({ municipio: municipio, source: source, simplified: isSimplifiedDatas })
      : {};

    let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

    anchor.href = dataStr;

    document.body.appendChild(anchor);

    anchor.click();
    anchor.remove();
  }

  const createDownloadAnchor = () => {
    let anchor = document.createElement('a');
    anchor.download = '.json';

    return anchor;
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      sx={{
        mt: '-10px',
        '& .MuiPaper-root': {
          backgroundColor: '#509CBF',
          color: 'white',
          minWidth: '240px!important',
          minHeight: '245px',
        },
        '& .MuiList-root': {
          paddingTop: 0,
          paddingBottom: 0,
        },
        '& .MuiTypography-root': {
          fontSize: '1em',
        },
      }}
    >
      <FormGroup
        sx={{
          height: 'min-content',
          marginLeft: '20px',
          width: '200px',
          marginTop: '10px',
        }}
      >
        <FormCheckbox
          label="Tudo"
          checked={isFireButtonClicked}
          onChange={handleChangeInParentCheckbox}
          indeterminate={!isFireButtonClicked}
          disabled={false}
        />
        <FormCheckbox
          label="Queimadas"
          checked={isFireButtonClicked}
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
        onClick={() => exportarPNG(forwardRef)}
        variant="contained"
        startIcon={<Download />}
        sx={{
          backgroundColor: '#fff',
          border: 0,
          borderRadius: '10px',
          color: '#509cbf',
          marginTop: '10px',
          height: '40px',
          width: '90px',
          marginLeft: '20px',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ffffffc3',
            transition: '0.2s',
          },
        }}
      >
        PNG
      </Button>
      <Button
        onClick={() => downloadDatas()}
        variant="contained"
        startIcon={<Download />}
        sx={{
          backgroundColor: '#fff',
          border: 0,
          borderRadius: '10px',
          color: '#509cbf',
          marginTop: '10px',
          height: '40px',
          width: '90px',
          marginLeft: '20px',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ffffffc3',
            transition: '0.2s',
          },
        }}
      >
        JSON
      </Button>
    </Menu>
  );
}
