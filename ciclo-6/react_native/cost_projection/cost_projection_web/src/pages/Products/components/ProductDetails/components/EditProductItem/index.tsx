import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  Keyboard,
  Platform,
  StatusBar,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation, useRoute } from "@react-navigation/native";

export function EditProductItem() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // Esperamos receber o ID do produto pai e o objeto do ingrediente a ser editado
  const { productId, ingredient } = route.params || {};

  const { colors } = useAppTheme();
  const pageStyles = createStyles(colors);

  // Inicializa com os dados do ingrediente recebido
  const [name, setName] = useState(ingredient?.name || "");
  const [quantity, setQuantity] = useState(ingredient?.quantity || 1);
  const [cost, setCost] = useState(ingredient?.unitCost?.toString() || "");
  const [loading, setLoading] = useState(false);

  const handleSaveItem = async () => {
    Keyboard.dismiss();

    if (!productId || !ingredient?._id) {
      Alert.alert("Erro", "Dados do item não encontrados.");
      return;
    }

    if (!name.trim() || !cost.trim()) {
      Alert.alert("Atenção", "Preencha o nome e o custo unitário.");
      return;
    }

    setLoading(true);

    try {
      // 1. Busca o produto atualizado para garantir que temos a lista mais recente
      const product = await getProductById(productId);

      // 2. Cria o objeto do ingrediente atualizado
      const updatedIngredient = {
        name,
        quantity: Number(quantity.toFixed(2)),
        unitCost: Number(cost.replace(",", ".")),
      };

      // 3. Substitui o ingrediente antigo pelo novo na lista, mantendo os outros intocados
      const updatedIngredientsList = product.ingredients.map((ing) => {
        // Compara pelo ID para encontrar qual atualizar
        if (ing._id === ingredient._id) {
          return updatedIngredient;
        }
        // Para os outros, retorna uma cópia limpa (sem _id se necessário, ou completo)
        return {
          name: ing.name,
          quantity: ing.quantity,
          unitCost: ing.unitCost,
        };
      });

      // 4. Envia o produto completo atualizado
      await updateProduct(productId, {
        name: product.name,
        salePrice: product.salePrice,
        ingredients: updatedIngredientsList,
      });

      Alert.alert("Sucesso", "Ingrediente atualizado!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível atualizar o ingrediente.");
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
      <Header title="Editar Ingrediente" onBack={() => navigation.goBack()} />

      <View style={pageStyles.formContainer}>
        <InputField
          label="Nome do Item"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Farinha de Trigo"
        />

        <View style={pageStyles.sliderWrapper}>
          <View style={pageStyles.labelRow}>
            <Text style={pageStyles.label}>Quantidade</Text>
            <Text style={pageStyles.valueText}>{quantity.toFixed(1)}</Text>
          </View>

          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0.1}
            maximumValue={10}
            step={0.1}
            value={quantity}
            onValueChange={setQuantity}
            minimumTrackTintColor={colors["brown-dark"]}
            maximumTrackTintColor={colors["base-card"]}
            thumbTintColor={colors["brown-dark"]}
          />
          <Text style={pageStyles.hintText}>
            Arraste para ajustar a quantidade
          </Text>
        </View>

        <InputField
          label="Custo Unitário (R$)"
          value={cost}
          onChangeText={setCost}
          keyboardType="numeric"
          placeholder="0.00"
        />

        <View style={{ marginTop: 20 }}>
          <Execute
            title={loading ? "SALVANDO..." : "SALVAR ALTERAÇÕES"}
            onPress={handleSaveItem}
          />
        </View>
      </View>
    </ScrollView>
  );
}

// --- ESTILOS (Idênticos ao NewProductItem para consistência) ---

import { StyleSheet } from "react-native";
import {
  useAppTheme,
  type ThemeColors,
} from "../../../../../../hooks/useAppTheme";
import { getProductById } from "../../../../../../api/get-product-by-id";
import { updateProduct } from "../../../../../../api/update-product";
import { Header } from "../../../../../../components/Header";
import { InputField } from "../../../../../../components/InputField";
import { Execute } from "../../../../../../components/Execute";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop:
        Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 10 : 50,
    },
    formContainer: {
      flex: 1,
      padding: 16,
    },
    sliderWrapper: {
      marginBottom: 20,
      backgroundColor: colors.white,
      paddingVertical: 8,
    },
    labelRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors["brown-dark"],
      textTransform: "uppercase",
    },
    valueText: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    hintText: {
      fontSize: 12,
      color: colors.brown,
      textAlign: "center",
      marginTop: -4,
    },
  });
