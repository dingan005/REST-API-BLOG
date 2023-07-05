const Pool = require("pg").Pool;


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "blogs",
    password: "test",
    port: 5432,

});



module.exports = Pool;