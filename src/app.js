//creamos la app de Express
const express = require("express");

//configuración de la app express
const app = express();

app.use(express.json()); //para que express pueda parsearlo y meterlo en el body en formato json

//configuración de las rutas

app.get("/prueba", (req, res) => {
  //Hacemos acciones varias

  //RESPONDEMOS!!

  res.send("esto es una respuesta d prueba");
});

// RUTAS
app.use("/api", require("./routes/api"));

module.exports = app;
