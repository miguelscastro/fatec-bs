import { Response, Router } from "express";
import { authentication, AuthRequest } from "../authentication";
import { Product } from "../../db/models/Product";

export const deleteProduct = Router();

deleteProduct.delete(
  "/products/:id",
  authentication,
  async (req: AuthRequest, res: Response) => {
    try {
      const deleted = await Product.findOneAndDelete({
        _id: req.params.id,
        userId: req.userId,
      });

      if (!deleted) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }

      res.json({ message: "Produto removido com sucesso" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
);
