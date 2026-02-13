import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './styles.js';

export function NewItemModal({ visible, onClose, onSave }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function handleSave() {
    if (name.trim() === '' || amount.trim() === '') return;

    onSave(name, amount);

    setName('');
    setAmount('');
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
          <Text style={styles.label}>Mercadoria</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Arroz"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Quantidade</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 5kg"
            value={amount}
            onChangeText={setAmount}
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
