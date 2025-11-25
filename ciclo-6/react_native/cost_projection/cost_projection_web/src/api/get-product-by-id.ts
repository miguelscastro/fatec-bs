import api from "../lib/axios";
import { Product } from "./get-products";

export const getProductById = async (productId: string): Promise<Product> => {
  try {
    const resp = await api.get<Product>(`/product/${productId}`);
    return resp.data;
  } catch (err) {
    const resp = await api.get<Product>(`/products/${productId}`);
    return resp.data;
  }
};
