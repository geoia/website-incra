import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
import { Popper, PopperProps, colors } from '@mui/material';

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

const CustomPopper = (props) => {
  return <Popper {...props} style={{ width: '30%' }} />;
};

function Enviar(valor: any, setCityId: (val: number) => void) {
  setCityId(valor);
}

export default function Pesquisa(this: any, { setCityId, isDataLoading }: Props) {
  const options = cidades.map((option) => {
    const estado = option.estado;
    return {
      estado: /[0-9]/.test(estado) ? null : estado,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.estado.localeCompare(a.estado))}
      groupBy={(option) => option.estado}
      getOptionLabel={(option) => option.nome}
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
        },
        '& .MuiAutocomplete-inputRoot': {
          paddingLeft: '20px !important',
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

        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          border: '1px solid ',
          borderColor: '#0f1c3c00',
        },
      }}
      PopperComponent={CustomPopper}
      onInputChange={(event, value) => {
        cidades.map((option, index) =>
          value == option.nome ? Enviar(option.id, setCityId) : null
        );
      }}
      renderInput={(params) => (
        <TextField
          value="Corumba"
          {...params}
          label="Escolha uma localidade"
          style={{ color: '#ffffff', margin: '10px' }}
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

const cidades = [
  {
    id: 5000203,
    nome: 'Porto Acre',
    estado: 'Acre',
  },
  {
    id: 5000203,
    nome: 'São Paulo',
    estado: 'São Paulo',
  },
  {
    id: 5000203,
    nome: 'Água Clara',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000203,
    nome: 'Porto de Galinhas',
    estado: 'Bahia',
  },
  {
    id: 5000252,
    nome: 'Alcinópolis',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000609,
    nome: 'Amambai',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000708,
    nome: 'Anastácio',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000807,
    nome: 'Anaurilândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000856,
    nome: 'Angélica',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000856,
    nome: 'Ipezal',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000906,
    nome: 'Antônio João',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5000906,
    nome: 'Campestre',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001003,
    nome: 'Aparecida do Taboado',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001102,
    nome: 'Aquidauana',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001102,
    nome: 'Camisão',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001102,
    nome: 'Cipolândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001102,
    nome: 'Piraputanga',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001102,
    nome: 'Taunay',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001243,
    nome: 'Aral Moreira',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001508,
    nome: 'Bandeirantes',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001508,
    nome: 'Congonha',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001904,
    nome: 'Bataguassu',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5001904,
    nome: 'Porto XV de Novembro',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002001,
    nome: 'Batayporã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002100,
    nome: 'Bela Vista',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002100,
    nome: 'Nossa Senhora de Fátima',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002159,
    nome: 'Bodoquena',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002159,
    nome: 'Morraria do Sul',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002209,
    nome: 'Bonito',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002209,
    nome: 'Águas de Miranda',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002308,
    nome: 'Brasilândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002308,
    nome: 'Debrasa',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002407,
    nome: 'Caarapó',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002407,
    nome: 'Cristalina',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002407,
    nome: 'Nova América',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 50026,
    nome: 'Camapuã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002605,
    nome: 'Pontinha do Cocho',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002704,
    nome: 'Campo Grande',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002704,
    nome: 'Anhanduí',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002704,
    nome: 'Rochedinho',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002803,
    nome: 'Caracol',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002902,
    nome: 'Cassilândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002902,
    nome: 'Indaiá do Sul',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5002951,
    nome: 'Chapadão do Sul',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003108,
    nome: 'Corguinho',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003108,
    nome: 'Baianópolis',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003157,
    nome: 'Coronel Sapucaia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Corumbá',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Albuquerque',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Amolar',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Coimbra',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Nhecolândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Paiaguás',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003207,
    nome: 'Porto Esperança',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003256,
    nome: 'Costa Rica',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003256,
    nome: 'Baús',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003306,
    nome: 'Coxim',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003306,
    nome: 'Jauru',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003306,
    nome: 'São Romão',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003306,
    nome: 'Taquari',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003454,
    nome: 'Deodápolis',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003454,
    nome: 'Lagoa Bonita',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003454,
    nome: 'Porto Vilma',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003454,
    nome: 'Presidente Castelo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003454,
    nome: 'Vila União',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003488,
    nome: 'Dois Irmãos do Buriti',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003488,
    nome: 'Palmeiras',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003504,
    nome: 'Douradina',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003504,
    nome: 'Bocajá',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003504,
    nome: 'Cruzaltina',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Dourados',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Guaçu',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Itaum',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Panambi',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Picadinha',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'São Pedro',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Indápolis',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Vila Formosa',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003702,
    nome: 'Vila Vargas',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003751,
    nome: 'Eldorado',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003751,
    nome: 'Morumbi',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003801,
    nome: 'Fátima do Sul',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003801,
    nome: 'Culturama',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5003900,
    nome: 'Figueirão',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004007,
    nome: 'Glória de Dourados',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004007,
    nome: 'Guaçulândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004106,
    nome: 'Guia Lopes da Laguna',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004304,
    nome: 'Iguatemi',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004403,
    nome: 'Inocência',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004403,
    nome: 'Morangas',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004403,
    nome: 'São José do Sucuriú',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004403,
    nome: 'São Pedro',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004502,
    nome: 'Itaporã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004502,
    nome: 'Carumbé',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004502,
    nome: 'Montese',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004502,
    nome: 'Piraporã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004502,
    nome: 'Santa Terezinha',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004601,
    nome: 'Itaquiraí',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004700,
    nome: 'Ivinhema',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004700,
    nome: 'Amandina',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004809,
    nome: 'Japorã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004809,
    nome: 'Jacareí',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004908,
    nome: 'Jaraguari',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5004908,
    nome: 'Bom Fim',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005004,
    nome: 'Jardim',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005004,
    nome: 'Boqueirão',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005103,
    nome: 'Jateí',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005152,
    nome: 'Juti',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005202,
    nome: 'Ladário',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005251,
    nome: 'Laguna Carapã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005400,
    nome: 'Maracaju',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005400,
    nome: 'Vista Alegre',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005608,
    nome: 'Miranda',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005681,
    nome: 'Mundo Novo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005707,
    nome: 'Naviraí',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5005806,
    nome: 'Nioaque',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006002,
    nome: 'Nova Alvorada do Sul',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006002,
    nome: 'Pana',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006200,
    nome: 'Nova Andradina',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006200,
    nome: 'Nova Casa Verde',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006259,
    nome: 'Novo Horizonte do Sul',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006275,
    nome: 'Paraíso das Águas',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006275,
    nome: 'Alto Sucuriú',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006275,
    nome: 'Bela Alvorada',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006309,
    nome: 'Paranaíba',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006309,
    nome: 'Alto Santana',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006309,
    nome: 'Raimundo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006309,
    nome: 'São João do Aporé',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006309,
    nome: 'Tamandaré',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006309,
    nome: 'Velhacaria',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006358,
    nome: 'Paranhos',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006408,
    nome: 'Pedro Gomes',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006606,
    nome: 'Ponta Porã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006606,
    nome: 'Cabeceira do Apa',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006606,
    nome: 'Sanga Puitã',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5006903,
    nome: 'Porto Murtinho',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007109,
    nome: 'Ribas do Rio Pardo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007109,
    nome: 'Bálsamo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007208,
    nome: 'Rio Brilhante',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007208,
    nome: 'Prudêncio Thomaz',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007307,
    nome: 'Rio Negro',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007307,
    nome: 'Nova Esperança',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007406,
    nome: 'Rio Verde de Mato Grosso',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007406,
    nome: 'Juscelândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007505,
    nome: 'Rochedo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007505,
    nome: 'Água Boa',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007554,
    nome: 'Santa Rita do Pardo',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007695,
    nome: 'São Gabriel do Oeste',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007695,
    nome: 'Areado',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007695,
    nome: 'Ponte Vermelha',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007802,
    nome: 'Selvíria',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007703,
    nome: 'Sete Quedas',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007901,
    nome: 'Sidrolândia',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007901,
    nome: 'Capão Seco',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007901,
    nome: 'Quebra Côco',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007935,
    nome: 'Sonora',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007950,
    nome: 'Tacuru',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5007976,
    nome: 'Taquarussu',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008008,
    nome: 'Terenos',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008305,
    nome: 'Três Lagoas',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008305,
    nome: 'Arapuá',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008305,
    nome: 'Garcias',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008305,
    nome: 'Ilha Comprida',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008305,
    nome: 'Guadalupe do Alto Paraná',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008404,
    nome: 'Vicentina',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008404,
    nome: 'São José',
    estado: 'Mato Grosso do Sul',
  },
  {
    id: 5008404,
    nome: 'Vila Rica',
  },
];

function alterarMunicipio(id: any) {
  console.log(id);
}
