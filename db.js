const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "tasks",
    password: "712377",
    port: 5432
});

module.exports = pool;

