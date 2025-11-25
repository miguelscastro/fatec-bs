import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation, useRoute } from "@react-navigation/native";

import { createStyles } from "./styles";
import { Header } from "../../../../components/Header";
import { InputField } from "../../../../components/InputField";
import { Execute } from "../../../../components/Execute";
import { useAppTheme } from "../../../../hooks/useAppTheme";
import { getProductById } from "../../../../api/get-product-by-id";
import { updateProduct } from "../../../../api/update-product";

export function NewProductItem() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { itemId } = route.params || {};

  const { colors, theme } = useAppTheme();
  const pageStyles = createStyles(colors);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState("");

  const handleAddItem = () => {
    (async () => {
      try {
        if (!itemId) return;

        const product = await getProductById(itemId);

        const newIngredient = {
          name,
          quantity,
          unitCost: Number(cost) || 0,
        };

        const updated = await updateProduct(itemId, {
          name: product.name,
          salePrice: product.salePrice,
          ingredients: [...product.ingredients, newIngredient],
        });

        console.log("Ingrediente adicionado", updated);
        navigation.goBack();
      } catch (e) {
        console.error(e);
        navigation.goBack();
      }
    })();
  };

  return (
    <ScrollView
      style={pageStyles.pageContainer}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Header title="Novo Item" onBack={() => navigation.goBack()} />
      <View style={pageStyles.formContainer}>
        <InputField
          label="Nome do Item"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Farinha de Trigo"
        />

        <View style={pageStyles.inputContainer}>
          <Text style={pageStyles.label}>
            Quantidade: {quantity.toFixed(2)}
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={1}
            maximumValue={20}
            step={0.1}
            value={quantity}
            onValueChange={setQuantity}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor={"#ccc"}
            thumbTintColor={colors.primary}
          />
        </View>

        <InputField
          label="Custo Unitário"
          value={cost}
          onChangeText={setCost}
          keyboardType="numeric"
        />
        <Execute title="Adicionar" onPress={handleAddItem} />
      </View>
    </ScrollView>
  );
}
