import { default as MuiTextField, StandardTextFieldProps } from '@mui/material/TextField';

export function TextField({ sx, InputProps, ...props }: StandardTextFieldProps) {
  return (
    <MuiTextField
      variant="standard"
      size="small"
      InputProps={{ disableUnderline: true }}
      fullWidth
      sx={{ padding: '8px 15px 4px 15px', background: '#fff', borderRadius: 3, ...sx }}
      {...props}
    />
  );
}
