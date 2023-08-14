//creamos la app de Express
const express = require("express");
const dayjs = require("dayjs");
const cors = require("cors");

//configuración de la app express
const app = express();

app.use(express.json()); //para que express pueda parsearlo y meterlo en el body en formato json
app.use(cors());

//Middlewares
app.use((req, res, next) => {
  // nos da la fecha y hora en la que se ha hecho la petición
  const fechaActual = dayjs().format("DD-MM-YYYY HH:mm:ss");
  console.log(fechaActual);
  next();
});

//configuración de las rutas
app.get("/prueba", (req, res) => {
  //Hacemos acciones varias

  //RESPONDEMOS!!
  res.send("esto es una respuesta d prueba");
});

// RUTAS
app.use("/api", require("./routes/api"));

module.exports = app;
