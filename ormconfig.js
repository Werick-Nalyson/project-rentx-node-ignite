module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: ["src/database/migrations/*{.js,.ts}"],
  entities: ["src/modules/**/entities/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations/"
  }
}