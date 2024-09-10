import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import { Switch, FormControlLabel, FormGroup } from '@mui/material';
import { Grid } from '@mui/material';
import detectDevice from './../../helpers/detectDevice'; 

interface Props {
  anchorEl: null | HTMLElement;
  setAnchorEl: (val: null | HTMLElement) => void;
  showSimplifiedData: boolean;
  setShowSimplifiedData: (simplified: boolean) => void;
  showLimitVisibility: boolean;
  setShowLimitVisibility: (val: boolean) => void;
}

export default function SettingsModal({
  anchorEl,
  setAnchorEl,
  showSimplifiedData,
  setShowSimplifiedData,
  showLimitVisibility,
  setShowLimitVisibility,
}: Props) {
  const open = Boolean(anchorEl);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log('Detectando dispositivo...');
    const mobile = detectDevice();
    console.log('Device detected:', mobile); 
    setIsMobile(mobile);
    if(mobile)
      setShowSimplifiedData(true);
  }, []);

  const createChangeHandler =
    (setter: (value: boolean) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.checked);
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
          minHeight: '180px',
          borderRadius: '10px',
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
      <Grid
        sx={{
          backgroundColor: '#509CBF',
          color: 'white',
          padding: '10px',
          minWidth: '240px!important',
          minHeight: '180px',
          boxShadow:
            '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
        }}
      >
        <h4
          style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: '500',
            color: 'white',
          }}
        >
          Configurações
        </h4>
        <FormGroup
          sx={{
            height: 'min-content',
            marginLeft: '20px',
            width: '200px',
            marginTop: '10px',
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={showSimplifiedData}
                onChange={createChangeHandler(setShowSimplifiedData)}
              />
            }
            label={showSimplifiedData ? 'Com Simplificação' : 'Sem Simplificação'}
          />
          <FormControlLabel
            control={
              <Switch
                checked={showLimitVisibility}
                onChange={createChangeHandler(setShowLimitVisibility)}
              />
            }
            label={showLimitVisibility ? 'Sem Limites' : 'Com Limites'}
          />
        </FormGroup>
      </Grid>
    </Menu>
  );
}
