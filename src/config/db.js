// requerir la libreria
const mysql = require('mysql2');

// TODO: mover los datos a .env
const pool = mysql.createPool({
    host: '127.0.0.1', //este es el local host
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'espacios_culturales',
});

//12 necesito que el pool este disponible desde cualquier punto de mi app. creo una variable glogal para toda la app
global.db = pool.promise(); //db es el nombre de mi variable