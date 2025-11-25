import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { PackageOpen } from "lucide-react-native";

import { useAppTheme } from "../../hooks/useAppTheme";
import { Execute } from "../../components/Execute";
import { getProducts, Product } from "../../api/get-products";
import { useAppSettings } from "../../hooks/useAppSettings";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation<any>();
  const { colors } = useAppTheme();
  const { currency } = useAppSettings();
  const pageStyles = styles(colors);

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
              Cadastre seu primeiro produto para ver as métricas.
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
