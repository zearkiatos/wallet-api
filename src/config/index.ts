import * as dotenv from "dotenv";
import Config from "./Config";

dotenv.config();

process.env.APP_ENV = process.env.APP_ENV || "development";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const config: Config = {
  APP_ENV: process.env.APP_ENV,
  ENVIRONMENT: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || "3000", 10),
  DATABASE: {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE: process.env.MYSQL_DATABASE,
    PORT: parseInt(process.env.MYSQL_PORT || "3306", 10),
  },
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "",
};

export default config;
