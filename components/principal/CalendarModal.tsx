import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface Props {
  isCalendarModalOpen: boolean;
  setIsCalendarModalOpen: (val: boolean) => void;
}

export default function CalendarModal({ isCalendarModalOpen, setIsCalendarModalOpen }: Props) {
  const currentDate = new Date();
  const startMonth = new Date(2022, 10); // Novembro de 2022 (mês 10)

  const months: string[] = [];
  let date: Date = startMonth;
  while (date <= currentDate) {
    const month = date.toLocaleString('default', { month: 'short' }).replace('.', '');
    const year = date.getFullYear();
    months.push(`${month}/${year}`);
    date.setMonth(date.getMonth() + 1);
  }

  const [selectedMonth, setSelectedMonth] = useState<string>(months[months.length - 1]);

  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedMonth(event.target.value as string);
  };

  return (
    <Modal
      open={isCalendarModalOpen}
      onClose={() => setIsCalendarModalOpen(false)}
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
          height: '400px',
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
            fontSize: '2rem',
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
              height: '80px',
              fontSize: '2rem',
              fontWeight: '400',
              textAlign: 'center',
              padding: 0,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#0F1C3C', // Cor da borda normal
              },
              '&:hover fieldset': {
                borderColor: '#0F1C3C', // Cor da borda ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0F1C3C', // Cor da borda quando focado
              },
            },
          }}
        >
          <Select value={selectedMonth} onChange={handleMonthChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#509CBF',
                  height: '200px', 
                  '& .MuiMenuItem-root': {
                    padding: 2,
                  },
                },
              },
            }}
          >
            {months.map((month, index) => (
              <MenuItem key={index} value={month}
              sx={{
                fontSize: '1.2rem',
                color: '#0F1C3C',
                '&:hover': {
                  backgroundColor: '#4689a8',
                },
              }}>
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
          onClick={() => setIsCalendarModalOpen(false)}
        >
          Ok
        </Button>
      </Grid>
    </Modal>
  );
}
