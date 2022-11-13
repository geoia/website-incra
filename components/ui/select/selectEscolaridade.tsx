import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectEscolaridade() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{background: '#fff', marginBottom: 2, borderRadius: 3 }}>
      <FormControl fullWidth size="small">
      <InputLabel >Escolaridade</InputLabel>
        <Select
          placeholder={'Escolaridade'}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Fundamental Incompleto</MenuItem>
          <MenuItem value={20}>Fundamental Completo</MenuItem>
          <MenuItem value={30}>Ensino Médio Incompleto</MenuItem>
          <MenuItem value={40}>Ensino Médio Completo</MenuItem>
          <MenuItem value={50}>Ensino Superior Incompleto</MenuItem>
          <MenuItem value={60}>Ensino Superior Completo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}