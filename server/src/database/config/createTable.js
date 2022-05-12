
//modulos
const mysql = require('mysql2');
const config = require('./config')
const {username, password, database, host, dialect} = {...config.development}
//
// creacion de nueva tabla
// crear conexion con db

//

const crearTablas = ()=>{
  
        const connection = mysql.createConnection({
            host,
            user:username,
            password,
            database
        });

        connection.connect((error)=>{!error ? console.log("Conexion Correcta") : console.log(error)});

            const sql1Experiencia = `CREATE TABLE Experiencia (
                id INT PRIMARY KEY AUTO_INCREMENT,
                Titulo VARCHAR(255) NOT NULL,
                Descripcion VARCHAR(255) NOT NULL,
                Imagen VARCHAR(255),
                SalaInteractiva VARCHAR(255))`;

           

            connection.query(sql1Experiencia, function (err, result) {
                if(!err){
                    console.log("creada tabla 1 Experiencia");
                }else{
                    if(err.code === 1050){
                        console.log(' ya existe tabla 1 Experiencia');
                    }
                }
            });

            
            connection.end();
}


module.exports={
     crearTablas
}