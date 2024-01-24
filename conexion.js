//Conexion a BD
const mysql= require ('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'bduniversidad'
});

connection.connect(function (error){
    if(error) throw error;
    console.log('Conexión exitosa a la base de datos');
});

module.exports={connection};