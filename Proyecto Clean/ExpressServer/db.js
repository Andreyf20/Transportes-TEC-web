const Pool = require("pg").Pool;

const pool = new Pool({
    user:"xglcmouehclolk",
    password: "d7d58ca66300358bfb85d2d621e69ec845e2d0a397475c10ae77c929376d0c3a",
    database: "d1bb350hb40suo",
    port: 5432,
    host: "ec2-100-25-100-81.compute-1.amazonaws.com",
    ssl: { rejectUnauthorized: false }
});

//Solution to: Error acquiring client Error: self signed certificate
// => https://stackoverflow.com/a/61125814

module.exports = pool;

