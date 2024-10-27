const express = require("express"); // importamos express
const cors = require("cors"); // importamos cors
const app = express(); //Creamos una instancia de express

app.listen(3000, () => console.log("Servidor arriba en el puerto 3000 ;)"));

app.use(express.json()); //middleware