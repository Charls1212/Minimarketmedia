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


compilado.listen(4007, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", "http://localhost:4007/");
})