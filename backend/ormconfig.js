const dotenv = require("dotenv");
dotenv.config();
if (process.env.NODE_ENV == "production") {
  module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [process.cwd() + "/build/database/entities/**/*.js"],
    migrations: [process.cwd() + "/build/database/migrations/**/*.js"],
    subscribers: [process.cwd() + "/build/database/subscriber/**/*.js"],
    seeds: [process.cwd() + "/build/database/seed/**/*.js"],
    cli: {
      entitiesDir: process.cwd() + "/build/database/entities/",
      migrationsDir: process.cwd() + "/build/database/migrations/",
      subscribersDir: process.cwd() + "/build/database/subscriber/",
    },
  };
} else {
  module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/database/entities/**/*.ts"],
    migrations: ["src/database/migrations/**/*.ts"],
    subscribers: ["src/database/subscriber/**/*.ts"],
    seeds: ["/dist/database/seeds/**/*.ts"],
    cli: {
      entitiesDir: "src/database/entities",
      migrationsDir: "src/database/migrations",
      subscribersDir: "src/database/subscriber",
    },
  };
}
