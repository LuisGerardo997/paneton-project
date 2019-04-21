"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const Pool_pg = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'calderon',
    password: 'root',
    port: 5432,
});
exports.default = Pool_pg;
