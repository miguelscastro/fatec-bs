import { useState, useEffect } from 'react';
import { styles } from './styles.js';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

import { TaskItem } from '../../components/TaskItem';
import { NewTaskModal } from '../../components/NewTaskModal';

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const STORAGE_KEY = '@app21:tasks';

  useEffect(() => {
    async function loadTasks() {
      try {
        const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (e) {
        console.error('Falha ao carregar tarefas', e);
      }
    }
    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (e) {
        console.error('Falha ao salvar tarefas', e);
      }
    }
    saveTasks();
  }, [tasks]);

  function handleAddTask(taskName) {
    const newData = {
      id: Date.now().toString(),
      name: taskName,
    };

    setTasks((oldTasks) => [...oldTasks, newData]);
  }

  function handleDeleteTask(id) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.line} />
        <Text style={styles.title}>Tarefas</Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem data={item} onDelete={() => handleDeleteTask(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma tarefa cadastrada.</Text>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}>
        <Feather name="plus" size={30} color="#000" />
      </TouchableOpacity>

      <NewTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddTask}
      />
    </View>
  );
}


