import { Pool } from 'pg';

const Pool_pg = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'calderon',
    password: 'root',
    port: 5432,
});

export default Pool_pg;