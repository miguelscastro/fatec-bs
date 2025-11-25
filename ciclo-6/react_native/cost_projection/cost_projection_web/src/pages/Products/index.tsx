import React, { useState, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PackageOpen } from "lucide-react-native";

import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";
import { useAppSettings } from "../../hooks/useAppSettings";

import { CardItem } from "../../components/CardItem";
import { Execute } from "../../components/Execute";
import { getProducts, Product } from "../../api/get-products";

export function Products() {
  const navigation = useNavigation<any>();
  const { colors, theme } = useAppTheme();
  const pageStyles = createStyles(colors);
  const { currency } = useAppSettings();

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();

      const mapped = data.map((p: Product) => ({
        id: p._id,
        title: p.name,
        cost: p.productionCost ?? p.salePrice,
      }));

      setItems(mapped);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  return (
    <SafeAreaView style={pageStyles.pageContainer} edges={["top"]}>
      <View style={pageStyles.headerRow}>
        <View style={{ flex: 1 }}></View>
      </View>

      {loading ? (
        <View style={pageStyles.centerContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardItem
              item={item}
              onPress={() =>
                navigation.navigate("ProductDetails", { productId: item.id })
              }
              currency={currency}
            />
          )}
          ListEmptyComponent={
            <View style={pageStyles.emptyContainer}>
              <PackageOpen size={64} color={colors.placeholder || "#ccc"} />
              <Text style={pageStyles.emptyTitle}>Nada por aqui ainda</Text>
              <Text style={pageStyles.emptyText}>
                Cadastre seu primeiro produto clicando no botão abaixo.
              </Text>
            </View>
          }
          contentContainerStyle={pageStyles.listContent}
        />
      )}

      <View style={pageStyles.addProductContainer}>
        <Execute
          title="+ Novo Produto"
          onPress={() => navigation.navigate("NewProductItem")}
        />
      </View>
    </SafeAreaView>
  );
}
