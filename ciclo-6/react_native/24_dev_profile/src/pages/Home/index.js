import { useState } from 'react';
import { styles } from './styles';
import { View, Text, Image, Alert, Keyboard, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SearchInput } from '../../components/SearchInput';

export function Home() {
  const [user, setUser] = useState('');
  const [profile, setProfile] = useState(null);

  async function handleSearch() {
    if (user.trim() === '') {
      Alert.alert('Atenção', 'Digite um usuário do GitHub!');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${user}`);

      if (response.status === 404) {
        setProfile(null);
        Alert.alert('Erro', 'Usuário não encontrado!');
        return;
      }

      const data = await response.json();
      setProfile(data);
      Keyboard.dismiss();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao buscar dados.');
    }
  }

  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil dos Devs</Text>
        <View style={styles.underline} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          {profile ? (
            <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
          ) : (
            <FontAwesome5 name="github" size={120} color="#333" />
          )}
        </View>

        <SearchInput
          value={user}
          onChangeText={setUser}
          onPress={handleSearch}
        />

        {profile && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Id: </Text>
              {profile.id}
            </Text>

            <Text style={styles.infoText}>
              <Text style={styles.label}>Nome: </Text>
              {profile.name || 'Sem nome'}
            </Text>

            <Text style={styles.infoText}>
              <Text style={styles.label}>Repositórios: </Text>
              {profile.public_repos}
            </Text>

            <Text style={styles.infoText}>
              <Text style={styles.label}>Criado em: </Text>
              {formatDate(profile.created_at)}
            </Text>

            <Text style={styles.infoText}>
              <Text style={styles.label}>Seguidores: </Text>
              {profile.followers}
            </Text>

            <Text style={styles.infoText}>
              <Text style={styles.label}>Seguindo: </Text>
              {profile.following}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
