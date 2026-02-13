import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from '../../components/Card/index';
import { jobs } from '../../data/jobs'; 
import {styles} from "./styles"

export function Jobs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>

      <FlatList
        data={jobs}
        keyExtractor={(item) => String(item.id)} 
        renderItem={({ item }) => <Card job={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

