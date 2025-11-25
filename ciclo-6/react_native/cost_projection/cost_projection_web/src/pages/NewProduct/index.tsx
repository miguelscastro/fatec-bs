import React, { useState } from "react";
import { ScrollView, View, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";
import { InputField } from "../../components/InputField";
import { Execute } from "../../components/Execute";
import { createProduct } from "../../api/create-product";

export function NewProduct() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState("");

  // Novos estados para completar o exemplo de custo
  const [costPrice, setCostPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  const handleAddItem = () => {
    if (!title.trim()) {
      Alert.alert("Atenção", "O nome do produto não pode ser vazio.");
      return;
    }

    (async () => {
      try {
        const body = {
          name: title,
          salePrice: Number(salePrice) || 0,
          ingredients: [],
        };

        await createProduct(body);
        Alert.alert("Sucesso", `Produto "${title}" criado!`);
        setTitle("");
        setCostPrice("");
        setSalePrice("");
        navigation.navigate("Products");
      } catch (e) {
        console.error(e);
        Alert.alert("Erro", "Não foi possível criar o produto.");
      }
    })();
  };

  return (
    <ScrollView
      style={styles.pageContainer}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Novo Produto</Text>
        <Text style={styles.subtitle}>Defina os custos e preços de venda</Text>
      </View>

      <View style={styles.formContainer}>
        <InputField
          label="Nome do produto"
          value={title}
          onChangeText={setTitle}
          placeholder="Ex: Bolo de Cenoura"
        />

        <InputField
          label="Preço de Custo (R$)"
          value={costPrice}
          onChangeText={setCostPrice}
          placeholder="0,00"
          keyboardType="numeric"
        />

        <InputField
          label="Preço de Venda (R$)"
          value={salePrice}
          onChangeText={setSalePrice}
          placeholder="0,00"
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Execute title="Criar Produto" onPress={handleAddItem} />
        </View>
      </View>
    </ScrollView>
  );
}
