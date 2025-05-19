require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  host: process.env.DB_HOST || "localhost",
  dbPort: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "database",
  maxPoolSize: 10,
  idleTimeOutMillis: 10000,
  connectionTimeoutMillis: 2000,
  env: process.env.NODE_ENV || "development",
};
