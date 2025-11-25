import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { PackageOpen } from "lucide-react-native";

import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme";
import { useAppSettings } from "../../hooks/useAppSettings";

import { CardItem } from "../../components/CardItem";
import { Execute } from "../../components/Execute";
import { getProducts, Product } from "../../api/get-products";

export function Products() {
  const navigation = useNavigation<any>();
  const { colors } = useAppTheme();
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
      {/* Cabeçalho estilo Home */}
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

      {/* Footer Fixo estilo Home */}
      <View style={pageStyles.footer}>
        <Execute
          title="+ Novo Produto"
          onPress={() => navigation.navigate("NewProduct")}
        />
      </View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      // PADRÃO DE SEGURANÇA: 50px no topo
      paddingTop: 50,
    },
    headerSection: {
      paddingHorizontal: 24,
      marginTop: 10,
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors["brown-dark"],
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors["base-text"],
      opacity: 0.8,
    },
    centerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    listContent: {
      paddingHorizontal: 24, // Alinhamento lateral consistente
      paddingTop: 10,
      // Espaço grande no final para o conteúdo não ficar atrás do footer
      paddingBottom: 140,
      flexGrow: 1,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 60,
      paddingHorizontal: 40,
    },
    emptyTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors["base-text"],
      marginTop: 20,
      marginBottom: 8,
    },
    emptyText: {
      textAlign: "center",
      color: colors.brown,
      fontSize: 16,
      lineHeight: 24,
    },
    // Footer Fixo padronizado
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 24,
      // PADRÃO DE SEGURANÇA: 40px na base
      paddingBottom: 40,
      paddingTop: 16,
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors["base-card"],
    },
  });
