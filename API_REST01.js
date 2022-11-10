var express = require('express');
var app = express();
app.use(express.json()); // Recibir información en formato JSON
app.use(express.urlencoded()); // Información proviene de una URL
const ruta = require('path'); // Para obtener el directorio del servidor en forma automática.

var persona = {
    nombre: "",
    apellido: "",
    id: ""
};

//  1. Se va a mostrar al cliente un menú para: consultar, registrar y eleminar un registro de datos.

app.get('/', (req,res) => {  //Permite recibir peticiones y dar respuestas al cliente
    res.sendFile(ruta.join(__dirname + '/html/index.html'));
});

app.get('/CrearEntrada',(req,res)=> {
    res.sendFile(ruta.join(__dirname + '/html/CrearEntrada.html'));
});

app.get('/ConsultarDatos', (req,res) => { 
    if (persona.nombre !== '' && persona.apellido !== '' && persona.id !== '') {
        res.json(persona);
    }
    else {
        res.send("No hay registros que mostrar");
    }
    
});

app.get('/EliminarDatos', (req,res) => { 
    persona.nombre = '';
    persona.apellido = '';
    persona.id = '';
    res.sendFile(ruta.join(__dirname + '/html/index.html'));

});

app.post('/EnvioDeDatos', (req,res) => {
    persona.nombre = req.body.nombre;
    persona.apellido = req.body.apellido;
    persona.id = req.body.id;
    res.sendFile(ruta.join(__dirname + '/html/index.html'));

});


app.listen(8000, () => { 
    console.log ("El servidor está trabajando por el puerto 8000")
});