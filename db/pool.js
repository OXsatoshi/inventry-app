const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "nabil",
  database: "music_inventry",
  password: "ba062358",
  port: 5432,
});
