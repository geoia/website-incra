import React, { useState, useEffect, useCallback } from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { fetchComEstatisticas } from '../../hooks/useEstatisticas';
  
const FiltrosContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0A2846', 
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
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
  onLocalChange: (local: string, localId: string, localNome: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onLocalChange }) => {
  const [biomas, setBiomas] = useState<{ id: string; nome: string }[]>([]);
  const [estados, setEstados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [municipios, setMunicipios] = useState<{ id: string; nome: string; sigla: string }[]>([]);

  const [biomaSelecionado, setBiomaSelecionado] = useState<string>('');
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState<string>('');

  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('');

  const [municipiosFiltrados, setMunicipiosFiltrados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [carregandoMunicipios, setCarregandoMunicipios] = useState<boolean>(false);

  const handleFiltroChange = (event: SelectChangeEvent<string>) => {
    const filtro = event.target.value as string;
    setFiltroSelecionado(filtro);
  
    if (filtro === 'Estados') {
      setBiomaSelecionado(''); 
      setEstadoSelecionado('');
      setMunicipioSelecionado('');
      setMunicipiosFiltrados([]);
      fetchEstados();

    } else if (filtro === 'Biomas') {
      setEstadoSelecionado('');
      setMunicipioSelecionado('');
      setMunicipiosFiltrados([]);
      setBiomaSelecionado(''); 
      fetchBiomas(); 
    }
  };

  const fetchBiomas = async () => {
    try {
      const data = await fetchComEstatisticas("biomas");
      setBiomas(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const fetchEstados = async () => {
    try {
      const data = await fetchComEstatisticas("estados");
      setEstados(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const fetchMunicipios = async () => {
    setCarregandoMunicipios(true);
    try {
      const data = await fetchComEstatisticas("municipios");
      setMunicipios(data);
      filterMunicipiosByEstado(estadoSelecionado);
    } catch (error) {
      console.error('Erro ao buscar municípios:', error);
    } finally {
      setCarregandoMunicipios(false);
    }
  };

  const handleBiomaChange = (event: SelectChangeEvent<string>) => {
    const biomaId = event.target.value;
    const bioma = biomas.find(b => b.id === biomaId);
    if (bioma) {
      setBiomaSelecionado(biomaId);
      onLocalChange('biomas', biomaId, bioma.nome);
    }
  };

  const handleEstadoChange = (event: SelectChangeEvent<string>) => {
    const sigla = event.target.value;
    setEstadoSelecionado(sigla);

    const estado = estados.find((estado) => estado.sigla === sigla);
    if (estado) {
      onLocalChange('estados', estado.id, estado.nome);
      fetchMunicipios();
    }
  };

  const handleMunicipioChange = (event: SelectChangeEvent<string>) => {
    const municipioId = event.target.value;
    const municipio = municipios.find(m => m.id === municipioId);
    if (municipio) {
      setMunicipioSelecionado(municipioId);
      onLocalChange('municipios', municipioId, municipio.nome);
    }
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
      <FiltroTitle style={{marginBottom:20}}>Filtros</FiltroTitle>

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

      {filtroSelecionado === 'Biomas' && (
        <FormControlCustom>
          <InputLabel>Selecionar bioma</InputLabel>
          <Select
            value={biomaSelecionado}
            onChange={handleBiomaChange}
            label="Selecionar bioma"
          >
            {biomas.map((bioma) => (
              <MenuItem key={bioma.id} value={bioma.id}>
                {bioma.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControlCustom>
      )}
    </FiltrosContainer>
  );
};

export default FilterBar;
