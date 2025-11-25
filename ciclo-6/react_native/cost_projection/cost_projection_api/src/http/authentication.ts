import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  userId?: string;
}

export const authentication = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.headers["x-user-id"] as string;

  if (!userId) {
    res
      .status(401)
      .json({ error: "Identificação de usuário (x-user-id) necessária." });
    return;
  }

  req.userId = userId;
  next();
};
