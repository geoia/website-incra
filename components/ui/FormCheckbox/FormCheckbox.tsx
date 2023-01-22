import { Checkbox, FormControlLabel } from '@mui/material';

interface Props {
    label:  string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    indeterminate: undefined | boolean;
}

export default function FormCheckbox({label, checked, onChange, indeterminate}: Props) {
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox checked={checked} onChange={onChange} indeterminate={indeterminate}/>}
      sx={{
        height: '30px',
      }}
    />
  );
}
