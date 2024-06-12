const express = require("express")
const path = require("path")
const conexion = require("../basededatos.js")
const rutas = express.Router()

rutas.post('/procesar-ventas', (req, res) => {
    const datosFormulario = req.body;
    console.log("llamado al archivo ventas")
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
  
rutas.get('/ventas', (req, res) => {
    console.log (path.join(__dirname, '../../frontend', 'ventas.html'))
    res.sendFile(path.join(__dirname, '../../frontend', 'ventas.html'));
  });
  


module.exports = rutas
