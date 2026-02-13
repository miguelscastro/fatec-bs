import { createServer } from "./http/server";
import { connectToDatabase } from "./db/connection";
const app = createServer();
connectToDatabase().catch((err) =>
  console.error("Erro ao conectar no DB:", err)
);
export default app;
if (process.env.NODE_ENV !== "production") {
  const PORT = Number(process.env.PORT) || 3333;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running locally on http://0.0.0.0:${PORT}`);
  });
}
