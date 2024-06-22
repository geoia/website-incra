import { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import { Popper, Paper } from '@mui/material';
import useMunicipios from '../../../hooks/useMunicipios';
import useEstados from '../../../hooks/useEstados';
import useBiomas from '../../../hooks/useBiomas';

const CustomPaper = styled(Paper)({
  backgroundColor: '#509CBF',
  color: '#ffffff',
  borderRadius: '0px 0px 10px 10px',
  marginLeft: '5px',
});

type Localizacao = {
  id: number | string;
  nome: string;
  type: string;
};

export default function SearchBar(props: {
  location: number | string;
  source?: string;
  onChange?: (id?: number | string) => void;
}) {
  const { data: dataMunicipios } = useMunicipios(props.source);
  const { data: dataEstados } = useEstados(props.source);
  const { data: dataBiomas } = useBiomas(props.source);

  const data = useMemo(() => {
    const biomas: Localizacao[] = (dataBiomas || []).map((bio) => ({
      id: bio.id,
      nome: bio.bioma,
      type: 'Bioma',
    }));

    const estados: Localizacao[] = (dataEstados || [])
      .sort((e1, e2) => e1.nome.localeCompare(e2.nome))
      .map((estado) => ({
        id: estado.id,
        nome: estado.nome,
        type: 'Estado',
      }));

    const municipios: Localizacao[] = (dataMunicipios || [])
      .sort((m1, m2) => m1.nome.localeCompare(m2.nome))
      .map((municipio) => ({
        id: municipio.id,
        nome: `${municipio.nome} (${municipio.sigla})`,
        type: 'Municipio',
      }));

    return [...biomas, ...estados, ...municipios];
  }, [dataMunicipios, dataEstados, dataBiomas]);

  const selectedLocation = useMemo(
    () => data?.find((option) => props.location === option.id) || null,
    [props.location, data]
  );

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
        options={data}
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.nome}
        noOptionsText="Sem resultados"
        value={selectedLocation}
        onChange={(_, selectedOption) => props.onChange?.(selectedOption?.id)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            height: '50px',
            borderRadius: '50px',
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
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Escolha uma localidade"
            style={{ color: '#ffffff', margin: 0, padding: 0 }}
          />
        )}
        renderGroup={(params) => (
          <div key={params.key}>
            <div
              style={{
                backgroundColor: '#e3e3e3',
                color: 'black',
                textAlign: 'center',
                cursor: 'default',
              }}
            >
              {params.group}
            </div>
            <div>{params.children}</div>
          </div>
        )}
        renderOption={(props, option) => {
          return <li {...props}>{option.nome}</li>;
        }}
      />
    </>
  ) : (
    <></>
  );
}
