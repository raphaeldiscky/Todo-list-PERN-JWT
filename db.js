// connect server with db
const Pool = require('pg').Pool;
require('dotenv').config();

const devConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
};

const proConfig = {
  connectionString: process.env.DATABASE_URL // from heroku addons
};

const pool = new Pool(
  process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

module.exports = pool;
