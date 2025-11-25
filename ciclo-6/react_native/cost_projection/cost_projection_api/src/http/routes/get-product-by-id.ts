import { Response, Router } from "express";
import { authentication, type AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";
import { connectToDatabase } from "../../db/connection";

export const getProductById = Router();

getProductById.get(
  "/product/:id",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      await connectToDatabase();
      const product = await Product.findOne({
        _id: req.params.id,
        userId: req.userId,
      });
      if (!product) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }
      res.json(product);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
);
