import api from "../lib/axios";

export interface Metrics {
  totalProducts: number;
  totalProductionCost: number;
  totalSalePotential: number;
  totalProfit: number;
  avgMargin: string;
}

export const getMetrics = async (): Promise<Metrics> => {
  const response = await api.get<Metrics>("/metrics");
  return response.data;
};
