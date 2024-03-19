import React, { useEffect, useState } from 'react';
import SourceList from './SourceList';
import { Grid } from '@mui/material';
import SearchBar from './SearchBar';
import Link from 'next/link';
import Logo from '../../Logo';
import useSources from '../../../hooks/useSources';

export function SearchMenu(props: {
  city: number;
  onCityChange: (v: number) => void;
  onSourceChange: (v?: string) => void;
}) {
  const { data: sources, isLoading: isSourcesLoading } = useSources();

  const [source, setSource] = useState<string>();

  useEffect(() => props.onSourceChange(source), [source, props]);

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
        <Logo sx={{ width: 64, height: 64 }} />
      </Link>
      <SearchBar
        city={props.city}
        source={source}
        onChange={(id) => id && props.onCityChange(id)}
      />
      {!isSourcesLoading && (
        <SourceList
          options={sources?.map((s) => s.label) || []}
          onSelect={(value) => setSource(sources?.find((s) => s.label === value)?.source)}
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
