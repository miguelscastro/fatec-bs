import { View, Text, Switch } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { Select } from '../../components/Select';
import { COLORS } from '../../constants/colors';

export function Settings({ navigate, theme, setTheme, currency, setCurrency }) {
  const currencies = [
    { label: 'R$', value: 'R$' },
    { label: 'U$', value: 'U$' },
  ];
  const pageStyles = styles(theme);

  const onSelectCurrency = (curr) => {
    setCurrency(curr);
  };

  return (
    <View style={pageStyles.pageContainer}>
      <Header
        title="Configurações"
        onBack={() => navigate('Cards')}
        theme={theme}
      />
      <View style={pageStyles.settingsContainer}>
        <View style={pageStyles.settingItem}>
          <Text style={pageStyles.label}>Modo Escuro</Text>
          <Switch
            trackColor={{ false: '#767577', true: COLORS.secondary }}
            thumbColor={theme === 'dark' ? COLORS.primary : COLORS.secondary}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            value={theme === 'dark'}
          />
        </View>

        <View style={pageStyles.settingItem}>
          <Text style={pageStyles.label}>Moeda</Text>
          <Select
            label="Moeda"
            pickerItems={currencies}
            selectedValue={currency}
            onValueChange={(itemValue) => onSelectCurrency(itemValue)}
            theme={theme}
          />
        </View>
      </View>
    </View>
  );
}
