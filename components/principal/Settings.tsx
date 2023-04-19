import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Checkbox } from '@mui/material';

interface Props {
  isSettingsVisible: boolean;
  setIsSettingsVisible: (val: boolean) => void;
  setIsSimplifiedDatas: (val: boolean) => void;
  areMunicipalBoundariesVisible: boolean;
  setAreMunicipalBoundariesVisible: (val: boolean) => void;
}

export default function Settings({
  isSettingsVisible,
  setIsSettingsVisible,
  setIsSimplifiedDatas,
  areMunicipalBoundariesVisible,
  setAreMunicipalBoundariesVisible,
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

  const handleChangeInCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAreMunicipalBoundariesVisible(event.target.checked);
  };

  return (
    <Modal
      open={isSettingsVisible}
      onClose={() => setIsSettingsVisible(false)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '450px',
          width: '550px',
          backgroundColor: '#509CBF',
          borderRadius: '15px',
          color: 'white',
          '@media (max-width: 1500px)': {
            height: '350px',
            width: '450px',
          },
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Configurações</h1>
        <Grid
          sx={{
            marginLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <FormControl>
            <p style={{ fontSize: '1.2rem' }}>Exibir dados de qual forma?</p>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              sx={{
                color: 'white',
                '& .MuiSvgIcon-root': {
                  color: 'white!important',
                },
              }}
            >
              <FormControlLabel
                value="Sem Simplificação"
                control={<Radio />}
                label="Sem Simplificação"
              />
              <FormControlLabel
                value="Com Simplificação"
                control={<Radio />}
                label="Com Simplificação"
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            label="Exibir limites municipais"
            control={
              <Checkbox checked={areMunicipalBoundariesVisible} onChange={handleChangeInCheckbox} />
            }
            sx={{
              height: '35px',
              position: 'absolute',
              top: 'calc(50% + 170px)',
              '& .MuiTypography-root': {
                fontSize: '1.2rem',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
              '@media (max-width: 1500px)': {
                top: 'calc(50% + 125px)',
              },
            }}
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
