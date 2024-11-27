import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update if hosted

export const loginUser = (email, password) => axios.post(`${API_URL}/auth/login`, { email, password });
export const signupUser = (username, email, password) => axios.post(`${API_URL}/auth/signup`, { username, email, password });