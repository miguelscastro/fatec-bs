import { Router, Response } from "express";
import { authentication, AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";

export const getMetrics = Router();

getMetrics.get(
  "/metrics",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      const products = await Product.find({ userId: req.userId });

      const totalProducts = products.length;

      res.json({ totalProducts });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
);
