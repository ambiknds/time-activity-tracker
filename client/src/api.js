import axios from 'axios';

const API_URL = 'http://localhost:5000/api';


export const register = (username, password) => {
  return axios.post(`${API_URL}/auth/register`, { username, password });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/auth/login`, { username, password });
};

export const getTasks = (token) => {
  return axios.get(`${API_URL}/tasks`, { headers: { Authorization: token } });
};

export const createTask = (token, title) => {
  return axios.post(`${API_URL}/tasks`, { title }, { headers: { Authorization: token } });
};

export const startTimer = (token, taskId) => {
  return axios.post(`${API_URL}/tasks/${taskId}/start`, {}, { headers: { Authorization: token } });
};

export const stopTimer = (token, taskId) => {
  return axios.post(`${API_URL}/tasks/${taskId}/stop`, {}, { headers: { Authorization: token } });
};
