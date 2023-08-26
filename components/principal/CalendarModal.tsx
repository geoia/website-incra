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
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleMonthChange = (event: SelectChangeEvent) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);

    if (onSelect) { 
      onSelect(newSelectedOption);
    }
  };

  return (
      <Grid
        onClick={() => setIsSelectOpen(!isSelectOpen)}
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
          color: 'white',
          '@media (max-width: 1500px)': {
            left: 'calc(40% + 3rem)',
            fontSize: '1rem',
          },
        }}
      >
        <h1
          style={{
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
            open={isSelectOpen}
            onClose={() => setIsSelectOpen(false)}
            onOpen={() => setIsSelectOpen(true)}
            value={selectedOption}
            onChange={handleMonthChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#509CBF',
                  height: '300px',
                  width: '220px',
                  transform: 'translateX(-14%)!important',
                  '@media (max-width:1500px)': {
                    height: '225px',
                  },
                  '&::-webkit-scrollbar': {
                    width: '0.4em',
                  },
                  '&::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.1)',
                    outline: '1px solid slategrey',
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
                  color: 'white',
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
