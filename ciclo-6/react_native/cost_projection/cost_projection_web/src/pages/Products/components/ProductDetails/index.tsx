import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { createStyles } from "./styles";
import { useAppTheme } from "../../../../hooks/useAppTheme";
import { Header } from "../../../../components/Header";
import { useAppSettings } from "../../../../hooks/useAppSettings";
import { Execute } from "../../../../components/Execute";
import { getProductById } from "../../../../api/get-product-by-id";
import { Product } from "../../../../api/get-products";
import { CardItem } from "../../../../components/CardItem";
import { updateProduct } from "../../../../api/update-product";

export function ProductDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { productId } = route.params || {}; // expects productId

  const { colors } = useAppTheme();
  const { currency } = useAppSettings();
  const pageStyles = createStyles(colors);

  const [item, setItem] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!productId) return;
      setLoading(true);
      try {
        const p = await getProductById(productId);
        if (mounted) setItem(p);
      } catch (e) {
        console.error(e);
        Alert.alert("Erro", "Não foi possível carregar o produto.");
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [productId]);

  const handleAddItem = () =>
    navigation.navigate("NewProductItem", { itemId: productId });

  const handleDeleteIngredient = async (ingredientId?: string) => {
    if (!item) return;

    const filtered = item.ingredients.filter((ing) => ing._id !== ingredientId);

    try {
      const updated = await updateProduct(item._id, {
        name: item.name,
        salePrice: item.salePrice,
        ingredients: filtered.map((i) => ({
          name: i.name,
          quantity: i.quantity,
          unitCost: i.unitCost,
        })),
      });
      setItem(updated);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível remover o ingrediente.");
    }
  };

  return (
    <View style={pageStyles.pageContainer}>
      <Header
        title={item?.name || "Produto"}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={pageStyles.detailsHeader}>
          <Text style={pageStyles.totalCostText}>
            Custo Total:{" "}
            {item ? `R$ ${item.productionCost?.toFixed(2) ?? "0.00"}` : "..."}
          </Text>
        </View>

        <Text style={pageStyles.sectionTitle}>Ingredientes</Text>

        {loading && <Text style={pageStyles.emptyText}>Carregando...</Text>}

        {!loading && item && item.ingredients.length === 0 && (
          <Text style={pageStyles.emptyText}>
            Nenhum ingrediente cadastrado.
          </Text>
        )}

        {!loading &&
          item &&
          item.ingredients.map((ing) => (
            <CardItem
              key={ing._id}
              item={{
                name: ing.name,
                quantity: ing.quantity,
                cost: ing.unitCost,
              }}
              onDelete={() => handleDeleteIngredient(ing._id)}
              currency={currency}
            />
          ))}
      </ScrollView>

      <Execute title="Adicionar item" onPress={handleAddItem} />
    </View>
  );
}
