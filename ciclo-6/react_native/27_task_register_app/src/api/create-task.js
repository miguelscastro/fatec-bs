import { api } from '../lib/axios';

export async function createTask() {
  const response = await api.post('/tasks', {
    title,
    description,
    status: false,
  });
  return response.data;
}
