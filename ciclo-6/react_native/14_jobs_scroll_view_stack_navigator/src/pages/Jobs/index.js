import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card } from '../../components/Card/index';
import { jobs } from '../../data/jobs';
import {styles} from './styles.js'

export function Jobs() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Vagas</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

