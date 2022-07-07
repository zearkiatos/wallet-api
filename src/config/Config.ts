import MSSql from './MSSql';
import MySql from './MySql';
interface Config {
    APP_ENV: string | undefined,
    ENVIRONMENT: string | undefined;
    PORT: number | undefined;
    DATABASE: MySql | MSSql | undefined;
    JWT_SECRET_KEY: string

  }
  
  export default Config;