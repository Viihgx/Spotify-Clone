const express = require('express');
const cors = require('cors');

const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const mockData = require('../Data/db.json');
const bcrypt = require('bcrypt');
const fs = require('fs'); // Adicione esta linha
const path = require('path');

app.use(cors());
app.use(bodyParser.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor da sua aplicação!');
});

// Rota para obter as músicas
app.get('/songs', (req, res) => {
  res.json(mockData.songs);
});

// Rota para obter as playlists
app.get('/playlists', (req, res) => {
  res.json(mockData.playlists);
});

// Rota de cadastro de usuário
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Validação de dados
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Verifique se o nome de usuário ou e-mail já existe
  const userExists = mockData.users.some(
    (user) => user.username === username || user.email === email
  );

  if (userExists) {
    return res
      .status(400)
      .json({ error: 'Nome de usuário ou e-mail já está em uso' });
  }

  // Criptografia de senha
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Erro ao criptografar a senha');
      return res.status(500).json({ error: 'Erro interno' });
    }

    // Salve as informações do usuário no seu sistema de armazenamento (neste caso, o arquivo JSON de mock)
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    // Adicione o novo usuário aos dados de mock
    mockData.users.push(newUser);

    // Escreva os dados atualizados no arquivo JSON
    fs.writeFileSync(
      path.join(__dirname, '../Data/db.json'),
      JSON.stringify(mockData, null, 2)
    );

    // Envie uma resposta de sucesso com o novo usuário
    res
      .status(201)
      .json({ message: 'Cadastro bem-sucedido', user: newUser });
  });
});


// Rota para listar todos os usuários
app.get('/users', (req, res) => {
  res.json(mockData.users);
});

// Rota para buscar músicas por nome
app.get('/search', (req, res) => {
  const { query } = req.query;

  let results;

  if (!query) {
    results = mockData.songs; // Retorna todas as músicas se a consulta estiver vazia
  } else {
    results = mockData.songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  res.json(results);
});


// Rota para adicionar uma nova playlist
app.post('/playlists', (req, res) => {
  const { title, description, songs } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'O título da playlist é obrigatório' });
  }

  const newPlaylist = {
    id: mockData.playlists.length + 1,
    title,
    description: description || '',
    songs: songs || [],
  };

  mockData.playlists.push(newPlaylist);

  // Atualize o arquivo JSON de dados aqui, similar à rota de cadastro de usuário.

  res.status(201).json({ message: 'Playlist criada com sucesso', playlist: newPlaylist });
});

// Rota para remover uma playlist
app.delete('/playlists/:id', (req, res) => {
  const playlistId = parseInt(req.params.id, 10);
  const playlistIndex = mockData.playlists.findIndex((playlist) => playlist.id === playlistId);

  if (playlistIndex === -1) {
    return res.status(404).json({ error: 'Playlist não encontrada' });
  }

  mockData.playlists.splice(playlistIndex, 1);

  // Atualize o arquivo JSON de dados aqui, similar à rota de cadastro de usuário.

  res.json({ message: 'Playlist removida com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});