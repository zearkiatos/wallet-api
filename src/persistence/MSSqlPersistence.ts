import { ConnectionPool } from "mssql";
import config from "../config";
console.log(config.DATABASE?.PASSWORD);
const connection = new ConnectionPool({
  server: config.DATABASE?.HOST as string,
  database: config.DATABASE?.DATABASE as string,
  user: config.DATABASE?.USER as string,
  password: config.DATABASE?.PASSWORD as string,
  port: config.DATABASE?.PORT as number,
  options: {
    enableArithAbort: true,
    trustServerCertificate: true
  },
}).connect();

export default connection;
