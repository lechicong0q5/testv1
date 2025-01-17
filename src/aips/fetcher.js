import axios from 'axios';
import { API_URL, TOKEN_CYBERSOFT } from '../constants';

const fetcher = axios.create({
  baseURL: API_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

export default fetcher;