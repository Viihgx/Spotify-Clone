const express = require('express');
const cors = require('cors');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const mockData = require('../Data/db.json');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(bodyParser.json());

app.use('/audio', express.static(path.join(__dirname, './Audio')));

// Lista de tokens JWT válidos
const validTokens = new Set();

const jwt = require('jsonwebtoken');
// Chave secreta para assinar tokens JWT
const secretKey = 'your-secret-key';

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

// Obter uma playlist pelo id dela
app.get('/playlists/:id', (req, res) => {
  const playlistId = parseInt(req.params.id, 10);

  // Encontrar a playlist com o ID correspondente
  const playlist = mockData.playlists.find((p) => p.id === playlistId);

  if (!playlist) {
    return res.status(404).json({ error: 'Playlist não encontrada' });
  }

  res.json(playlist);
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

    // Geração de ID único usando UUID
    const userId = uuidv4();

    // Salve as informações do usuário no seu sistema de armazenamento (neste caso, o arquivo JSON de mock)
    const newUser = {
      id: userId,
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

// Deleta um usuário pelo id

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = mockData.playlists.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  mockData.users.splice(userIndex, 1);

  res.json({ message: 'Usuário removido com sucesso' });
});

// Edita usuário pelo id

app.patch('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;

  // Encontrar o índice do usuário no array
  const userIndex = mockData.users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  // Atualizar os campos, se fornecidos
  if (username) {
    mockData.users[userIndex].username = username;
  }

  if (email) {
    mockData.users[userIndex].email = email;
  }

  if (password) {
    // Criptografar a nova senha, se fornecida
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Erro ao criptografar a senha');
        return res.status(500).json({ error: 'Erro interno' });
      }

      mockData.users[userIndex].password = hashedPassword;

      // Escrever os dados atualizados no arquivo JSON (ou no seu sistema de armazenamento)
      fs.writeFileSync(
        path.join(__dirname, '../Data/db.json'),
        JSON.stringify(mockData, null, 2)
      );

      res.json({ message: 'Usuário editado com sucesso', user: mockData.users[userIndex] });
    });
  } else {
    // Se não houver senha para editar, apenas salvar os outros campos
    // Escrever os dados atualizados no arquivo JSON (ou no seu sistema de armazenamento)
    fs.writeFileSync(
      path.join(__dirname, '../Data/db.json'),
      JSON.stringify(mockData, null, 2)
    );

    res.json({ message: 'Usuário editado com sucesso', user: mockData.users[userIndex] });
  }
});

// Rota para fazer login e gerar um token JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifique as credenciais e autentique o usuário
  const user = mockData.users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    // Gere um token JWT para o usuário
    const payload = { username: user.username, userId: user.id }; // Dados que deseja incluir no token
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    // Adicione o token à lista de tokens válidos
    validTokens.add(token);

    res.json({ message: 'Login bem-sucedido', token });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Rota para fazer logout
app.post('/logout', (req, res) => {
  const token = req.headers.authorization;

  if (token) {
    validTokens.delete(token); // Remove o token da lista de tokens válidos
    res.json({ message: 'Logout realizado com sucesso' });
  } else {
    res.status(400).json({ error: 'Token não fornecido' });
  }
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
    songs: songs || [], // Aqui você pode adicionar as músicas à playlist
  };

  mockData.playlists.push(newPlaylist);

  // Atualize o arquivo JSON de dados aqui, similar à rota de cadastro de usuário.

  res.status(201).json({ message: 'Playlist criada com sucesso', playlist: newPlaylist });
});

// Rota para adicionar uma música a uma playlist existente
app.post('/playlists/:id/add-song', (req, res) => {
  const playlistId = parseInt(req.params.id, 10);
  const { songId } = req.body;

  const playlist = mockData.playlists.find((p) => p.id === playlistId);
  const song = mockData.songs.find((s) => s.id === songId);

  if (!playlist) {
    return res.status(404).json({ error: 'Playlist não encontrada' });
  }

  if (!song) {
    return res.status(404).json({ error: 'Música não encontrada' });
  }

  playlist.songs.push(song.id);

  // Atualize o arquivo JSON de dados aqui, similar à rota de cadastro de usuário.

  res.json({ message: 'Música adicionada à playlist com sucesso' });
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
    songs: songs || [], // Aqui você pode adicionar as músicas à playlist
  };

  mockData.playlists.push(newPlaylist);

  // Atualize o arquivo JSON de dados aqui, similar à rota de cadastro de usuário.

  res.status(201).json({ message: 'Playlist criada com sucesso', playlist: newPlaylist });
});

// Rota para adicionar uma música a uma playlist existente
app.post('/playlists/:id/add-song', (req, res) => {
  const playlistId = parseInt(req.params.id, 10);
  const { songId } = req.body;

  const playlist = mockData.playlists.find((p) => p.id === playlistId);
  const song = mockData.songs.find((s) => s.id === songId);

  if (!playlist) {
    return res.status(404).json({ error: 'Playlist não encontrada' });
  }

  if (!song) {
    return res.status(404).json({ error: 'Música não encontrada' });
  }

  playlist.songs.push(song.id);

  // Atualize o arquivo JSON de dados aqui, similar à rota de cadastro de usuário.

  res.json({ message: 'Música adicionada à playlist com sucesso' });
});

// Remover uma música de uma playlist 
app.patch('/playlists/:id/remove-song', (req, res) => {
  const playlistId = parseInt(req.params.id, 10);
  const { songId } = req.body;

  // Encontrar a playlist com o ID correspondente
  const playlist = mockData.playlists.find((p) => p.id === playlistId);

  if (!playlist) {
    return res.status(404).json({ error: 'Playlist não encontrada' });
  }

  // Encontrar o índice da música na playlist
  const songIndex = playlist.songs.indexOf(songId);

  if (songIndex === -1) {
    return res.status(404).json({ error: 'Música não encontrada na playlist' });
  }

  // Remover a música da playlist
  playlist.songs.splice(songIndex, 1);

  // Atualizar o arquivo JSON de dados
  fs.writeFileSync(
    path.join(__dirname, '../Data/db.json'),
    JSON.stringify(mockData, null, 2)
  );

  res.json({ message: 'Música removida da playlist com sucesso', playlist });
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