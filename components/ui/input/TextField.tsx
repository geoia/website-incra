import TextField, { TextFieldProps } from '@mui/material/TextField';

export default function CustomTextField({ sx, ...props }: TextFieldProps) {
  return (
    <TextField
      variant="standard"
      size="small"
      InputProps={{ disableUnderline: true }}
      fullWidth
      sx={{ padding: '8px 15px 4px 15px', background: '#fff', borderRadius: 3, ...sx }}
      {...props}
    />
  );
}
