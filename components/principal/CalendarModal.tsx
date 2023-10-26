import React, { useState } from 'react';
import { Grid, SxProps } from '@mui/material';
import { FormControl, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import HistoryIcon from '@mui/icons-material/History';

interface Props {
  options: string[];
  defaultOption?: string;
  onSelect?: (val: string) => void;
  sx?: SxProps;
}

export default function CalendarModal({ options, defaultOption, onSelect, sx }: Props) {
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
      sx={Object.assign(
        {
          display: 'flex',
          alignItems: 'center',
          height: '50px',
          width: '175px',
          backgroundColor: '#509CBF',
          color: 'white',
        },
        sx || {}
      )}
    >
      <HistoryIcon style={{ fontWeight: 'bold', marginLeft: '10px' }} />
      <FormControl
        variant="outlined"
        sx={{
          width: '125px',
          '& .MuiInputBase-root': {
            height: '50px',
            color: 'white',
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
                transform: 'translateX(-15px)!important',
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
