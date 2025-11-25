import React, { useState } from "react";
import { ScrollView, View, Alert, Text, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme";
import { InputField } from "../../components/InputField";
import { Execute } from "../../components/Execute";
import { createProduct } from "../../api/create-product";
import { StyleSheet } from "react-native";
import { Header } from "../../components/Header";

export function NewProduct() {
  const navigation = useNavigation<any>();
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  const [title, setTitle] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddItem = async () => {
    Keyboard.dismiss();

    if (!title.trim()) {
      Alert.alert("Atenção", "O nome do produto não pode ser vazio.");
      return;
    }

    setLoading(true);

    try {
      const body = {
        name: title,
        salePrice: Number(salePrice.replace(",", ".")) || 0, // Garante formato numérico correto
        ingredients: [],
      };

      await createProduct(body);

      setSalePrice("");
      setTitle("");

      Alert.alert("Sucesso", `Produto "${title}" criado!`, [
        { text: "OK", onPress: () => navigation.navigate("Products") },
      ]);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível criar o produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Novo Produto" showBack={false} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <InputField
            label="Nome do produto"
            value={title}
            onChangeText={setTitle}
            placeholder="Ex: Bolo de Cenoura"
          />

          <InputField
            label="Preço de Venda (R$)"
            value={salePrice}
            onChangeText={setSalePrice}
            placeholder="0,00"
            keyboardType="numeric"
          />

          <Text style={styles.helperText}>
            Você poderá adicionar os ingredientes e custos na próxima tela após
            criar o produto.
          </Text>

          <View style={styles.buttonContainer}>
            <Execute
              title={loading ? "CRIANDO..." : "CRIAR PRODUTO"}
              onPress={handleAddItem}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// --- ESTILOS PADRONIZADOS ---

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      // PADRÃO DE SEGURANÇA: 50px no topo para evitar status bar/notch
      paddingTop: 50,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingBottom: 40, // Espaço na base
    },
    formContainer: {
      flex: 1,
      marginTop: 20,
    },
    helperText: {
      fontSize: 14,
      color: colors.brown,
      fontStyle: "italic",
      marginTop: 8,
      marginBottom: 24,
      lineHeight: 20,
    },
    buttonContainer: {
      marginTop: 8,
    },
  });
