import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { FormControl, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  open: boolean;
  options: string[];
  defaultOption?: string;
  onClose?: (val: string) => void;
  onSelect?: (val: string) => void;
}

export default function CalendarModal({ open, onClose, options, defaultOption, onSelect }: Props) {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption || options[0]);

  return (
    <Modal
      open={open}
      onClose={() => onClose && onClose(selectedOption)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '300px',
          width: '500px',
          backgroundColor: '#509CBF',
          borderRadius: '20px 0 20px 0',
          fontSize: '1.5rem',
          '@media (max-width: 1500px)': {
            height: '350px',
            width: '500px',
            fontSize: '1rem',
          },
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            marginTop: '20px',
          }}
        >
          Selecione a data
        </h1>
        <FormControl
          variant="outlined"
          sx={{
            width: '275px',
            '& .MuiInputBase-root': {
              height: '60px',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: '400',
              textAlign: 'center',
              padding: 0,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        >
          <Select
            value={selectedOption}
            onChange={(v) => setSelectedOption(v.target.value)}
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
        <Button
          variant="contained"
          sx={{
            fontSize: '1rem',
            fontWeight: '500',
            backgroundColor: '#fff',
            border: 0,
            marginBottom: '20px',
            marginRight: '20px',
            borderRadius: '10px',
            color: '#0F1C3C',
            height: '40px',
            width: '150px',
            marginLeft: '20px',
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: '#ffffffc3',
              transition: '0.2s',
            },
          }}
          onClick={() => onSelect && onSelect(selectedOption)}
        >
          Ok
        </Button>
      </Grid>
    </Modal>
  );
}
