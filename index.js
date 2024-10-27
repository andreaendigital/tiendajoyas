const express = require("express"); // importamos express
const cors = require("cors"); // importamos cors
const app = express(); //Creamos una instancia de express

app.listen(3000, () => console.log("Servidor arriba en el puerto 3000 ;)"));

app.use(express.json()); //middleware

const morgan = require("morgan");
app.use(morgan("dev")); //morgan
app.use(cors()); //CORS

// Ruta para obtener joyas con paginación y orden
app.get("/joyas", async (req, res) => {
  try {
    const queryStrings = req.query;
    const joyas = await obtenerJoyas(queryStrings);
    res.json(joyas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener joyas filtradas

app.get("/joyas/filtros", async (req, res) => {
    try {
      const queryStrings = req.query;
      const joyas = await obtenerJoyasPorFiltros(queryStrings);
      res.json(joyas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });