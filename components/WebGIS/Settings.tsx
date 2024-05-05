import * as React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

interface Props {
  showSettings: boolean;
  setShowSettings: (val: boolean) => void;
  showSimplifiedData: boolean;
  setShowSimplifiedData: (simplified: boolean) => void;
  showLimitVisibility: boolean;
  setShowLimitVisibility: (val: boolean) => void;
}

export default function Settings({
  showSettings,
  setShowSettings,
  showSimplifiedData,
  setShowSimplifiedData,
  showLimitVisibility,
  setShowLimitVisibility,
}: Props) {
  const createChangeHandler = //Funcao de fabrica para manipular varios switchs sem ter q repetir lógica(isso é provisorio tendo em vista que configuracoes virara um menu lateral)
    (setter: (value: boolean) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.checked);
    };
  return (
    <Modal
      open={showSettings}
      onClose={() => setShowSettings(false)}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginRight: '70px',
        marginTop: '18px',
      }}
      slotProps={{
        backdrop: {
          sx: {
            bgcolor: 'rgba(0, 0, 0, 0)',
          },
        },
      }}
    >
      <Grid
        sx={{
          backgroundColor: '#509CBF',
          borderRadius: '10px',
          left: 'auto!important',
          right: 'calc(85px + 1rem)',
          color: 'white',
          minWidth: '200px!important',
          minHeight: '180px',
          boxShadow:
            '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
          '@media (max-width: 1500px)': {
            right: 'calc(55px + 1rem)',
          },
        }}
      >
        <h4
          style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: '500',
            marginTop: '15px',
            color: 'white',
          }}
        >
          Configurações
        </h4>
        <Grid
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
        </Grid>
      </Grid>
    </Modal>
  );
}
