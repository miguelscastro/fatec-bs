import { Router, Response } from "express";
import { authentication, AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";

export const getProducts = Router();

getProducts.get(
  "/products",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      const products = await Product.find({ userId: req.userId }).sort({
        createdAt: -1,
      });
      res.json(products);
    } catch (err: any) {
      console.error(err.stack);
      res.status(500).json({ error: err.message });
    }
  }
);
