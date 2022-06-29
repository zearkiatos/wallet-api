import { ConnectionPool } from "mssql";
import config from "../config";

const connection = new ConnectionPool({
  server: config.DATABASE?.HOST as string,
  database: config.DATABASE?.DATABASE as string,
  user: config.DATABASE?.USER as string,
  password: config.DATABASE?.PASSWORD as string,
  options: {
    enableArithAbort: true,
  },
}).connect();

export default connection;
