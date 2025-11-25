import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Pressable,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { Pencil, Trash2 } from "lucide-react-native";
import { useAppTheme, type ThemeColors } from "../../../../hooks/useAppTheme";
import { useAppSettings } from "../../../../hooks/useAppSettings";
import type { Product } from "../../../../api/get-products";
import { getProductById } from "../../../../api/get-product-by-id";
import { deleteProduct } from "../../../../api/delete-product";
import { updateProduct } from "../../../../api/update-product";
import { Header } from "../../../../components/Header";
import { Execute } from "../../../../components/Execute";
import { CardItem } from "../../../../components/CardItem";

export function ProductDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { productId } = route.params || {};

  const { colors } = useAppTheme();
  const { currency } = useAppSettings();
  const pageStyles = createStyles(colors);

  const [item, setItem] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async (isRefresh = false) => {
    if (!productId) return;
    if (!isRefresh) setLoading(true);

    try {
      const p = await getProductById(productId);
      setItem(p);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível carregar os detalhes.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [productId])
  );

  const handleRefresh = () => {
    setRefreshing(true);
    loadData(true);
  };

  const handleEditProduct = () => {
    navigation.navigate("EditProduct", {
      itemId: null,
      productToEdit: item,
    });
  };

  const handleDeleteProduct = () => {
    if (!item) return;

    Alert.alert(
      "Excluir Produto",
      `Tem certeza que deseja excluir "${item.name}"? Isso não pode ser desfeito.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              setLoading(true);
              await deleteProduct(item._id);
              navigation.goBack();
            } catch (error) {
              console.error(error);
              Alert.alert("Erro", "Não foi possível excluir o produto.");
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  const handleEditIngredient = (ingredient: any) => {
    navigation.navigate("EditProductItem", {
      productId: item?._id,
      ingredient: ingredient,
    });
  };

  const handleAddItem = () =>
    navigation.navigate("NewProductItem", { itemId: productId });

  const handleDeleteIngredient = async (ingredientId?: string) => {
    if (!item) return;

    Alert.alert("Remover", "Deseja remover este ingrediente?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: async () => {
          try {
            const filtered = item.ingredients.filter(
              (ing) => ing._id !== ingredientId
            );

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
        },
      },
    ]);
  };

  const renderSummaryCard = () => {
    if (!item) return null;

    const margin = item.profitMargin || 0;
    const successColor = colors.success || "#00C851";
    const errorColor = "#E53935";
    const markerColor = margin >= 0 ? successColor : errorColor;

    return (
      <View style={pageStyles.summaryCard}>
        <View style={pageStyles.summaryRow}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Text style={pageStyles.summaryLabel}>Preço de Venda</Text>
            <Text
              style={pageStyles.salePriceValue}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              R$ {item.salePrice?.toFixed(2)}
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={pageStyles.summaryLabel}>Lucro Líquido</Text>
            <Text
              style={[pageStyles.profitValue, { color: colors.success }]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              R$ {item.profit?.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={pageStyles.divider} />

        <View style={pageStyles.summaryRow}>
          <Text style={pageStyles.costLabel}>Custo de Produção:</Text>
          <Text style={pageStyles.costValue}>
            R$ {item.productionCost?.toFixed(2)}
          </Text>
        </View>

        <View
          style={[pageStyles.marginBadge, { backgroundColor: markerColor }]}
        >
          <Text style={pageStyles.marginText}>
            {margin > 0 ? "+" : ""}
            {margin.toFixed(0)}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={pageStyles.pageContainer}>
      {/* Header Fixo */}
      <View style={pageStyles.headerWrapper}>
        <Header
          title={item?.name || "Detalhes"}
          onBack={() => navigation.goBack()}
        />

        {item && !loading && (
          <View style={pageStyles.headerActions}>
            <Pressable
              onPress={handleEditProduct}
              style={pageStyles.actionButton}
              hitSlop={15}
            >
              <Pencil size={22} color={colors["brown-dark"]} />
            </Pressable>

            <Pressable
              onPress={handleDeleteProduct}
              style={[pageStyles.actionButton, { marginLeft: 16 }]}
              hitSlop={15}
            >
              <Trash2 size={22} color="#E53935" />
            </Pressable>
          </View>
        )}
      </View>

      {loading && !refreshing ? (
        <View style={pageStyles.centerLoading}>
          <ActivityIndicator size="large" color={colors["brown-dark"]} />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={pageStyles.scrollContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[colors["brown-dark"]]}
              tintColor={colors["brown-dark"]}
            />
          }
        >
          {renderSummaryCard()}

          <View style={pageStyles.sectionHeader}>
            <Text style={pageStyles.sectionTitle}>
              Ingredientes ({item?.ingredients.length || 0})
            </Text>
          </View>

          {item && item.ingredients.length === 0 && (
            <View style={pageStyles.emptyContainer}>
              <Text style={pageStyles.emptyText}>
                Este produto ainda não tem ingredientes.{"\n"}
                Adicione itens para calcular o custo.
              </Text>
            </View>
          )}

          {item &&
            item.ingredients.map((ing) => (
              <View key={ing._id} style={{ marginBottom: 12 }}>
                <CardItem
                  item={{
                    name: ing.name,
                    quantity: ing.quantity,
                    cost: ing.unitCost,
                  }}
                  onDelete={() => handleDeleteIngredient(ing._id)}
                  onPress={() => handleEditIngredient(ing)}
                  currency={currency}
                />
              </View>
            ))}
        </ScrollView>
      )}

      {/* Footer Fixo na parte inferior */}
      <View style={pageStyles.footer}>
        <Execute title="ADICIONAR INGREDIENTE" onPress={handleAddItem} />
      </View>
    </View>
  );
}

// --- ESTILOS PADRONIZADOS COM A HOME ---

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      // PADRÃO DE SEGURANÇA: 50px no topo
      paddingTop: 50,
    },
    headerWrapper: {
      position: "relative",
      alignItems: "center",
      zIndex: 10,
      paddingHorizontal: 24, // Alinhado com a Home
    },
    headerActions: {
      position: "absolute",
      right: 24, // Alinhado com a Home
      top: 0,
      bottom: 0,
      flexDirection: "row",
      alignItems: "center",
      zIndex: 20,
    },
    actionButton: {
      padding: 4,
    },
    centerLoading: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    scrollContent: {
      paddingHorizontal: 24, // Alinhado com a Home
      paddingTop: 10,
      // Espaço grande no final para o conteúdo não ficar atrás do footer
      paddingBottom: 140,
    },
    summaryCard: {
      backgroundColor: colors.white,
      borderRadius: 16, // Mais arredondado (estilo Home)
      paddingTop: 40,
      paddingBottom: 24,
      paddingHorizontal: 24,
      marginBottom: 32,
      shadowColor: colors["brown-dark"],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1, // Sombra mais suave
      shadowRadius: 12,
      elevation: 4,
      borderWidth: 1,
      borderColor: colors["base-card"],
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    summaryRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    summaryLabel: {
      fontSize: 12,
      color: colors.brown,
      textTransform: "uppercase",
      marginBottom: 4,
      fontWeight: "bold",
      letterSpacing: 0.5,
    },
    salePriceValue: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    profitValue: {
      fontSize: 28,
      fontWeight: "bold",
    },
    divider: {
      height: 1,
      backgroundColor: colors["base-card"],
      marginVertical: 20,
    },
    costLabel: {
      fontSize: 14,
      color: colors["base-text"],
      opacity: 0.8,
    },
    costValue: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors["base-text"],
    },
    marginBadge: {
      position: "absolute",
      top: 0,
      right: 0,
      borderBottomLeftRadius: 16, // Mais arredondado
      paddingHorizontal: 16,
      paddingVertical: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    marginText: {
      color: colors.white,
      fontSize: 12,
      fontWeight: "bold",
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    emptyContainer: {
      padding: 40,
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "dashed",
      borderWidth: 1,
      borderColor: colors.brown,
      borderRadius: 12,
      backgroundColor: colors.white, // Fundo branco fica mais limpo
      marginTop: 20,
    },
    emptyText: {
      textAlign: "center",
      color: colors.brown,
      fontSize: 14,
      lineHeight: 20,
    },
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
