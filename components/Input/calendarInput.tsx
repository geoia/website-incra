import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

interface Props {
    defaultValue: number;
  };

export default function calendarInput({defaultValue}: Props) {
  const CustomTextField = styled(TextField)`
    & input[type='number']::-webkit-inner-spin-button,
    & input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;

  return (
    <CustomTextField
      id="outlined-number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={defaultValue}
      sx={{
        width: '100px',
        height: '100px',
        backgroundColor: '#509CBF',
        display: 'flex',
        fontSize: '2rem',
        borderColor: 'white',
        borderStyle: 'solid',
        borderLeft: 'none',
        borderRight: 'none',
        borderWidth: '2px',
        '& fieldset': {
          border: 'none',
        },
        '& .MuiInputBase-input': {
          textAlign: 'center',
          color: 'white',
          fontSize: '2rem',
          height: '100%',
        },
      }}
      InputProps={{
        sx: {
          height: '100%',
        },
        disableUnderline: true,
      }}
    />
  );
}
