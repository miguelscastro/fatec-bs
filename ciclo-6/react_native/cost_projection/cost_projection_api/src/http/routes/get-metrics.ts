import { Router, Response } from "express";
import { authentication, AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";
import { connectToDatabase } from "../../db/connection";

export const getMetrics = Router();

getMetrics.get(
  "/metrics",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      await connectToDatabase();
      const products = await Product.find({ userId: req.userId });

      const totalProducts = products.length;

      res.json({ totalProducts });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
);
