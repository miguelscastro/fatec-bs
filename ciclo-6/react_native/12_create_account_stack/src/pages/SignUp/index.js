import { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { InputField } from '../../components/InputField/index';
import { Select } from '../../components/Select/index';
import { Range } from '../../components/Range/index';
import { IsBrazilian } from '../../components/IsBrazilian/index';
import { Execute } from '../../components/Execute';
import { styles } from './styles';

export function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [creditLimit, setCreditLimit] = useState(200);
  const [isBrazilian, setIsBrazilian] = useState(false);

  function handleSubmit() {
    if (!name.trim() || !age.trim()) {
      console.log('Atenção', 'Preencha nome e idade!');
      return;
    }

    const formData = {
      name: name,
      age: age,
      gender: gender || 'Não informado',
      educationLevel: educationLevel || 'Não informado',
      creditLimit: creditLimit.toFixed(0),
      isBrazilian: isBrazilian ? 'Sim' : 'Não',
    };

    navigation.navigate('AccountData', { submittedData: formData });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>

      <InputField
        label="Nome"
        value={name}
        setValue={setName}
        placeholder="Insira seu nome"
      />
      <InputField
        label="Idade"
        value={age}
        setValue={setAge}
        placeholder="Insira sua idade"
        keyboardType="numeric"
      />
      <Select
        label="Sexo"
        pickerItems={['Masculino', 'Feminino']}
        selectedValue={gender}
        onValueChange={setGender}
      />
      <Select
        label="Escolaridade"
        pickerItems={[
          'Ensino Fundamental',
          'Ensino Médio',
          'Graduação',
          'Pós-graduação',
        ]}
        selectedValue={educationLevel}
        onValueChange={setEducationLevel}
      />
      <Range
        label="Limite"
        value={creditLimit}
        onValueChange={setCreditLimit}
        minimumValue={0}
        maximumValue={1000}
        step={50}
      />
      <IsBrazilian
        label="Brasileiro"
        value={isBrazilian}
        onValueChange={setIsBrazilian}
      />

      <Execute title="Confirmar" onPress={handleSubmit} />
    </ScrollView>
  );
}
