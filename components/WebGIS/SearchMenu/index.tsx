import React from 'react';
import SourceList from './SourceList';
import { Grid } from '@mui/material';
import SearchBar from './SearchBar';
import Link from 'next/link';
import Logo from '../../ui/Logo';
import useSources from '../../../hooks/useSources';

export function SearchMenu(props: {
  city: number;
  source?: string;
  onCityChange: (v: number) => void;
  onSourceChange: (v?: string) => void;
}) {
  const { data: sources, isLoading: isSourcesLoading } = useSources();

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
      {!isSourcesLoading && (
        <SourceList
          options={sources?.map((s) => s.label) || []}
          defaultOption={props.source}
          onSelect={(value) =>
            props.onSourceChange(sources?.find((s) => s.label === value)?.source)
          }
          sx={{
            borderLeft: '2px solid white',
            borderRadius: 0,
            margin: 0,
            backgroundColor: 'transparent',
          }}
        />
      )}
    </Grid>
  );
}
