import express from "express";
import cors from "cors";
import { createProduct } from "./routes/create-product";
import { deleteProduct } from "./routes/delete-product";
import { getProductById } from "./routes/get-product-by-id";
import { updateProduct } from "./routes/update-product";
import { authentication } from "./authentication";
import { getMetrics } from "./routes/get-metrics";
import { getProducts } from "./routes/get-products";

export const createServer = () => {
  const app = express();

  app.use((req, res, next) => {
    console.log(`\n🔹 [${req.method}] ${req.url}`);
    next();
  });

  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => {
    if (req.body && Object.keys(req.body).length > 0) {
      console.log("📦 Body:", JSON.stringify(req.body, null, 2));
    }
    next();
  });

  app
    .use(createProduct)
    .use(deleteProduct)
    .use(getMetrics)
    .use(getProductById)
    .use(getProducts)
    .use(updateProduct)
    .use(authentication);

  app.use((req, res) => {
    console.warn(`⚠️  404 - Rota não encontrada: ${req.method} ${req.url}`);
    res.status(404).json({
      error: "Rota não encontrada",
      path: req.url,
      method: req.method,
    });
  });

  return app;
};
