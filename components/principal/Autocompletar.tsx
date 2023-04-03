import React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/system';
import Search from '@mui/icons-material/Search';
import { createFilterOptions } from '@mui/material';

const Input = styled('input')(({ theme }) => ({
  width: '100%',
  height: '38px',
  backgroundColor: '#509CBF',
  marginLeft: '20px',
  border: '0px',
  borderColor: '#509CBF',
  borderRadius: '20px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'normal',
  '::-webkit-input-placeholder': {
    color: 'white',
  },
  ':focus': { boxShadow: '0 0 0 0', border: '0 none', outline: 0 },
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '99.4%',
  zIndex: '-1',
  position: 'absolute',
  top: '15px',
  margin: 0,
  padding: 0,
  paddingTop: '25px',
  listStyle: 'none',
  backgroundColor: 'rgba(80,156,191, 1)',
  color: '#fff',
  fontWeight: 'normal',
  overflow: 'hidden',
  maxHeight: 100,
  borderRadius: '10px',
  '& li.Mui-focused': {
    backgroundColor: 'rgba(34, 115, 153, 0.4)',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: 'rgba(34, 115, 153, 7)',
  },
}));

const filtro = createFilterOptions({
  matchFrom: 'start',
});

function Enviar(valor: any) {
  console.log(valor);
}

export default function Pesquisa(this: any) {
  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      options: cidades,
      getOptionLabel: (option) => option.nome,
      filterOptions: filtro,
      selectOnFocus: true,
      onInputChange: async (event: object, value: string, reason: string) => {
        cidades.map((option, index) => (value == option.nome ? Enviar(option.id) : null));
      },
    });

  return (
    <div style={{ width: '100%', margin: '-1rem' }}>
      <div {...getRootProps()}>
        <Search
          fontSize="large"
          sx={{
            width: '25px',
            color: 'white',
            position: 'absolute',
            right: '-20px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
        <Input {...getInputProps()} placeholder="Pesquise um endereço" />
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {(groupedOptions as typeof cidades).map((option, index) => (
              <li
                style={{
                  borderBottom: '1px solid white',
                }}
                {...getOptionProps({ option, index })}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {option.nome}
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </div>
  );
}

const cidades = [
  { nome: 'Anastácio', id: 5000708 },
  { nome: 'Aquidauana', id: 5001102 },
  { nome: 'Bodoquena', id: 5002159 },
  { nome: 'Coxim', id: 5003306 },
  { nome: 'Dourados', id: 5003702 },
  { nome: 'Eldorado', id: 5003751 },
  { nome: 'Figueirão', id: 5003900 },
  { nome: 'Naviraí', id: 5005707 },
  { nome: 'São Gabriel do Oeste', id: 5007695 },
  { nome: 'Rio Verde', id: 5007406 },
  { nome: 'Alcinópolis', id: 5000252 },
  { nome: 'Bandeirantes', id: 5001508 },
  { nome: 'Jaraguari', id: 5004908 },
  { nome: 'Sidrolândia', id: 5007901 },
  { nome: 'Maracaju', id: 5005400 },
  { nome: 'Dois Irmãos do Buriti', id: 5003488 },
  { nome: 'Aparecida do Taboado', id: 5001003 },
  { nome: 'Chapadão do Sul', id: 5002951 },
  { nome: 'Bonito', id: 5002209 },
  { nome: 'Camapuã', id: 5002605 },
  { nome: 'Campo Grande', id: 5002704 },
  { nome: 'Corumbá', id: 5003207 },
];

function alterarMunicipio(id: any) {
  console.log(id);
}
