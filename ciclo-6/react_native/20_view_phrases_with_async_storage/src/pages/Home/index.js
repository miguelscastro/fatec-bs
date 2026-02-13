import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { OptionSwitch } from '../../components/OptionSwitch';

export function Home() {
  const [isDay, setIsDay] = useState(true);
  const [isSmall, setIsSmall] = useState(true);

  const KEY_THEME = '@app20:theme';
  const KEY_FONT = '@app20:fontSize';

  useEffect(() => {
    async function loadPreferences() {
      try {
        const storedTheme = await AsyncStorage.getItem(KEY_THEME);
        const storedFont = await AsyncStorage.getItem(KEY_FONT);

        if (storedTheme !== null) setIsDay(JSON.parse(storedTheme));
        if (storedFont !== null) setIsSmall(JSON.parse(storedFont));
      } catch (error) {
        console.log('Erro ao carregar:', error);
      }
    }
    loadPreferences();
  }, []);

  useEffect(() => {
    async function savePreferences() {
      try {
        await AsyncStorage.setItem(KEY_THEME, JSON.stringify(isDay));
        await AsyncStorage.setItem(KEY_FONT, JSON.stringify(isSmall));
      } catch (error) {
        console.log('Erro ao salvar:', error);
      }
    }
    savePreferences();
  }, [isDay, isSmall]);

  return (
    <View
      style={[styles.container, { backgroundColor: isDay ? '#FFF' : '#333' }]}>
      <Text style={[styles.title, { color: isDay ? '#000' : '#FFF' }]}>
        Frases
      </Text>

      <View style={styles.controls}>
        <OptionSwitch
          label="Dia"
          value={isDay}
          onValueChange={setIsDay}
          isDay={isDay}
        />

        <OptionSwitch
          label="Pequeno"
          value={isSmall}
          onValueChange={setIsSmall}
          isDay={isDay}
        />
      </View>

      <View style={[styles.quoteBox, { borderColor: isDay ? '#000' : '#FFF' }]}>
        <Text
          style={[
            styles.quoteText,
            {
              color: isDay ? '#000' : '#FFF',
              fontSize: isSmall ? 15 : 28,
            },
          ]}>
          "A vingança nunca é plena, mata a alma e envenena"
        </Text>

        <Text
          style={[
            styles.author,
            {
              color: isDay ? '#000' : '#FFF',
              fontSize: isSmall ? 15 : 28,
            },
          ]}>
          (Seu Madruga)
        </Text>
      </View>
    </View>
  );
}
