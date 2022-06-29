import * as dotenv from "dotenv";
import Config from "./Config";

dotenv.config();

process.env.APP_ENV = process.env.APP_ENV || 'development';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config: Config = {
  APP_ENV: process.env.APP_ENV,
  ENVIRONMENT: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || '3000', 10),
  DATABASE: {
    HOST: process.env.MSSQL_HOST,
    USER: process.env.MSSQL_USER,
    PASSWORD: process.env.MSSQL_PASSWORD,
    DATABASE: process.env.MSSQL_DATABASE,
    PORT: parseInt(process.env.MSSQL_PORT || 1433, 10)
  }
};

export default config;