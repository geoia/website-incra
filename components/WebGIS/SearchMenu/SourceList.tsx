import React, { useState, useEffect } from 'react';
import { Grid, SxProps } from '@mui/material';
import { FormControl, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import HistoryIcon from '@mui/icons-material/History';

interface Props {
  options: { label: string; value: string }[];
  defaultOption?: string;
  onSelect?: (val: string) => void;
  selectedDate: string; 
  onDateChange: (date: string) => void; 
  sx?: SxProps;
}

export default function SourceList({ options, defaultOption, onSelect, selectedDate, onDateChange, sx }: Props) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    setIsSelectOpen(false);
  }, [selectedDate]);

  const handleMonthChange = (event: SelectChangeEvent) => {
    const newSelectedOption = event.target.value;
    onDateChange(newSelectedOption);

    if (onSelect) {
      onSelect(newSelectedOption);
    }
  };

  useEffect(() => {
    console.log("Selected Date Updated in SourceList:", selectedDate);
  }, [selectedDate]);

  return (
    <Grid
      onClick={() => setIsSelectOpen(!isSelectOpen)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        width: '175px',
        backgroundColor: '#509CBF',
        color: 'white',
        ...sx,
      }}
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
          onChange={handleMonthChange}
          value={selectedDate}
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
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option.value}
              sx={{
                color: 'white',
                justifyContent: 'flex-end',
                '&:hover': {
                  backgroundColor: '#4689a8',
                },
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
