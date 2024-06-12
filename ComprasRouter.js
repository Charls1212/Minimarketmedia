const express = require("express")
const path = require("path")
const conexion = require("../basededatos.js")
const rutas = express.Router()

rutas.post('/procesar-compras', (req, res) => {
    const datosFormulario = req.body;
    console.log("llamado al archivo compras")
    console.log(datosFormulario);
        
      let TblProveedores_ProRut_Id=datosFormulario.rut;
      let ComNomProducto=datosFormulario.nombre; 
      let ComCodReferencia_Id=datosFormulario.codigo;
      let ComCantidad=datosFormulario.cantidad;	
      let ComPrecio=datosFormulario.precio;	
      
      
       let registrar = "INSERT INTO tblcompra ( TblProveedores_ProRut_Id, ComNomProducto, ComCodReferencia_Id, ComCantidad, ComPrecio) VALUES	('"+TblProveedores_ProRut_Id+"','"+ComNomProducto+"','"+ComCodReferencia_Id+"','"+ComCantidad+"','"+ComPrecio+"')"
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
  
rutas.get('/compras', (req, res) => {
    console.log (path.join(__dirname, '../../frontend', 'compras.html'))
    res.sendFile(path.join(__dirname, '../../frontend', 'compras.html'));
  });


module.exports = rutas
