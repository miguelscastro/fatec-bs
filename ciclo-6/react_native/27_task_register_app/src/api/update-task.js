import { api } from '../lib/axios';

export async function updateTask({ editingTask }) {
  const response = await api.put(`/tasks/${editingTask.id}`, {
    title,
    description,
    status: false,
  });
  return response.data;
}
