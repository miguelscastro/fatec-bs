import React, { useState } from "react";
import { View, Text, ScrollView, Alert, Keyboard } from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppTheme } from "../../../../../../hooks/useAppTheme";
import { getProductById } from "../../../../../../api/get-product-by-id";
import { updateProduct } from "../../../../../../api/update-product";
import { InputField } from "../../../../../../components/InputField";
import { Header } from "../../../../../../components/Header";
import { Execute } from "../../../../../../components/Execute";
import { styles } from "./styles";

export function NewProductItem() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { itemId } = route.params || {};

  const { colors } = useAppTheme();
  const pageStyles = styles(colors);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddItem = async () => {
    Keyboard.dismiss();

    if (!itemId) {
      Alert.alert("Erro", "ID do produto não encontrado.");
      return;
    }

    if (!name.trim() || !cost.trim()) {
      Alert.alert("Atenção", "Preencha o nome e o custo unitário.");
      return;
    }

    setLoading(true);

    try {
      // 1. Busca o produto atual para pegar os ingredientes existentes
      const product = await getProductById(itemId);

      const newIngredient = {
        name,
        quantity: Number(quantity.toFixed(2)), // Garante precisão decimal
        unitCost: Number(cost.replace(",", ".")) || 0, // Trata vírgula
      };

      // 2. Mapeia os existentes para o formato correto (sem _id se a API exigir payload limpo)
      const currentIngredients = product.ingredients.map((ing) => ({
        name: ing.name,
        quantity: ing.quantity,
        unitCost: ing.unitCost,
      }));

      // 3. Atualiza enviando a lista antiga + o novo
      await updateProduct(itemId, {
        name: product.name,
        salePrice: product.salePrice,
        ingredients: [...currentIngredients, newIngredient],
      });

      Alert.alert("Sucesso", "Ingrediente adicionado!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível adicionar o ingrediente.");
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
      <Header title="Novo Ingrediente" onBack={() => navigation.goBack()} />

      <View style={pageStyles.formContainer}>
        <InputField
          label="Nome do Item"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Farinha de Trigo"
        />

        {/* Área do Slider estilizada para parecer um Input */}
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
            // Usando as cores do seu tema
            minimumTrackTintColor={colors["brown-dark"]}
            maximumTrackTintColor={colors["base-card"]}
            thumbTintColor={colors["brown-dark"]}
          />
          <Text style={pageStyles.hintText}>
            Arraste para definir a quantidade
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
            title={loading ? "SALVANDO..." : "ADICIONAR"}
            onPress={handleAddItem}
          />
        </View>
      </View>
    </ScrollView>
  );
}
