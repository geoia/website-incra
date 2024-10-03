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
    } else if (initialEstadoId) {
      setFiltroSelecionado('Estados');
    }
  }, [initialBiomaId, initialEstadoId]);
  

  useEffect(() => {
    if (initialBiomaId) {
      setBiomaSelecionado(initialBiomaId);
    }
  
    if (initialEstadoId) {
      const estado = estados.find(e => e.id === initialEstadoId);
      if (estado) {
        setEstadoSelecionado(estado.sigla); // Define a sigla após o carregamento
        onLocalChange('estados', estado.id, estado.nome); // Chama a função de mudança com a sigla
      }
    }
  
    if (initialMunicipioId) {
      const municipio = municipios.find(m => m.id === initialMunicipioId);
      if (municipio) {
        setMunicipioSelecionado(municipio.id); // Define o município selecionado
        onLocalChange('municipios', municipio.id, municipio.nome);
      }
    }
  }, [initialBiomaId, initialEstadoId, initialMunicipioId, estados, municipios]);
  

  // Ao carregar o componente, busca biomas ou estados com base nos parâmetros iniciais
  useEffect(() => {
    if (initialBiomaId) {
      fetchBiomas();
    } else if (initialEstadoId) {
      fetchEstados();
    }
  }, [initialBiomaId, initialEstadoId]);

  // Carrega os municípios quando um estado é selecionado
  useEffect(() => {
    if (estadoSelecionado && estados.length > 0) {
      fetchMunicipios(estadoSelecionado);  // Carrega municípios apenas se um estado for selecionado
    }
  }, [estadoSelecionado, estados]);

  // Sincroniza a seleção de estado assim que os dados de estados forem carregados
  useEffect(() => {
    if (initialEstadoId && estados.length > 0) {
      const estado = estados.find((e) => e.id === initialEstadoId);
      if (estado) {
        setEstadoSelecionado(estado.sigla); // Usa a sigla para definir o estado selecionado
        onLocalChange('estados', estado.id, estado.nome); // Chama a função de mudança com a sigla
      }
    }
  }, [initialEstadoId, estados]);
  


  // Sincroniza a seleção de município quando os municípios estiverem carregados
  useEffect(() => {
    if (estadoSelecionado && municipios.length > 0) {
      const municipio = municipios.find((m) => m.sigla === estadoSelecionado);
      if (municipio) {
        setMunicipioSelecionado(municipio.id); // Define o município selecionado corretamente
      }
    }
  }, [municipios, estadoSelecionado]);

  useEffect(() => {
    if (estados.length > 0) {
      const estado = estados.find(e => e.id === initialEstadoId);
      if (estado) {
        setEstadoSelecionado(estado.sigla); // Define a sigla após o carregamento
      }
    }
  }, [estados]); // Dependência do estado dos estados
  
  

  const handleFiltroChange = (event: SelectChangeEvent<string>) => {
    const filtro = event.target.value as string;
    setFiltroSelecionado(filtro);

    if (filtro === 'Estados') {
      resetBiomaSelection(); // Reset bioma when switching to Estados
      fetchEstados();
    } else if (filtro === 'Biomas') {
      resetEstadoAndMunicipioSelection(); // Reset estados when switching to Biomas
      fetchBiomas();
    }
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
      // Se há um estado inicial, escolha automaticamente o estado
      if (initialEstadoId) {
        const estado = data.find((e: { id: string; }) => e.id === initialEstadoId);
        if (estado) {
          setEstadoSelecionado(estado.sigla);
          fetchMunicipios(estado.sigla); // Carrega municípios para o estado
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
      filterMunicipiosByEstado(estadoSigla); // Filtra os municípios com base no estado selecionado
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
      fetchMunicipios(sigla); // Carrega municípios baseado na sigla
    }
  };
  
  
  
  const handleMunicipioChange = (event: SelectChangeEvent<string>) => {
    const municipioId = event.target.value; // Aqui é o id do município
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

  const resetBiomaSelection = () => {
    setBiomaSelecionado('');
  };

  const resetEstadoAndMunicipioSelection = () => {
    setEstadoSelecionado('');
    setMunicipioSelecionado('');
    setMunicipiosFiltrados([]);
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
                <Select
                  value={estadoSelecionado || ''} // Certifique-se de que é uma string ou vazio
                  onChange={handleEstadoChange}
                >
                  {estados.map((estado) => (
                    <MenuItem key={estado.id} value={estado.sigla}>
                      {estado.nome}
                    </MenuItem>
                  ))}
                </Select> 

              )}

          </FormControlCustom>

          {!carregandoMunicipios && municipiosFiltrados.length > 0 && (
            <FormControlCustom>
              <InputLabel>Selecionar município</InputLabel>
              <Select value={municipioSelecionado || ''} onChange={handleMunicipioChange} label="Selecionar município">
              {municipiosFiltrados.map((municipio) => (
                <MenuItem key={municipio.id} value={municipio.id}> {/* Aqui o value deve ser o id */}
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
          <Select value={biomaSelecionado || ''} onChange={handleBiomaChange} label="Selecionar bioma">
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
