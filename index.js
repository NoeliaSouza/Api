//Llamamos a conexión
const mySql=require("./conexion");
const express=require('express');
const app=express();
app.use(express.json());

//Consultar estudiante
app.get("/estudiantes/:Legajo", (pedido, respuesta)=>{
    mySql.connection.query("Select * from estudiantes where legajo=" + pedido.params.Legajo, function(error, resultado){
       if(error){
        throw error;
       }
       else{
        respuesta.send(resultado);
       }
    });
});

//Insertar estudiante
app.post("/estudiantes/create", (pedido,respuesta)=>{
    mySql.connection.query('Insert into estudiantes (nombre, email) values ("' + pedido.body.Nombre + '","'+ pedido.body.Email+ '" )', function(error, resultado){
        if(error){
            throw error;
        }
        else{
            respuesta.send('Estudiante registrado, Id: '+ resultado.insertId);
        }
    });
})

//Insertar nota
app.post("/notas/create", (pedido,respuesta)=>{
    mySql.connection.query('Insert into notas (nota, fecha, legajo, codigoCurso) values ("' + pedido.body.Nota + '","'+ pedido.body.Fecha+ '", "'+ pedido.body.Legajo +'" ,"' + pedido.body.CodigoCurso
    + '")', function(error, resultado){
        if(error){
            throw error;
        }
        else{
            respuesta.send('Nota registrada, Nota: '+ resultado.insertNota);
        }
    });
})

//Actualizar nota
app.put("/notas/:id/update", (pedido,respuesta)=>{
    mySql.connection.query('Update notas set nota where id= "'+ pedido.params.id + '")', function(error, resultado){
        if(error){
            throw error;
        }
        else{
            respuesta.send('Nota actualizada, Nota: '+ resultado.updatetNota);
        }
    });
})


//Eliminar nota
app.put("/notas/:id/delete", (pedido,respuesta)=>{
    mySql.connection.query('Delete from notas where id= "'+ pedido.params.id + '")', function(error, resultado){
        if(error){
            throw error;
        }
        else{
            respuesta.send('Nota eliminada, Nota: '+ resultado.updatetNota);
        }
    });
})


//Recibir notas aprobadas
app.get("/notas/:codigo/aprobados", (pedido, respuesta)=>{
    mySql.connection.query('Select * from notas where codigoCurso ="' + pedido.params.codigo + '" and nota >=6' , function(error, resultado){
       if(error){
        throw error;
       }
       else{
        respuesta.send(resultado);
       }
    });
});


app.listen(3000, ()=>{
    console.log("Servidor en linea.");
})


