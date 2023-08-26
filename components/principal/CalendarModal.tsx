import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { FormControl, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  options: string[];
  defaultOption?: string;
  onSelect?: (val: string) => void;
}

export default function CalendarModal({ options, defaultOption, onSelect }: Props) {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption || options[0]);

  const handleMonthChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);

    if(onSelect) { 
      onSelect(selectedOption);
    }
  };

  return (
      <Grid
        sx={{
          position: 'absolute',
          top: '0',
          left: 'calc(40% + 4rem)',
          display: 'flex',
          alignItems: 'center',
          height: '50px',
          width: '225px',
          margin: '1rem',
          backgroundColor: '#509CBF',
          borderRadius: '15px',
          fontSize: '1.5rem',
          '@media (max-width: 1500px)': {
            left: 'calc(40% + 3rem)',
            fontSize: '1rem',
          },
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '1.3rem',
            fontWeight: '400',
            marginLeft: '10px'
,          }}
        >Fonte:</h1>
        <FormControl
          variant="outlined"
          sx={{
            width: '145px',
            '& .MuiInputBase-root': {
              height: '50px',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: '400',
              textAlign: 'left',
              padding: 0,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                border: 'none',
              },
            },
          }}
        >
          <Select
            value={selectedOption}
            onChange={handleMonthChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#509CBF',
                  height: '300px',
                  '@media (max-width:1500px)': {
                    height: '200px',
                  },
                },
              },
            }}
          >
            {options.map((month, index) => (
              <MenuItem
                key={index}
                value={month}
                sx={{
                  color: '#0F1C3C',
                  fontSize: '1.5rem',
                  '@media (max-width:1500px)': {
                    fontSize: '1.2rem',
                  },
                  '&:hover': {
                    backgroundColor: '#4689a8',
                  },
                }}
              >
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
  );
}
