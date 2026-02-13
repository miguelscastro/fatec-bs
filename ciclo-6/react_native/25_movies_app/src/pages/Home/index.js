import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import { MovieCard } from '../../components/MovieCard';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await fetch(
          'https://sujeitoprogramador.com/r-api/?api=filmes'
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log('Erro ao buscar filmes:', error);
      } finally {
        setLoading(false);
      }
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>App de Filmes</Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MovieCard data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
