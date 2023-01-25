import { Checkbox, FormControlLabel } from '@mui/material';

interface Props {
    label:  string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    indeterminate: undefined | boolean;
    disabled: boolean;
}

export default function FormCheckbox({label, checked, onChange, indeterminate, disabled}: Props) {
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox checked={checked} onChange={onChange} indeterminate={indeterminate} disabled={disabled}/>}
      sx={{
        height: '35px',
        '& .MuiTypography-root': {
          fontSize: '1.18rem'
        }
      }}
    />
  );
}
