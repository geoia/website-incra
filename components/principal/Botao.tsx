import Menu from '@mui/icons-material/Menu';
import Calendar from '@mui/icons-material/CalendarMonth';
import Fire from '@mui/icons-material/LocalFireDepartment';
import Button, { ButtonProps } from '@mui/material/Button';
import { useState } from 'react';

function BaseBotao({ children, sx, ...props }: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        width: 40,
        minWidth: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#509CBF',
        border: 0,
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: 'rgb(37, 37, 240)',
          transition: '0.2s',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function MenuBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Menu fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function CalendarBotao(props: ButtonProps) {
  return (
    <BaseBotao {...props}>
      <Calendar fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}

export function FireBotao(props: ButtonProps) {
  const [fireButton, setFireButton] = useState(false);

  return (
    <BaseBotao
      {...props}
      sx={{ background: fireButton ? 'red' : '#509CBF' }}
      onClick={() => setFireButton(!fireButton)}
    >
      <Fire fontSize="medium" sx={{ color: 'white' }} />
    </BaseBotao>
  );
}
