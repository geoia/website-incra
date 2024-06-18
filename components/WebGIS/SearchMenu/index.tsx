import SourceList from './SourceList';
import { Grid } from '@mui/material';
import SearchBar from './SearchBar';
import Link from 'next/link';
import Logo from '../../ui/Logo';

export function SearchMenu(props: {
  city: number;
  source?: string;
  onCityChange: (v: number) => void;
  onSourceChange: (v?: string) => void;
}) {
  return (
    <Grid
      sx={{
        position: 'absolute',
        top: 0,
        margin: '1rem',
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        height: '50px',
        backgroundColor: '#509CBF',
        borderRadius: '20px',
        '@media (max-width: 950px)': {
          width: '50%',
        },
        '@media (max-width: 600px)': {
          width: 'calc(100% - 2rem)',
        },
      }}
    >
      <Link href="/">
        <Logo sx={{ width: 65, height: 64, transform: 'translateX(-2px)' }} />
      </Link>
      <SearchBar
        city={props.city}
        source={props.source}
        onChange={(id) => id && props.onCityChange(id)}
      />
      <SourceList
        selectedSource={props.source}
        onSelect={props.onSourceChange}
        sx={{
          borderLeft: '2px solid white',
          borderRadius: 0,
          margin: 0,
          backgroundColor: 'transparent',
        }}
      />
    </Grid>
  );
}
