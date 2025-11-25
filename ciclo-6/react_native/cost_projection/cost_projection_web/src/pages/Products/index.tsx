import React, { useState, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { PackageOpen } from "lucide-react-native";

import { useAppTheme } from "../../hooks/useAppTheme";
import { useAppSettings } from "../../hooks/useAppSettings";

import { CardItem } from "../../components/CardItem";
import { Execute } from "../../components/Execute";
import { getProducts, Product } from "../../api/get-products";
import { styles } from "./styles";

export function Products() {
  const navigation = useNavigation<any>();
  const { colors } = useAppTheme();
  const pageStyles = styles(colors);
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
        cost: p.productionCost ?? 0,
        profitMargin: p.profitMargin,
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
    <View style={pageStyles.pageContainer}>
      <View style={pageStyles.headerSection}>
        <Text style={pageStyles.title}>Meus Produtos</Text>
        <Text style={pageStyles.subtitle}>
          Gerencie seu catálogo e visualize lucros
        </Text>
      </View>

      {loading ? (
        <View style={pageStyles.centerContainer}>
          <ActivityIndicator size="large" color={colors["brown-dark"]} />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 12 }}>
              <CardItem
                item={item}
                onPress={() =>
                  navigation.navigate("ProductDetails", { productId: item.id })
                }
                currency={currency}
              />
            </View>
          )}
          ListEmptyComponent={
            <View style={pageStyles.emptyContainer}>
              <PackageOpen size={64} color={colors.brown} />
              <Text style={pageStyles.emptyTitle}>Nada por aqui ainda</Text>
              <Text style={pageStyles.emptyText}>
                Cadastre seu primeiro produto clicando no botão abaixo.
              </Text>
            </View>
          }
          contentContainerStyle={pageStyles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={pageStyles.footer}>
        <Execute
          title="+ Novo Produto"
          onPress={() => navigation.navigate("NewProduct")}
        />
      </View>
    </View>
  );
}
