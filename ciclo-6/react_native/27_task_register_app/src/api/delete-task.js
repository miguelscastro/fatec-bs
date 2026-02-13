import { api } from '../lib/axios';

export async function deleteTask() {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
}
