import { Text, View } from 'react-native';
import { useState } from 'react';
import { Execute } from '../../components/Execute';
import { styles } from './styles';

export function Counter() {
  const [counter, setCounter] = useState(0);
  function handleChangeCounter(variant) {
    variant === 'increment'
      ? setCounter((state) => state + 1)
      : variant === 'decrement' && counter > 0
      ? setCounter((state) => state - 1)
      : 0;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Execute
          title="+"
          updateCounter={handleChangeCounter}
          variant="increment"
        />
        <Execute
          title="-"
          updateCounter={handleChangeCounter}
          variant="decrement"
          counter={counter}
        />
      </View>
    </View>

  )
}