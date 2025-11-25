import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/**
 * Interface para definir o tipo do cache global
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Em Serverless, precisamos salvar a conexão no objeto 'global'
// para que ela sobreviva a re-invocações ("warm starts").
let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  // 1. Se já existe uma conexão ativa no cache, usa ela imediatamente.
  if (cached.conn) {
    // console.log("=> Using existing database connection");
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "ERRO FATAL: A variável MONGODB_URI não está definida no .env"
    );
  }

  // 2. Se não existe uma promessa de conexão, cria uma.
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Importante para Serverless: impede que o Mongoose fique "esperando" indefinidamente se a conexão cair.
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("=> New database connection established");
        return mongooseInstance;
      });
  }

  // 3. Aguarda a promessa resolver e salva no cache
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Se der erro, limpa a promessa para tentar de novo na próxima
    console.error("=> Error connecting to database:", e);
    throw e; // Lança o erro para a Vercel registrar, em vez de matar o processo
  }

  return cached.conn;
};
