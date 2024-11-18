import Menu from '@mui/material/Menu';
import { FormGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Download from '@mui/icons-material/Download';
import { exportarPNG } from '../../helpers/exportMap';

interface Props {
  anchorEl: null | HTMLElement;
  setAnchorEl: (val: null | HTMLElement) => void;
  forwardRef?: React.RefObject<L.Map>;
}

export default function DownloadModal({ anchorEl, setAnchorEl, forwardRef }: Props) {
  const open = Boolean(anchorEl);

  async function downloadDatas() {
    let anchor = createDownloadAnchor();

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
        mt: '50px',
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
      ></FormGroup>
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
