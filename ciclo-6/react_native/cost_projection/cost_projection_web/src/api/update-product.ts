import api from "../lib/axios";
import { Product, Ingredient } from "./get-products";

export interface UpdateProductBody {
  name: string;
  salePrice: number;
  ingredients: Omit<Ingredient, "_id">[];
}

export const updateProduct = async (
  productId: string,
  data: UpdateProductBody
): Promise<Product> => {
  const response = await api.put<Product>(`/products/${productId}`, data);
  return response.data;
};
