var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Bienvenido a la API de la empresa');
});

app.get('/clientes', function (req, res) {
  res.json([
    { id: 1, nombre: 'Cliente Uno' },
    { id: 2, nombre: 'Cliente Dos' },
    { id: 3, nombre: 'Cliente Tres' }
  ]);
});

app.get('/productos', function (req, res) {
  res.json([
    { id: 1, nombre: 'Producto A', precio: 10 },
    { id: 2, nombre: 'Producto B', precio: 20 },
    { id: 3, nombre: 'Producto C', precio: 30 }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});
