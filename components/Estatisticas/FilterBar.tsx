import React, { useState, useEffect, useCallback } from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Box, Typography, CircularProgress } from '@mui/material';
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
  initialBiomaId?: string;
  initialEstadoId?: string;
  initialMunicipioId?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ onLocalChange, initialBiomaId, initialEstadoId, initialMunicipioId }) => {
  const [biomas, setBiomas] = useState<{ id: string; nome: string }[]>([]);
  const [estados, setEstados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [municipios, setMunicipios] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [biomaSelecionado, setBiomaSelecionado] = useState<string>(initialBiomaId || '');
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>(initialEstadoId || '');
  const [municipioSelecionado, setMunicipioSelecionado] = useState<string>(initialMunicipioId || '');
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>(initialBiomaId ? 'Biomas' : 'Estados');
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState<{ id: string; nome: string; sigla: string }[]>([]);
  const [carregandoMunicipios, setCarregandoMunicipios] = useState<boolean>(false);

  useEffect(() => {
    if (initialBiomaId) {
      setFiltroSelecionado('Biomas');
      setBiomaSelecionado(initialBiomaId);
    } else if (initialEstadoId) {
      setFiltroSelecionado('Estados');
      const estado = estados.find(e => e.id === initialEstadoId);
      if (estado) {
        setEstadoSelecionado(estado.sigla);
        onLocalChange('estados', estado.id, estado.nome);
      }
    }
    if (initialMunicipioId) {
      const municipio = municipios.find(m => m.id === initialMunicipioId);
      if (municipio) {
        setMunicipioSelecionado(municipio.id);
        onLocalChange('municipios', municipio.id, municipio.nome);
      }
    }
  }, [initialBiomaId, initialEstadoId, initialMunicipioId, estados, municipios, onLocalChange]);

  useEffect(() => {
    if (filtroSelecionado === 'Biomas') {
      fetchBiomas();
    } else {
      fetchEstados();
    }
  }, [filtroSelecionado]);

  useEffect(() => {
    if (estadoSelecionado) {
      fetchMunicipios(estadoSelecionado);
    }
  }, [estadoSelecionado]);

  const handleFiltroChange = (event: SelectChangeEvent<string>) => {
    const filtro = event.target.value as string;
    setFiltroSelecionado(filtro);
    setBiomaSelecionado('');
    setEstadoSelecionado('');
    setMunicipioSelecionado('');
    setMunicipiosFiltrados([]);
  };

  const fetchBiomas = async () => {
    try {
      const data = await fetchComEstatisticas("biomas");
      setBiomas(data);
    } catch (error) {
      console.error('Erro ao buscar biomas:', error);
    }
  };

  const fetchEstados = async () => {
    try {
      const data = await fetchComEstatisticas("estados");
      setEstados(data);
      if (initialEstadoId) {
        const estado = data.find((e: { id: string; }) => e.id === initialEstadoId);
        if (estado) {
          setEstadoSelecionado(estado.sigla);
          fetchMunicipios(estado.sigla);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const fetchMunicipios = async (estadoSigla: string) => {
    setCarregandoMunicipios(true);
    try {
      const data = await fetchComEstatisticas("municipios");
      setMunicipios(data);
      const filteredMunicipios = data.filter((municipio: { sigla: string; }) => municipio.sigla === estadoSigla);
      setMunicipiosFiltrados(filteredMunicipios);
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
    const estado = estados.find(e => e.sigla === sigla);
    if (estado) {
      setEstadoSelecionado(sigla);
      onLocalChange('estados', estado.id, estado.nome);
      fetchMunicipios(sigla);
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

  return (
    <FiltrosContainer>
      <FiltroTitle style={{ marginBottom: 20 }}>Filtros</FiltroTitle>

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
            {!estados.length ? (
              <CircularProgress />
            ) : (
              <Select value={estadoSelecionado || ''} onChange={handleEstadoChange}>
                {estados.map((estado) => (
                  <MenuItem key={estado.id} value={estado.sigla}>
                    {estado.nome}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControlCustom>

          { !carregandoMunicipios && municipiosFiltrados.length > 0 && (
            <FormControlCustom>
              <InputLabel>Selecionar município</InputLabel>
              <Select value={municipioSelecionado || ''} onChange={handleMunicipioChange} label="Selecionar município">
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
          <Select value={biomaSelecionado || ''} onChange={handleBiomaChange}>
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
