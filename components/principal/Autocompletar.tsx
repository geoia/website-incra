import React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/system';

const largura = '30vw';

const Label = styled('label')({
  display: 'block',
  width: '100%',
});

const Input = styled('input')(({ theme }) => ({
  width: largura,
  height: '4.5vh',
  backgroundColor: '#509CBF',
  borderWidth: 0,
  marginLeft: '10px',
  borderColor: '#509CBF',
  color: 'white',
  '::-webkit-input-placeholder': {
    color: 'white',
  },
  ':focus': { boxShadow: '0 0 0 0', border: '0 none', outline: 0 },
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: largura,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: '#000',
  overflow: 'auto',
  maxHeight: 100,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#dddddd',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#aaaaaa',
    color: 'white',
  },
  '::-webkit-scrollbar': { width: '10px' },
  '::-webkit-scrollbar-track': { boxShadow: 'inset 0 0 2px grey' },
  '::-webkit-scrollbar-thumb': { background: 'gray' },
}));

export default function Escolha() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: cidades,
    getOptionLabel: (option) => option.nome,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}></Label>
        <Input {...getInputProps()} placeholder="Pesquise um endereço" />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof cidades).map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.nome}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

const cidades = [
  { nome: 'Anastácio' },
  { nome: 'Bodoquena' },
  { nome: 'Coxim' },
  { nome: 'Dourados' },
  { nome: 'Eldorado' },
  { nome: 'Figueirão' },
  { nome: 'Naviraí' },
];
