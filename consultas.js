//Usar el paquete pg para conectarse e interactuar con la base de datos.
const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "3434",
  database: "joyas",
  allowExitOnIdle: true,
});