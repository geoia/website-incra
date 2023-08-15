import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
import { Popper, PopperProps, colors, Paper } from '@mui/material';
import useMunicipios from '../../hooks/useMunicipios';

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-10px',
  padding: '4px 10px',
  color: '#ffffff',
  backgroundColor: '#0f1c3c',
}));

const GroupItems = styled('ul')({
  padding: 0,
  backgroundColor: '#509CBF',
});

const CustomPaper = styled(Paper)({
  backgroundColor: '#0f1c3c',
  borderRadius: '0px 0px 10px 10px',
});

export default function Pesquisa(props: { cityId: number; onChange?: (id?: number) => void }) {
  const { data } = useMunicipios();

  const [inputWidth, setInputWidth] = React.useState('100%');
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  React.useEffect(() => {
    const resize = () => {
      if (inputRef.current) {
        setInputWidth(`${inputRef.current.clientWidth}px`);
      }
    };

    resize(); // Chama a função para definir a largura inicial
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return data ? (
    <>
      <style>
        {`
          .MuiAutocomplete-listbox::-webkit-scrollbar {
            width: 15px;
          }
          .MuiAutocomplete-listbox::-webkit-scrollbar-track {
            background: #0f1c3c;
          }
          .MuiAutocomplete-listbox::-webkit-scrollbar-thumb {
            background-color: #509CBF;
            border-radius: 20px;
            border: 3px solid #0f1c3c;
          }
          .MuiAutocomplete-endAdornment {
            padding-right: 10px;
          }
        `}
      </style>
      <Autocomplete
        id="grouped-demo"
        groupBy={(option) => option.sigla}
        options={data.filter((d) => d.queimadas).sort((a, b) => -b.sigla.localeCompare(a.sigla))}
        getOptionDisabled={(option) => !option.queimadas}
        getOptionLabel={(option) => option.nome}
        noOptionsText="Não existem dados para essa localidade"
        value={data.find((option) => props.cityId == option.id)}
        onChange={() =>
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.blur();
            }
          }, 0)
        }
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            height: '50px',
            borderRadius: isInputFocused ? '25px 25px 0px 0px' : '50px',
            backgroundColor: '#509CBF',
            padding: 0,
            paddingLeft: '1em',
            color: '#ffffff',
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
          '& .MuiAutocomplete-endAdornment': {
            right: '0px !important',
          },
        }}
        PopperComponent={Popper}
        PaperComponent={CustomPaper}
        onInputChange={(_, value) => {
          if (props.onChange) props.onChange(data.find((option) => value == option.nome)?.id);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Escolha uma localidade"
            style={{ color: '#ffffff', margin: 0, padding: 0 }}
            inputRef={(input) => (inputRef.current = input)}
          />
        )}
        renderGroup={(params) => (
          <li style={{ border: '2px', borderColor: '#ffffff', color: '#ffffff' }} key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
      />
    </>
  ) : (
    <></>
  );
}
