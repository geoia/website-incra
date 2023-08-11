import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CalendarInput from '../Input/calendarInput';

interface Props {
  isCalendarModalOpen: boolean;
  setIsCalendarModalOpen: (val: boolean) => void;
}

interface DivYearProps {
  text: string;
}

export function DivYear({ text }: DivYearProps) {
  return (
    <Grid
      sx={{
        width: '100px',
        height: '100px',
        backgroundColor: '#509CBF',
        display: 'flex',
        fontSize: '2rem',
        borderColor: 'white',
        borderStyle: 'solid',
        borderLeft: 'none',
        borderRight: 'none',
        borderWidth: '2px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      {text}
    </Grid>
  );
}

export default function CalendarModal({ isCalendarModalOpen, setIsCalendarModalOpen }: Props) {
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
          height: '500px',
          width: '500px',
          backgroundColor: '#509CBF',
          borderRadius: '20px 0 20px 0',
          fontSize: '1.5rem',
          '@media (max-width: 1500px)': {
            height: '500px',
            width: '500px',
            fontSize: '1rem',
          },
        }}
      >
        <Grid
          sx={{
            height: '220px',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            Selecione o ano
          </h1>
          <Grid
            sx={{
              width: '450px',
              height: 'calc(220px - 2rem)',
              backgroundColor: '#509CBF',
              display: 'flex',
              justifyContent: 'space-between',
              textAlign: 'center',
              borderRight: 'none',
              marginTop: '20px'
            }}
          >
            <DivYear text="2"/>
            <DivYear text="0"/>
            <CalendarInput defaultValue={2} />
            <CalendarInput defaultValue={3} />
          </Grid>
        </Grid>
        <Grid
          sx={{
            height: '220px',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            Selecione o mês
          </h1>
          <Grid
            sx={{
              width: '250px',
              height: 'calc(220px - 2rem)',
              backgroundColor: '#509CBF',
              display: 'flex',
              justifyContent: 'space-between',
              textAlign: 'center',
              borderRight: 'none',
              marginTop: '20px'
            }}
          >
            <CalendarInput defaultValue={0} />
            <CalendarInput defaultValue={1} />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            fontSize: '1rem',
            fontWeight: '500',
            alignSelf: 'flex-end',
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
