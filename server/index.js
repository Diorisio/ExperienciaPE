/*modulos */
const express = require('express');
const app = express();


const experienciaRouter= require ("./src/router/experienciaRouter")
const {crearDB} = require('./src/database/config/conect');

crearDB()
app.use(express.json());



const puerto = process.env.PORT || 3030
app.listen(puerto, () => { console.log('Servidor corriendo en el puerto '  + puerto);});

app.use('/api',experienciaRouter)

module.exports = app;

