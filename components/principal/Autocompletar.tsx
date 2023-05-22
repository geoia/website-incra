import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
import { Popper, PopperProps, colors } from '@mui/material';
import useMunicipios from '../../hooks/useMunicipios';

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: '#ffffff',
  backgroundColor: '#0f1c3c',
}));

const GroupItems = styled('ul')({
  padding: 0,
  backgroundColor: '#509CBF',
});

export default function Pesquisa(props: {
  cityId: number;
  onChange?: (newCityId?: number) => void;
}) {
  const { data } = useMunicipios();

  console.log(data?.find((option) => props.cityId == option.id));

  return (
    <Autocomplete
      id="grouped-demo"
      groupBy={(option) => option.sigla}
      options={
        data ? data.filter((d) => d.queimadas).sort((a, b) => -b.sigla.localeCompare(a.sigla)) : []
      }
      getOptionDisabled={(option) => !option.queimadas}
      getOptionLabel={(option) => option.nome}
      noOptionsText="Não existem dados para essa localidade"
      defaultValue={data ? data.find((option) => props.cityId == option.id) : undefined}
      sx={{
        width: '100%',
        borderRadius: '50px, 50px, 50px, 50px',
        '& .MuiAutocomplete': { overflowY: 'hidden', overflowX: 'hidden' },
        '& .MuiAutocomplete-listbox': {
          scrollbarWidth: '100px',
        },
        '& 	.MuiAutocomplete-input': {
          color: '#ffffff',
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '50px',
          backgroundColor: '#509CBF',
          color: '#ffffff',
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
        '& .MuiAutocomplete-inputRoot': {
          borderRadius: '50px',
          padding: '0',
        },
        '&	.MuiAutocomplete-inputFocused': {
          borderColor: '#0f1c3c00',
        },
        '& .MuiInputLabel-outlined': {
          paddingLeft: '20px',
          color: '#ffffff',
        },
        '& .MuiInputLabel-Noshrink': {
          paddingBottom: '20px',
        },
        '& .MuiAutocomplete-endAdornment': {
          right: '0px !important',
        },
        '& .MuiInputLabel-shrink': {
          marginLeft: '10px',
          paddingLeft: '10px',
          paddingRight: 0,
          background: '#509CBF00',
          color: '#000000',
          borderColor: '#0f1c3c00',
          transform: 'translate(0, 0) scale(0.75)',
          transformOrigin: 'top left',
        },
      }}
      PopperComponent={(props) => {
        return <Popper {...props} style={{ width: '30%' }} />;
      }}
      onInputChange={(_, value) => {
        if (props.onChange)
          props.onChange(data ? data.find((option) => value == option.nome)?.id : undefined);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Escolha uma localidade"
          style={{ color: '#ffffff', margin: '0' }}
        />
      )}
      renderGroup={(params) => (
        <li style={{ border: '2px', borderColor: '#ffffff', color: '#ffffff' }}>
          <GroupHeader
            sx={{
              '& .MuiAutocomplete-listbox': {
                scrollbarWidth: '100px',
              },
            }}
          >
            {params.group}
          </GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}
