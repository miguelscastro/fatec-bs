import { Router, Response } from "express";
import { authentication, type AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";
import { connectToDatabase } from "../../db/connection";

export const updateProduct = Router();

updateProduct.put(
  "/products/:id",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      await connectToDatabase();
      const { name, salePrice, ingredients } = req.body;

      const updatedProduct = await Product.findOneAndUpdate(
        { _id: req.params.id, userId: req.userId },
        { name, salePrice, ingredients },
        { new: true }
      );

      if (!updatedProduct) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }

      res.json(updatedProduct);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
);
