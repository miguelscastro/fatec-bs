import api from "../lib/axios";

export interface Ingredient {
  name: string;
  quantity: number;
  unitCost: number;
  _id?: string;
}

export interface Product {
  _id: string;
  userId: string;
  name: string;
  salePrice: number;
  ingredients: Ingredient[];
  productionCost: number;
  profit: number;
  profitMargin: number;
  createdAt: string;
}


export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<any>("/products");

    const payload = response.data;

    if (Array.isArray(payload)) {
      return payload as Product[];
    }

    if (payload && typeof payload === "object") {
      if (payload._id) return [payload as Product];
      if (Array.isArray(payload.products)) return payload.products as Product[];
      if (Array.isArray(payload.data)) return payload.data as Product[];
    }

    return [];
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
};
