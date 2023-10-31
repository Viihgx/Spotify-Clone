import axios from 'axios';

const apiUrl = 'http://localhost:3004'; // Substitua pela URL do seu servidor

// Função para fazer login
export function login(username, password) {
  return axios.post(`${apiUrl}/login`, { username, password })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

// Função para fazer logout
export function logout() {
  return axios.post(`${apiUrl}/logout`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
