import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

import { Item } from '../../components/Item';
import { NewItemModal } from '../../components/NewItemModal';

export function Home() {
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const STORAGE_KEY = '@app22:items';

  useEffect(() => {
    async function loadData() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setItems(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function saveData() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (e) {
        console.error(e);
      }
    }
    saveData();
  }, [items]);

  function handleAddItem(name, amount) {
    const newItem = {
      id: Date.now().toString(),
      name,
      amount,
    };
    setItems((old) => [...old, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((old) => old.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.line} />
        <Text style={styles.title}>Lista de Compras</Text>
        <View style={styles.line} />
        <View style={styles.doubleLine} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item data={item} onDelete={() => handleDeleteItem(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={<Text style={styles.emptyText}>Lista vazia</Text>}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}>
        <Feather name="plus" size={30} color="#000" />
      </TouchableOpacity>

      <NewItemModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddItem}
      />
    </View>
  );
}
