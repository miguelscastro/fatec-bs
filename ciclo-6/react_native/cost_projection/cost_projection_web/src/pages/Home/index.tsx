import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { PackageOpen } from "lucide-react-native"; // Importando o ícone

import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme";
import { Execute } from "../../components/Execute";
import { getProducts, Product } from "../../api/get-products";
import { useAppSettings } from "../../hooks/useAppSettings";

export function Home() {
  const navigation = useNavigation<any>();
  const { colors } = useAppTheme();
  const { currency } = useAppSettings();
  const pageStyles = createStyles(colors);

  const [metrics, setMetrics] = useState({
    totalProfit: 0,
    totalSale: 0,
    count: 0,
  });
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getProducts();

      const totalProfit = data.reduce(
        (acc, curr) => acc + (curr.profit || 0),
        0
      );
      const totalSale = data.reduce(
        (acc, curr) => acc + (curr.salePrice || 0),
        0
      );

      setMetrics({
        totalProfit,
        totalSale,
        count: data.length,
      });

      const sorted = [...data].sort((a, b) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
      });

      setRecentProducts(sorted.slice(0, 3));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <View style={pageStyles.pageContainer}>
      <ScrollView
        contentContainerStyle={pageStyles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho */}
        <View style={pageStyles.headerSection}>
          <Text style={pageStyles.title}>Olá!</Text>
          <Text style={pageStyles.subtitle}>
            {metrics.count === 0
              ? "Vamos começar o seu negócio?"
              : "Este é o potencial atual:"}
          </Text>
        </View>

        {loading ? (
          <View style={{ padding: 20 }}>
            <ActivityIndicator color={colors["brown-dark"]} />
          </View>
        ) : metrics.count === 0 ? (
          // --- EMPTY STATE (Igual da Products) ---
          <View style={pageStyles.emptyContainer}>
            <PackageOpen size={64} color={colors.brown} />
            <Text style={pageStyles.emptyTitle}>Nada por aqui ainda</Text>
            <Text style={pageStyles.emptyText}>
              Cadastre seu primeiro produto clicando no botão abaixo para ver as
              métricas.
            </Text>
          </View>
        ) : (
          // --- DASHBOARD + LISTA RECENTE ---
          <>
            {/* Card de Dashboard */}
            <View style={pageStyles.dashboardCard}>
              <Text style={pageStyles.cardTitle}>Lucro Potencial Estimado</Text>
              <Text style={pageStyles.cardValue}>
                {currency} {metrics.totalProfit.toFixed(2)}
              </Text>

              <View style={pageStyles.divider} />

              <View style={pageStyles.statsRow}>
                <View>
                  <Text style={pageStyles.statLabel}>Produtos Cadastrados</Text>
                  <Text style={pageStyles.statValue}>{metrics.count}</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={pageStyles.statLabel}>
                    Valor Total em Vendas
                  </Text>
                  <Text style={pageStyles.statValue}>
                    {currency} {metrics.totalSale.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>

            {/* Seção: Últimos Adicionados */}
            {recentProducts.length > 0 && (
              <View style={pageStyles.recentSection}>
                <Text style={pageStyles.sectionTitle}>Últimos Adicionados</Text>
                {recentProducts.map((product) => (
                  <TouchableOpacity
                    key={product._id}
                    style={pageStyles.recentItem}
                    activeOpacity={0.7}
                    onPress={() =>
                      navigation.navigate("ProductDetails", {
                        productId: product._id,
                      })
                    }
                  >
                    <View>
                      <Text style={pageStyles.recentItemTitle}>
                        {product.name}
                      </Text>
                      <Text style={pageStyles.recentItemSubtitle}>
                        Venda: {currency} {product.salePrice.toFixed(2)}
                      </Text>
                    </View>

                    <View style={pageStyles.badgeContainer}>
                      <Text
                        style={[
                          pageStyles.badgeText,
                          {
                            color:
                              (product.profitMargin || 0) >= 0
                                ? colors.success || "#00C851"
                                : "#E53935",
                          },
                        ]}
                      >
                        {(product.profitMargin || 0) >= 0 ? "+" : ""}
                        {product.profitMargin?.toFixed(0)}%
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>

      {/* Botão Principal Fixo na Base */}
      <View style={pageStyles.footer}>
        <Execute
          title="GERENCIAR PRODUTOS"
          onPress={() => navigation.navigate("Products")}
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
    contentContainer: {
      paddingHorizontal: 24,
      // Espaço extra para não cortar conteúdo atrás do footer fixo
      paddingBottom: 120,
      flexGrow: 1, // IMPORTANTE: Permite que o conteúdo ocupe a tela toda para centralizar itens
    },
    headerSection: {
      marginTop: 20,
      marginBottom: 30,
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
    // --- Estilos do Empty State ---
    emptyContainer: {
      flex: 1, // Ocupa o espaço restante
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      marginBottom: 40, // Equilíbrio visual (já que o header ocupa o topo)
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
    // ------------------------------
    dashboardCard: {
      backgroundColor: colors.white,
      borderRadius: 16,
      padding: 24,
      shadowColor: colors["brown-dark"],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 4,
      borderWidth: 1,
      borderColor: colors["base-card"],
      marginBottom: 32,
    },
    cardTitle: {
      fontSize: 12,
      color: colors.brown,
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: 1,
      marginBottom: 8,
    },
    cardValue: {
      fontSize: 40,
      fontWeight: "bold",
      color: colors.success || "#00C851",
    },
    divider: {
      height: 1,
      backgroundColor: colors["base-card"],
      marginVertical: 20,
    },
    statsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    statLabel: {
      fontSize: 12,
      color: colors["base-text"],
      opacity: 0.7,
      marginBottom: 4,
    },
    statValue: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    recentSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors["brown-dark"],
      marginBottom: 16,
    },
    recentItem: {
      backgroundColor: colors.white,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors["base-card"],
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    recentItemTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors["base-text"],
      marginBottom: 4,
    },
    recentItemSubtitle: {
      fontSize: 14,
      color: colors.brown,
    },
    badgeContainer: {
      backgroundColor: colors["base-card"],
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
    },
    badgeText: {
      fontSize: 14,
      fontWeight: "bold",
    },
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 24,
      paddingBottom: 40,
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors["base-card"],
    },
  });
