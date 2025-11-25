import api from "../lib/axios";

export interface DeleteProductResponse {
  message: string;
}

export const deleteProduct = async (
  productId: string
): Promise<DeleteProductResponse> => {
  const response = await api.delete<DeleteProductResponse>(
    `/products/${productId}`
  );
  return response.data;
};
