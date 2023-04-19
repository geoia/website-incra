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

function Enviar(valor: any, setCityId: (val: number) => void) {
  setCityId(valor);
}

interface Props {
  setCityId: (val: number) => void;
}

export default function Pesquisa(this: any, { setCityId }: Props) {
  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      options: cidades,
      getOptionLabel: (option) => option.nome,
      filterOptions: filtro,
      selectOnFocus: true,
      onInputChange: async (event: object, value: string, reason: string) => {
        cidades.map((option, index) =>
          value == option.nome ? Enviar(option.id, setCityId) : null
        );
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
  {
    id: 5000203,
    nome: 'Água Clara',
  },
  {
    id: 5000252,
    nome: 'Alcinópolis',
  },
  {
    id: 5000609,
    nome: 'Amambai',
  },
  {
    id: 5000708,
    nome: 'Anastácio',
  },
  {
    id: 5000807,
    nome: 'Anaurilândia',
  },
  {
    id: 5000856,
    nome: 'Angélica',
  },
  {
    id: 5000856,
    nome: 'Ipezal',
  },
  {
    id: 5000906,
    nome: 'Antônio João',
  },
  {
    id: 5000906,
    nome: 'Campestre',
  },
  {
    id: 5001003,
    nome: 'Aparecida do Taboado',
  },
  {
    id: 5001102,
    nome: 'Aquidauana',
  },
  {
    id: 5001102,
    nome: 'Camisão',
  },
  {
    id: 5001102,
    nome: 'Cipolândia',
  },
  {
    id: 5001102,
    nome: 'Piraputanga',
  },
  {
    id: 5001102,
    nome: 'Taunay',
  },
  {
    id: 5001243,
    nome: 'Aral Moreira',
  },
  {
    id: 5001508,
    nome: 'Bandeirantes',
  },
  {
    id: 5001508,
    nome: 'Congonha',
  },
  {
    id: 5001904,
    nome: 'Bataguassu',
  },
  {
    id: 5001904,
    nome: 'Porto XV de Novembro',
  },
  {
    id: 5002001,
    nome: 'Batayporã',
  },
  {
    id: 5002100,
    nome: 'Bela Vista',
  },
  {
    id: 5002100,
    nome: 'Nossa Senhora de Fátima',
  },
  {
    id: 5002159,
    nome: 'Bodoquena',
  },
  {
    id: 5002159,
    nome: 'Morraria do Sul',
  },
  {
    id: 5002209,
    nome: 'Bonito',
  },
  {
    id: 5002209,
    nome: 'Águas de Miranda',
  },
  {
    id: 5002308,
    nome: 'Brasilândia',
  },
  {
    id: 5002308,
    nome: 'Debrasa',
  },
  {
    id: 5002407,
    nome: 'Caarapó',
  },
  {
    id: 5002407,
    nome: 'Cristalina',
  },
  {
    id: 5002407,
    nome: 'Nova América',
  },
  {
    id: 50026,
    nome: 'Camapuã',
  },
  {
    id: 5002605,
    nome: 'Pontinha do Cocho',
  },
  {
    id: 5002704,
    nome: 'Campo Grande',
  },
  {
    id: 5002704,
    nome: 'Anhanduí',
  },
  {
    id: 5002704,
    nome: 'Rochedinho',
  },
  {
    id: 5002803,
    nome: 'Caracol',
  },
  {
    id: 5002902,
    nome: 'Cassilândia',
  },
  {
    id: 5002902,
    nome: 'Indaiá do Sul',
  },
  {
    id: 5002951,
    nome: 'Chapadão do Sul',
  },
  {
    id: 5003108,
    nome: 'Corguinho',
  },
  {
    id: 5003108,
    nome: 'Baianópolis',
  },
  {
    id: 5003157,
    nome: 'Coronel Sapucaia',
  },
  {
    id: 5003207,
    nome: 'Corumbá',
  },
  {
    id: 5003207,
    nome: 'Albuquerque',
  },
  {
    id: 5003207,
    nome: 'Amolar',
  },
  {
    id: 5003207,
    nome: 'Coimbra',
  },
  {
    id: 5003207,
    nome: 'Nhecolândia',
  },
  {
    id: 5003207,
    nome: 'Paiaguás',
  },
  {
    id: 5003207,
    nome: 'Porto Esperança',
  },
  {
    id: 5003256,
    nome: 'Costa Rica',
  },
  {
    id: 5003256,
    nome: 'Baús',
  },
  {
    id: 5003306,
    nome: 'Coxim',
  },
  {
    id: 5003306,
    nome: 'Jauru',
  },
  {
    id: 5003306,
    nome: 'São Romão',
  },
  {
    id: 5003306,
    nome: 'Taquari',
  },
  {
    id: 5003454,
    nome: 'Deodápolis',
  },
  {
    id: 5003454,
    nome: 'Lagoa Bonita',
  },
  {
    id: 5003454,
    nome: 'Porto Vilma',
  },
  {
    id: 5003454,
    nome: 'Presidente Castelo',
  },
  {
    id: 5003454,
    nome: 'Vila União',
  },
  {
    id: 5003488,
    nome: 'Dois Irmãos do Buriti',
  },
  {
    id: 5003488,
    nome: 'Palmeiras',
  },
  {
    id: 5003504,
    nome: 'Douradina',
  },
  {
    id: 5003504,
    nome: 'Bocajá',
  },
  {
    id: 5003504,
    nome: 'Cruzaltina',
  },
  {
    id: 5003702,
    nome: 'Dourados',
  },
  {
    id: 5003702,
    nome: 'Guaçu',
  },
  {
    id: 5003702,
    nome: 'Itaum',
  },
  {
    id: 5003702,
    nome: 'Panambi',
  },
  {
    id: 5003702,
    nome: 'Picadinha',
  },
  {
    id: 5003702,
    nome: 'São Pedro',
  },
  {
    id: 5003702,
    nome: 'Indápolis',
  },
  {
    id: 5003702,
    nome: 'Vila Formosa',
  },
  {
    id: 5003702,
    nome: 'Vila Vargas',
  },
  {
    id: 5003751,
    nome: 'Eldorado',
  },
  {
    id: 5003751,
    nome: 'Morumbi',
  },
  {
    id: 5003801,
    nome: 'Fátima do Sul',
  },
  {
    id: 5003801,
    nome: 'Culturama',
  },
  {
    id: 5003900,
    nome: 'Figueirão',
  },
  {
    id: 5004007,
    nome: 'Glória de Dourados',
  },
  {
    id: 5004007,
    nome: 'Guaçulândia',
  },
  {
    id: 5004106,
    nome: 'Guia Lopes da Laguna',
  },
  {
    id: 5004304,
    nome: 'Iguatemi',
  },
  {
    id: 5004403,
    nome: 'Inocência',
  },
  {
    id: 5004403,
    nome: 'Morangas',
  },
  {
    id: 5004403,
    nome: 'São José do Sucuriú',
  },
  {
    id: 5004403,
    nome: 'São Pedro',
  },
  {
    id: 5004502,
    nome: 'Itaporã',
  },
  {
    id: 5004502,
    nome: 'Carumbé',
  },
  {
    id: 5004502,
    nome: 'Montese',
  },
  {
    id: 5004502,
    nome: 'Piraporã',
  },
  {
    id: 5004502,
    nome: 'Santa Terezinha',
  },
  {
    id: 5004601,
    nome: 'Itaquiraí',
  },
  {
    id: 5004700,
    nome: 'Ivinhema',
  },
  {
    id: 5004700,
    nome: 'Amandina',
  },
  {
    id: 5004809,
    nome: 'Japorã',
  },
  {
    id: 5004809,
    nome: 'Jacareí',
  },
  {
    id: 5004908,
    nome: 'Jaraguari',
  },
  {
    id: 5004908,
    nome: 'Bom Fim',
  },
  {
    id: 5005004,
    nome: 'Jardim',
  },
  {
    id: 5005004,
    nome: 'Boqueirão',
  },
  {
    id: 5005103,
    nome: 'Jateí',
  },
  {
    id: 5005152,
    nome: 'Juti',
  },
  {
    id: 5005202,
    nome: 'Ladário',
  },
  {
    id: 5005251,
    nome: 'Laguna Carapã',
  },
  {
    id: 5005400,
    nome: 'Maracaju',
  },
  {
    id: 5005400,
    nome: 'Vista Alegre',
  },
  {
    id: 5005608,
    nome: 'Miranda',
  },
  {
    id: 5005681,
    nome: 'Mundo Novo',
  },
  {
    id: 5005707,
    nome: 'Naviraí',
  },
  {
    id: 5005806,
    nome: 'Nioaque',
  },
  {
    id: 5006002,
    nome: 'Nova Alvorada do Sul',
  },
  {
    id: 5006002,
    nome: 'Pana',
  },
  {
    id: 5006200,
    nome: 'Nova Andradina',
  },
  {
    id: 5006200,
    nome: 'Nova Casa Verde',
  },
  {
    id: 5006259,
    nome: 'Novo Horizonte do Sul',
  },
  {
    id: 5006275,
    nome: 'Paraíso das Águas',
  },
  {
    id: 5006275,
    nome: 'Alto Sucuriú',
  },
  {
    id: 5006275,
    nome: 'Bela Alvorada',
  },
  {
    id: 5006309,
    nome: 'Paranaíba',
  },
  {
    id: 5006309,
    nome: 'Alto Santana',
  },
  {
    id: 5006309,
    nome: 'Raimundo',
  },
  {
    id: 5006309,
    nome: 'São João do Aporé',
  },
  {
    id: 5006309,
    nome: 'Tamandaré',
  },
  {
    id: 5006309,
    nome: 'Velhacaria',
  },
  {
    id: 5006358,
    nome: 'Paranhos',
  },
  {
    id: 5006408,
    nome: 'Pedro Gomes',
  },
  {
    id: 5006606,
    nome: 'Ponta Porã',
  },
  {
    id: 5006606,
    nome: 'Cabeceira do Apa',
  },
  {
    id: 5006606,
    nome: 'Sanga Puitã',
  },
  {
    id: 5006903,
    nome: 'Porto Murtinho',
  },
  {
    id: 5007109,
    nome: 'Ribas do Rio Pardo',
  },
  {
    id: 5007109,
    nome: 'Bálsamo',
  },
  {
    id: 5007208,
    nome: 'Rio Brilhante',
  },
  {
    id: 5007208,
    nome: 'Prudêncio Thomaz',
  },
  {
    id: 5007307,
    nome: 'Rio Negro',
  },
  {
    id: 5007307,
    nome: 'Nova Esperança',
  },
  {
    id: 5007406,
    nome: 'Rio Verde de Mato Grosso',
  },
  {
    id: 5007406,
    nome: 'Juscelândia',
  },
  {
    id: 5007505,
    nome: 'Rochedo',
  },
  {
    id: 5007505,
    nome: 'Água Boa',
  },
  {
    id: 5007554,
    nome: 'Santa Rita do Pardo',
  },
  {
    id: 5007695,
    nome: 'São Gabriel do Oeste',
  },
  {
    id: 5007695,
    nome: 'Areado',
  },
  {
    id: 5007695,
    nome: 'Ponte Vermelha',
  },
  {
    id: 5007802,
    nome: 'Selvíria',
  },
  {
    id: 5007703,
    nome: 'Sete Quedas',
  },
  {
    id: 5007901,
    nome: 'Sidrolândia',
  },
  {
    id: 5007901,
    nome: 'Capão Seco',
  },
  {
    id: 5007901,
    nome: 'Quebra Côco',
  },
  {
    id: 5007935,
    nome: 'Sonora',
  },
  {
    id: 5007950,
    nome: 'Tacuru',
  },
  {
    id: 5007976,
    nome: 'Taquarussu',
  },
  {
    id: 5008008,
    nome: 'Terenos',
  },
  {
    id: 5008305,
    nome: 'Três Lagoas',
  },
  {
    id: 5008305,
    nome: 'Arapuá',
  },
  {
    id: 5008305,
    nome: 'Garcias',
  },
  {
    id: 5008305,
    nome: 'Ilha Comprida',
  },
  {
    id: 5008305,
    nome: 'Guadalupe do Alto Paraná',
  },
  {
    id: 5008404,
    nome: 'Vicentina',
  },
  {
    id: 5008404,
    nome: 'São José',
  },
  {
    id: 5008404,
    nome: 'Vila Rica',
  },
];

function alterarMunicipio(id: any) {
  console.log(id);
}
