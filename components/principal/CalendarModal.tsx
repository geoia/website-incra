import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

interface Props {
  isCalendarModalOpen: boolean;
  setIsCalendarModalOpen: (val: boolean) => void;
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
          justifyContent: 'center',
          height: '250px',
          width: '350px',
          backgroundColor: '#509CBF',
          borderRadius: '20px 0 20px 0',
          fontSize: '1.5rem',
          '@media (max-width: 1500px)': {
            height: '150px',
            width: '250px',
            fontSize: '1rem',
          },
        }}
      >
        <h1>Em breve!!!</h1>
      </Grid>
    </Modal>
  );
}
