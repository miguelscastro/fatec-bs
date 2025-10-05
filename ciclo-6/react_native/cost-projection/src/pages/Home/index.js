import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { Execute } from '../../components/Execute';
import dollarImage from '../../assets/dollar_sign.png';

export function Home({ navigate, theme }) {
  const pageStyles = styles(theme);

  return (
    <View style={pageStyles.pageContainer}>
    
      <Image
        source={dollarImage}
        style={pageStyles.backgroundImage}
        resizeMode="cover"
      />

  
      <View style={pageStyles.contentContainer}>
        <Text style={pageStyles.title}>Bem-vindo(a)!</Text>
        <Text style={pageStyles.subtitle}>
          Calcule o custo de produção de forma fácil e rápida.
        </Text>

        <Execute
          title="Ver produtos"
          onPress={() => navigate('Cards')}
          theme={theme}
        />
      </View>
    </View>
  );
}