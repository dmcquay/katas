const e = process.env;

export default {
  port: e.PORT ?? 3001,
  db: {
    host: process.env.PGHOST ?? "localhost",
    user: process.env.PGUSER ?? "postgres",
    database: process.env.PGDATABASE ?? "public",
    password: process.env.PGPASSWORD ?? "",
    port: Number(process.env.PGPORT ?? "5432"),
  }
}