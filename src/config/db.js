// requerir la libreria
const mysql = require('mysql2');

// TODO: mover los datos a .env
const pool = mysql.createPool({
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSDB,
    port: process.env.PORTDB,
    database: process.env.espacios_culturales,
});

//12 necesito que el pool este disponible desde cualquier punto de mi app. creo una variable glogal para toda la app
global.db = pool.promise(); //db es el nombre de mi variable