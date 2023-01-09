import TextField, { TextFieldProps } from '@mui/material/TextField';

export default function CustomTextField({ sx, ...props }: TextFieldProps) {
  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      sx={{ background: '#fff', borderRadius: 3, ...sx }}
      {...props}
    />
  );
}
