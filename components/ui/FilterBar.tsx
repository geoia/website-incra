import React from 'react';
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

export default function FilterBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#509CBF',
        padding: '16px',
        borderRadius: '25px',
        maxWidth: '100%', // Define o tamanho máximo da barra de filtros
        margin: '20px 16px 0px 16px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>
            FILTROS
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          >
            <InputLabel>SELECIONE O BIOMA</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">SELECIONE O BIOMA</MenuItem>
              {/* Add other options here */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          >
            <InputLabel>SELECIONE A CIDADE</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">SELECIONE A CIDADE</MenuItem>
              {/* Add other options here */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          >
            <InputLabel>SELECIONE O ESTADO</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">SELECIONE O ESTADO</MenuItem>
              {/* Add other options here */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          >
            <InputLabel>SELECIONE O PERÍODO</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">SELECIONE O PERÍODO</MenuItem>
              {/* Add other options here */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
