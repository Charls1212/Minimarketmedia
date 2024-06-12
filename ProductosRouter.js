const express = require("express")
const path = require("path")
const conexion = require("../basededatos.js")
const rutas = express.Router()

rutas.post('/procesar-productos', (req, res) => {
    const datosFormulario = req.body;
    console.log("llamado al archivo productos")
    console.log(datosFormulario);
        
      let VenNomProducto=datosFormulario.nombre;
      let VenCodReferencia_Id=datosFormulario.codigo;	
      let VenCantidad=datosFormulario.cantidad;	
      let VenPrecio=datosFormulario.precio;	
      
      
       let registrar = "INSERT INTO tblventa ( VenCodRefencia_Id, VenNomProducto, VenCantidad, VenPrecio) VALUES	('"+VenCodReferencia_Id+"','"+VenNomProducto+"','"+VenCantidad+"','"+VenPrecio+"')"
      conexion.query(registrar, function (err, result) {
  
          if (err){
              
              throw err;
          
          }
          else {
              console.log("datos registrados con exito");
          }
  
      });
    // guardarlos en una base de datos
    res.send('Datos recibidos con éxito');
  });
  
rutas.get('/productos', (req, res) => {
    console.log (path.join(__dirname, '../../frontend', 'productos.html'))
    res.sendFile(path.join(__dirname, '../../frontend', 'productos.html'));
  });
  


module.exports = rutas
