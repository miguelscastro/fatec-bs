import { createServer } from "./http/server";
import { connectToDatabase } from "./db/connection";

const start = async () => {
  await connectToDatabase();

  const app = createServer();

  const PORT = Number(process.env.PORT) || 3000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
};

start();
