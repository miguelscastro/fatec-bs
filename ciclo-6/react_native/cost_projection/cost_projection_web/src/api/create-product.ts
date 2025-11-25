import api from "../lib/axios";
import { Product, Ingredient } from "./get-products";

export interface CreateProductBody {
  name: string;
  salePrice: number;
  ingredients: Omit<Ingredient, "_id">[];
}

export const createProduct = async (
  data: CreateProductBody
): Promise<Product> => {
  // API currently may return the created product or the full product list.
  const response = await api.post<any>("/products", data);
  const payload = response.data;

  if (Array.isArray(payload)) {
    // If server returns list, try to find the created item by name and salePrice
    const found = payload.find(
      (p: any) => p.name === data.name && p.salePrice === data.salePrice
    );
    return found || payload[payload.length - 1];
  }

  return payload as Product;
};
