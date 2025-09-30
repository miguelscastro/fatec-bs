import { View, Text, ScrollView, Alert } from 'react-native';
import { InputField } from '../../components/InputField/index';
import { Select } from '../../components/Select/index';
import { Range } from '../../components/Range/index';
import { IsBrazilian } from '../../components/IsBrazilian/index';
import { Execute } from '../../components/Execute';
import { styles } from './styles';
import { useState } from 'react';

export function SignUp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [creditLimit, setCreditLimit] = useState(200);
  const [isBrazilian, setIsBrazilian] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit() {
    if (!name.trim() || !age.trim()) {
      return;
    }

    const formData = {
      name: name,
      age: age,
      gender: gender,
      educationLevel: educationLevel,
      creditLimit: creditLimit.toFixed(0),
      isBrazilian: isBrazilian ? 'Sim' : 'Não',
    };

    setSubmittedData(formData);
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

      {submittedData && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Dados Informados:</Text>
          <Text style={styles.resultsText}>Nome: {submittedData.name}</Text>
          <Text style={styles.resultsText}>Idade: {submittedData.age}</Text>
          <Text style={styles.resultsText}>Sexo: {submittedData.gender}</Text>
          <Text style={styles.resultsText}>
            Escolaridade: {submittedData.educationLevel}
          </Text>
          <Text style={styles.resultsText}>
            Limite: R$ {submittedData.creditLimit}
          </Text>
          <Text style={styles.resultsText}>
            Brasileiro: {submittedData.isBrazilian}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
