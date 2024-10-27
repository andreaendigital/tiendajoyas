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

const obtenerJoyas = async ({ limits = 6, order_by = "id_ASC", page = 1 }) => {
    const [columna, orden] = order_by.split("_");
    const offset = (page - 1) * limits;
  
    // Validación de columnas y órdenes permitidas
    const columnasPermitidas = [
      "id",
      "nombre",
      "categoria",
      "metal",
      "precio",
      "stock",
    ];
    const ordenesPermitidas = ["ASC", "DESC"];
  
    if (
      !columnasPermitidas.includes(columna) ||
      !ordenesPermitidas.includes(orden)
    ) {
      throw new Error("Parámetro order_by no válido");
      }

        // Consulta para obtener las joyas según el orden y paginación
  const consulta = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    columna,
    orden,
    limits,
    offset
  );

  const { rows: joyas } = await pool.query(consulta);

    // Calcular el stock total dinámicamente
    const stockTotal = joyas.reduce((total, joya) => total + joya.stock, 0);

    // Construir la estructura HATEOS
    const joyasConLinks = joyas.map((joya) => ({
      name: joya.nombre,
      href: `/joyas/joya/${joya.id}`,
    }));
  
    return {
      total: joyas.length,
      stockTotal, // Aquí agregamos el stock total dinámico
      results: joyasConLinks,
    };
  };


  const obtenerJoyasPorFiltros = async ({
    precio_max,
    precio_min,
    categoria,
    metal,
  }) => {
    let filtros = [];
    const values = [];
  
    const agregarFiltro = (campo, comparador, valor) => {
      values.push(valor);
      const { length } = filtros;
      filtros.push(`${campo} ${comparador} $${length + 1}`);
    };
  
    if (precio_max) agregarFiltro("precio", "<=", precio_max);
    if (precio_min) agregarFiltro("precio", ">=", precio_min);
    if (categoria) agregarFiltro("categoria", "=", categoria);
    if (metal) agregarFiltro("metal", "=", metal);
  
    let consulta = "SELECT * FROM inventario";
    if (filtros.length > 0) {
      consulta += ` WHERE ${filtros.join(" AND ")}`;
    }
  
    const { rows: joyas } = await pool.query(consulta, values);
    return { total: joyas.length, results: joyas };
  };
  
  module.exports = { obtenerJoyas, obtenerJoyasPorFiltros };

  module.exports = { obtenerJoyas };