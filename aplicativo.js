const express = require("express")
const compilado = express();
compilado.use(express.json());
compilado.use(express.urlencoded({ extended: false }));




const rutasderegistro = require("./routes/RegistroRouter");
const rutasdeventas = require("./routes/VentasRouter");
const rutasdecompras = require("./routes/ComprasRouter");
const rutasdeclientes = require("./routes/ClientesRouter");
const rutasdeinventarios = require("./routes/InventariosRouter");
const rutasdeproductos = require("./routes/ProductosRouter");
const rutasdeproveedores = require("./routes/ProveedoresRouter");



compilado.use(rutasderegistro)
compilado.use(rutasdeventas)
compilado.use(rutasdecompras)
compilado.use(rutasdeclientes)
compilado.use(rutasdeinventarios)
compilado.use(rutasdeproductos)
compilado.use(rutasdeproveedores)

// Configurar EJS para motor de plantillas
app.set('view engine', 'ejs');

// Configurar body-parser para manejo de datos POST
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta GET para mvisualizar el formulario de ventas
app.get('/sales', (req, res) => {
    res.render('sales');
});

// Ruta POST para procesar el formulario de ventas
app.post('/sales', (req, res) => {
    const { nombreProducto, codigoReferencia, cantidad, precio } = req.body;
    res.send(`Producto: ${nombreProducto}, Código: ${codigoReferencia}, Cantidad: ${cantidad}, Precio: ${precio}`);
});

// Servidor estático para CSS
app.use(express.static('public'));

compilado.listen(4007, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", "http://localhost:4007/");
})