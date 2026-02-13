import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { styles } from './styles.js';
import { TaskCard } from '../../components/TaskCard';
import { FormModal } from '../../components/FormModal';
import { getTasks } from '../../api/get-tasks';
import { updateTask } from '../../api/update-task';
import { createTask } from '../../api/create-task';
import { deleteTask } from '../../api/delete-task';

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  async function loadTasks() {
    try {
      setLoading(true);
      setTasks(getTasks());
    } catch (error) {
      console.log('Erro ao buscar:', error);
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleSaveTask(title, description) {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      if (editingTask) {
        updateTask(editingTask);
        Alert.alert('Sucesso', 'Tarefa atualizada!');
      } else {
        createTask();
        Alert.alert('Sucesso', 'Tarefa criada!');
      }

      loadTasks();
    } catch (error) {
      console.log('Erro ao salvar:', error);
      Alert.alert('Erro', 'Falha ao salvar tarefa.');
    }
  }

  function handleDelete(id) {
    Alert.alert('Excluir', 'Deseja realmente apagar esta tarefa?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            deleteTask(id);
            loadTasks();
          } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Não foi possível excluir.');
          }
        },
      },
    ]);
  }

  function openNewTask() {
    setEditingTask(null);
    setModalVisible(true);
  }

  function openEditTask(task) {
    setEditingTask(task);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tarefas</Text>
      </View>

      <TouchableOpacity style={styles.includeBtn} onPress={openNewTask}>
        <Text style={styles.includeBtnText}>INCLUIR</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#2196F3"
          style={{ marginTop: 50 }}
        />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TaskCard
              data={item}
              onEdit={() => openEditTask(item)}
              onDelete={() => handleDelete(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
          }
        />
      )}

      <FormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveTask}
        taskToEdit={editingTask}
      />
    </View>
  );
}
