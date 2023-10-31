import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import Dashboard from '../../components/Layout/Dashboard';

function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const searchMusic = async () => {
    try {
      const response = await fetch(`http://localhost:3004/search?query=${query}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        setError('Erro ao buscar músicas. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      setError('Erro de rede. Verifique sua conexão ou tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    setError(null); // Limpa o erro quando o usuário digita uma nova consulta.
  }, [query]);

  return (
    <Box
      sx={{
        backgroundColor: '#ffff',
        color: '#fff',
        padding: '20px',
        marginTop: '60px',
        height: '100vh',
        width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
        zIndex: '1',
        marginLeft: '379px',
        flexDirection: 'row',
      }}
    >
      <TextField
        label="Pesquisar Música"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={searchMusic}>
        Pesquisar
      </Button>

      {error && <p>{error}</p>}

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            {result.title} - {result.artist}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Dashboard(Search);
