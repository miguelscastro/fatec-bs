import { createServer } from "./http/server";
import { connectToDatabase } from "./db/connection";

// 1. Inicializa o app fora de qualquer função
const app = createServer();

// 2. Tenta conectar ao banco.
// OBS: Certifique-se que sua função connectToDatabase usa o padrão de cache (Singleton)
// para não abrir 1000 conexões.
connectToDatabase().catch((err) =>
  console.error("Erro ao conectar no DB:", err)
);

// 3. O SEGREDO DA VERCEL: Você precisa exportar o app
export default app;

// 4. O Listen só roda se NÃO for produção (ou seja, no seu PC)
// A Vercel ignora isso aqui e usa o export default acima.
if (process.env.NODE_ENV !== "production") {
  const PORT = Number(process.env.PORT) || 3333;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running locally on http://0.0.0.0:${PORT}`);
  });
}
