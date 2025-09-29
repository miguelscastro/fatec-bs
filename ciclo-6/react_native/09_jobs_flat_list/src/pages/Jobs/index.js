import { Text, FlatList, View } from 'react-native';
import { jobs } from '../../data/jobs';
import { styles } from './styles';
import { Card } from '../../components/Card/index';

export function Jobs() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Vagas</Text>

      <FlatList
        data={jobs}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Card job={item} />
        }
      />
    </View>
  );
}
