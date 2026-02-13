import { api } from '../lib/axios';

export async function getTasks() {
  const response = await api.get('/tasks');
  return response.data;
}
