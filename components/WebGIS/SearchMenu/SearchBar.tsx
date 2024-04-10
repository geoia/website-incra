import { useMemo, useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import { Popper, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import useMunicipios from '../../../hooks/useMunicipios';
import useEstados from '../../../hooks/useEstados';
import { useRouter } from 'next/router';

const CustomPaper = styled(Paper)({
  backgroundColor: '#509CBF',
  color: '#ffffff',
  borderRadius: '0px 0px 10px 10px',
  marginLeft: '5px',
});

type Localizacao = {
  id: number;
  nome: string;
  sigla: string;
  queimadas: boolean;
};


export default function SearchBar(props: {
  city: number;
  source?: string;
  onChange?: (id?: number) => void;
}) {
  const { dataMunicipios } = useMunicipios(props.source);
  const { dataEstados } = useEstados(props.source);
  const router = useRouter(); 


  const data = useMemo(() => {
    const sortedMunicipios = [...(dataMunicipios || [])].sort((a, b) => a.nome.localeCompare(b.nome));

    // Percorrer os estados e suas cidades correspondentes
    return [...(dataEstados || [])]
      ?.sort((a, b) => a.nome.localeCompare(b.nome))
      ?.reduce(
        (memo, estado) =>
          memo.concat([estado]).concat(sortedMunicipios.filter((municipio) => estado.sigla === municipio.sigla) || []),
        [] as Localizacao[]
      );
  }, [dataMunicipios, dataEstados]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState<number | null>(null);
  const [selectedMunicipio, setSelectedMunicipio] = useState<string | null>(null);

  useEffect(() => {
    if (selectedMunicipio) {
      router.push(`/webgis/${selectedMunicipio}`);
    }
  }, [selectedMunicipio]);

  const handleOnChange = (selectedOption: Localizacao | null) => {
    if (selectedOption && onChange) {
      onChange(selectedOption.id);
      router.push(`/webgis?municipio=${selectedOption.nome}`);
    } else {
      router.push(`/webgis`);
    }
  };

  useEffect(() => {
    const { query } = router;
    const selectedCity = query.municipio;
    const selectedCityId = data?.find((option) => option.nome === selectedCity)?.id;
    if (selectedCityId && selectedCityId !== city) {
      const selectedOption = data.find((option) => option.id === selectedCityId);
      if (selectedOption) {
        handleOnChange(selectedOption);
      }
    }
  }, [router.query]);

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
        options={data.filter((d) => d.queimadas)}
        getOptionDisabled={(option) => !option.queimadas}
        getOptionLabel={(option) => option.nome}
        noOptionsText="Não existem dados para essa localidade"
        value={data.find((option) => city == option.id)}
        onChange={(_, selectedOption) => handleOnChange(selectedOption)}
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
          setSelectedMunicipio(value); 
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
        renderGroup={(params) => <li key={params.key}>{params.children}</li>}
        renderOption={(props, option) => {
          const isHighlighted = option.id === highlightedOption;
          return (
            <li
              {...props}
              onMouseEnter={() => setHighlightedOption(option.id)}
              onMouseLeave={() => setHighlightedOption(null)}
              style={
                option.sigla && dataEstados?.some((estado) => estado.nome === option.nome)
                  ? { backgroundColor: isHighlighted ? '#1f2e4c' : '#0f1c3c' }
                  : {}
              }
            >
              {option.nome}
            </li>
          );
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default SearchBar;
