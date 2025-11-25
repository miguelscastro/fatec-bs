import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_USER_ID_KEY = "@cost_app:user_id";

export const BASE_URL = "https://cost-projection.vercel.app/";

const api = axios.create({ baseURL: BASE_URL, timeout: 5000 });

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

api.interceptors.request.use(
  async (config) => {
    try {
      let userId = await AsyncStorage.getItem(STORAGE_USER_ID_KEY);

      if (!userId) {
        userId = generateUniqueId();
        await AsyncStorage.setItem(STORAGE_USER_ID_KEY, userId);
      }

      if (config.headers) {
        config.headers["x-user-id"] = userId;
      }
    } catch (error) {
      console.error("Erro ao recuperar/salvar ID do usuário", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("[api] response error:", error?.message || error);
    if (error?.config) {
      console.error(
        "[api] failed request:",
        error.config.method,
        error.config.url
      );
    }
    return Promise.reject(error);
  }
);

export default api;
