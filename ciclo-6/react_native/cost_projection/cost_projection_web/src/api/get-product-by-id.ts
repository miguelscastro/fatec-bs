import api from "../lib/axios";
import { Product } from "./get-products";

export const getProductById = async (productId: string): Promise<Product> => {
  try {
    // Try singular route first (some server implementations use /product/:id)
    const resp = await api.get<Product>(`/product/${productId}`);
    return resp.data;
  } catch (err) {
    // Fallback to plural route
    const resp = await api.get<Product>(`/products/${productId}`);
    return resp.data;
  }
};
