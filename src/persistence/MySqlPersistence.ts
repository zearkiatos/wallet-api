import { createPool } from 'mysql2/promise';
import config from '../config';

const connection = createPool({
    host: config.DATABASE?.HOST,
    user: config.DATABASE?.USER
});