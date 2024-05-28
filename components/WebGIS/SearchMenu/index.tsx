import React, { useEffect, useState } from 'react';
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
  const [selectedDate, setSelectedDate] = useState<string>(props.source || "");

  useEffect(() => {
    if (props.source) {
      setSelectedDate(props.source);
    }
  }, [props.source]);

  const handleDateChange = (date: string) => {
    const selectedSource = sources?.find((s) => s.source === date)?.source;
    props.onSourceChange(selectedSource);
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log("Selected Date Updated in SearchMenu:", selectedDate);
  }, [selectedDate]);

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
          options={sources?.map((s) => ({ label: s.label, value: s.source })) || []}
          defaultOption={props.source}
          onSelect={(value) =>
            props.onSourceChange(sources?.find((s) => s.source === value)?.source)
          }
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
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
