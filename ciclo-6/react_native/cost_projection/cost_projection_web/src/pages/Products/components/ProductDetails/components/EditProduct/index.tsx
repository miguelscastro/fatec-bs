import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  Keyboard,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  useAppTheme,
  type ThemeColors,
} from "../../../../../../hooks/useAppTheme";
import { updateProduct } from "../../../../../../api/update-product";
import { Header } from "../../../../../../components/Header";
import { InputField } from "../../../../../../components/InputField";
import { Execute } from "../../../../../../components/Execute";

export function EditProduct() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // Recebe o objeto completo do produto vindo da tela anterior
  const { productToEdit } = route.params || {};

  const { colors } = useAppTheme();
  const pageStyles = createStyles(colors);

  // Inicializa os estados com os valores atuais do produto
  const [name, setName] = useState(productToEdit?.name || "");
  const [salePrice, setSalePrice] = useState(
    productToEdit?.salePrice?.toString() || ""
  );
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    Keyboard.dismiss();

    if (!productToEdit?._id) return;
    if (!name.trim() || !salePrice.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      // Mantemos os ingredientes originais, alterando apenas nome e preço
      // A API espera o array de ingredientes limpo (sem _id se for re-envio estrito,
      // mas aqui mapeamos para garantir a estrutura correta)
      const currentIngredients = productToEdit.ingredients.map((ing: any) => ({
        name: ing.name,
        quantity: ing.quantity,
        unitCost: ing.unitCost,
      }));

      await updateProduct(productToEdit._id, {
        name,
        salePrice: Number(salePrice.replace(",", ".")), // Garante formato numérico
        ingredients: currentIngredients,
      });

      Alert.alert("Sucesso", "Produto atualizado!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível atualizar o produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={pageStyles.pageContainer}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Header title="Editar Produto" onBack={() => navigation.goBack()} />

      <View style={pageStyles.formContainer}>
        <InputField
          label="Nome do Produto"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Bolo de Cenoura"
        />

        <InputField
          label="Preço de Venda (R$)"
          value={salePrice}
          onChangeText={setSalePrice}
          placeholder="0.00"
          keyboardType="numeric"
        />

        <View style={pageStyles.infoBox}>
          <Text style={pageStyles.infoText}>
            Nota: A edição dos ingredientes deve ser feita na tela de detalhes,
            removendo ou adicionando novos itens.
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Execute
            title={loading ? "SALVANDO..." : "SALVAR ALTERAÇÕES"}
            onPress={handleSave}
            // Se o componente Execute aceitar prop disabled/loading, passe aqui
          />
        </View>
      </View>
    </ScrollView>
  );
}

// --- ESTILOS ---

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
      paddingTop: 50, // Ajuste seguro para status bar se necessário
    },
    formContainer: {
      flex: 1,
      padding: 16,
    },
    infoBox: {
      backgroundColor: colors["base-card"],
      padding: 12,
      borderRadius: 8,
      marginVertical: 16,
      borderLeftWidth: 4,
      borderLeftColor: colors.brown,
    },
    infoText: {
      color: colors.brown,
      fontSize: 14,
      fontStyle: "italic",
    },
  });
