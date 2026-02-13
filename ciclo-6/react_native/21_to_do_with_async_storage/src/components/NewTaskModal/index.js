import { useState } from 'react';
import { styles } from './styles.js';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export function NewTaskModal({ visible, onClose, onSave }) {
  const [newTask, setNewTask] = useState('');

  function handleSave() {
    if (newTask.trim() === '') return;
    onSave(newTask);
    setNewTask('');
    onClose();
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.label}>Nome da Tarefa</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite aqui..."
            value={newTask}
            onChangeText={setNewTask}
            autoFocus={true}
          />

          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
