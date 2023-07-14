//creamos la app de Express
const express = require('express');

//configuración de la app express
const app = express();



//configuración de las rutas

app.get('/prueba', (req, res) => {

    //Hacemos acciones varias

    //RESPONDEMOS!!

    res.send('esto es una respuesta d prueba');
})

module.exports = app;