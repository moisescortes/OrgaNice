const express = required("express");
const bodyParser = require('body-parser');

const Port = 5000;

const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'organice'
});
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
    console.log('Conectado a la base de datos MySQL');
});