import axios from 'axios';
import { setInterceptors } from './interceptors';

// axios 초기화 함수
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();

// GET - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
export const posts = createInstanceWithAuth();
