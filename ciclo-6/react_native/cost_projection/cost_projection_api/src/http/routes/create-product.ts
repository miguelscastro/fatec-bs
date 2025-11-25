import { Response, Router } from "express";
import { authentication, type AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";
import { connectToDatabase } from "../../db/connection";

export const createProduct = Router();

createProduct.post(
  "/products",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      await connectToDatabase();
      const { name, salePrice = 0, ingredients = [] } = req.body ?? {};

      if (!name || typeof name !== "string") {
        res
          .status(400)
          .json({ error: "`name` is required and must be a string" });
        return;
      }

      if (!Array.isArray(ingredients)) {
        res.status(400).json({ error: "`ingredients` must be an array" });
        return;
      }

      const product = new Product({
        userId: req.userId,
        name,
        salePrice,
        ingredients,
      });

      const saved = await product.save();

      res.status(201).json(saved);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
);
