import * as dotenv from "dotenv";
import Config from "./Config";

dotenv.config();

const config: Config = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  PORT: parseInt(process.env.PORT || '3000', 10)
};

export default config;