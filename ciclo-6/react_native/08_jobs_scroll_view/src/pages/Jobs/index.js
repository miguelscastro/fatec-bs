import { Text, ScrollView, View } from 'react-native';
import { jobs } from '../../data/jobs';
import { styles } from './styles';
import { Card } from '../../components/Card/index';

export function Jobs() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Vagas</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {jobs.map((job) => (
           <Card key={job.id} job={job} />
        ))}
      </ScrollView>
      
    </View>
  );
}
