require('dotenv').config();
const {Pool} = require('pg');
const config = require('./config');


const pool = new Pool({
  host: config.host,
  port: config.dbPort,
  user: config.user,
  password: config.password,
  database: config.database,
  max: config.maxPoolSize,
  idleTimeoutMillis: config.idleTimeOutMillis,
  connectionTimeoutMillis: config.connectionTimeoutMillis,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
})

module.exports = pool;