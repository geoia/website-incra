import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { fetchEstadosComEstatisticas } from '../../hooks/useEstatisticas';


const FiltrosContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0A2846', 
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
}));

const FiltroTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginRight: theme.spacing(4), 
}));

const FormControlCustom = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  marginRight: theme.spacing(2), 
  backgroundColor: '#1A395D',
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
  },
  '& .MuiSelect-select': {
    color: '#FFFFFF',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1A395D',
  },
}));

interface FilterBarProps {
  onEstadoChange: (estadoId: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onEstadoChange }) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('');
  const [estados, setEstados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');

  const handleFiltroChange = (event: SelectChangeEvent<string>) => {
    const filtro = event.target.value as string;
    setFiltroSelecionado(filtro);

    if (filtro === 'Estados') {
      fetchEstados();
    }
  };

  const fetchEstados = async () => {
    try {
      const data = await fetchEstadosComEstatisticas();
      setEstados(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const handleEstadoChange = (event: SelectChangeEvent<string>) => {
    const sigla = event.target.value;
    setEstadoSelecionado(sigla);
    const estado = estados.find((estado) => estado.sigla === sigla);
    if (estado) {
      onEstadoChange(estado.id);
    }
  };

  return (
    <FiltrosContainer>
      <FiltroTitle>Filtros</FiltroTitle>

      <FormControlCustom>
        <InputLabel>Filtrar por</InputLabel>
        <Select value={filtroSelecionado} onChange={handleFiltroChange} label="Filtrar por">
          <MenuItem value="Biomas">Biomas</MenuItem>
          <MenuItem value="Estados">Estados</MenuItem>
          <MenuItem value="Municipios">Municípios</MenuItem>
        </Select>
      </FormControlCustom>

      {filtroSelecionado === 'Estados' && (
        <FormControlCustom>
          <InputLabel>Selecionar estado</InputLabel>
          <Select
            value={estadoSelecionado}
            onChange={handleEstadoChange}
            label="Selecionar estado"
          >
            {estados.map((estado) => (
              <MenuItem key={estado.id} value={estado.sigla}>
                {estado.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControlCustom>
      )}
    </FiltrosContainer>
  );
};

export default FilterBar;