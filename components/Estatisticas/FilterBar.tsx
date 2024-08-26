import React, { useState, useEffect, useCallback } from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { fetchEstadosComEstatisticas, fetchMunicipiosComEstatisticas } from '../../hooks/useEstatisticas';

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
  onMunicipioChange: (municipioId: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onEstadoChange, onMunicipioChange }) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('');
  const [estados, setEstados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [municipios, setMunicipios] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState<string>('');
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [carregandoMunicipios, setCarregandoMunicipios] = useState<boolean>(false);

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

  const fetchMunicipios = async () => {
    setCarregandoMunicipios(true);
    try {
      const data = await fetchMunicipiosComEstatisticas();
      setMunicipios(data);
      filterMunicipiosByEstado(estadoSelecionado);
    } catch (error) {
      console.error('Erro ao buscar municípios:', error);
    } finally {
      setCarregandoMunicipios(false);
    }
  };

  const handleEstadoChange = (event: SelectChangeEvent<string>) => {
    const sigla = event.target.value;
    setEstadoSelecionado(sigla);
    setMunicipioSelecionado(''); 

    const estado = estados.find((estado) => estado.sigla === sigla);
    if (estado) {
      onEstadoChange(estado.id);
      fetchMunicipios(); 
    }
  };

  const handleMunicipioChange = (event: SelectChangeEvent<string>) => {
    const municipioId = event.target.value;
    setMunicipioSelecionado(municipioId);
    onMunicipioChange(municipioId); 
  };

  const filterMunicipiosByEstado = useCallback((sigla: string) => {
    const municipiosFiltrados = municipios.filter(municipio => municipio.sigla === sigla);
    setMunicipiosFiltrados(municipiosFiltrados);
  }, [municipios]);

  useEffect(() => {
    if (estadoSelecionado && municipios.length > 0) {
      filterMunicipiosByEstado(estadoSelecionado);
    }
  }, [municipios, estadoSelecionado, filterMunicipiosByEstado]);

  return (
    <FiltrosContainer>
      <FiltroTitle>Filtros</FiltroTitle>

      <FormControlCustom>
        <InputLabel>Filtrar por</InputLabel>
        <Select value={filtroSelecionado} onChange={handleFiltroChange} label="Filtrar por">
          <MenuItem value="Biomas">Biomas</MenuItem>
          <MenuItem value="Estados">Estados</MenuItem>
        </Select>
      </FormControlCustom>

      {filtroSelecionado === 'Estados' && (
        <>
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

          {!carregandoMunicipios && municipiosFiltrados.length > 0 && (
            <FormControlCustom>
              <InputLabel>Selecionar município</InputLabel>
              <Select
                value={municipioSelecionado}
                onChange={handleMunicipioChange}
                label="Selecionar município"
              >
                {municipiosFiltrados.map((municipio) => (
                  <MenuItem key={municipio.id} value={municipio.id}>
                    {municipio.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControlCustom>
          )}
        </>
      )}
    </FiltrosContainer>
  );
};

export default FilterBar;
