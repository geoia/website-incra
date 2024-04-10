import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface Props {
  isSettingsVisible: boolean;
  setIsSettingsVisible: (val: boolean) => void;
  setIsSimplifiedDatas: (val: boolean) => void;
}

export default function Settings({
  isSettingsVisible,
  setIsSettingsVisible,
  setIsSimplifiedDatas,
}: Props) {
  const [value, setValue] = useState('Sem Simplificação');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).value == 'Com Simplificação') {
      setIsSimplifiedDatas(true);
    } else {
      setIsSimplifiedDatas(false);
    }
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Modal
      open={isSettingsVisible}
      onClose={() => setIsSettingsVisible(false)}
      sx={{
        display: 'flex',
        alignItems: 'flex-start', 
        justifyContent: 'flex-end',
        marginRight:'70px', 
        marginTop: '18px'
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
            left: 'auto!important',
            right: 'calc(85px + 1rem)',
            color: 'white',
            minWidth: '200px!important',
            minHeight: '180px',
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
            color: 'white'
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
          <FormControl>
            <p style={{ fontSize: '0.8rem', color:'white' }}>Exibir dados de qual forma?</p>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              sx={{
                color: 'white',
                marginTop: '5px',
                '& .MuiSvgIcon-root': {
                  color: 'white!important',
                },
              }}
            >
              <FormControlLabel
                value="Sem Simplificação"
                control={<Radio />}
                label={<span style={{ fontSize: '0.8rem' }}>Sem Simplificação</span>}
              />
              <FormControlLabel
                value="Com Simplificação"
                control={<Radio />}
                label={<span style={{ fontSize: '0.8rem' }}>Com Simplificação</span>}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Modal>
  );
}
