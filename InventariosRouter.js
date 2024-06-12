const express = require("express")
const path = require("path")
const conexion = require("../basededatos.js")
let rutas = express.Router()

rutas.post('/procesar-inventarios', (req, res) => {
    const datosFormulario = req.body;
    console.log("llamado al archivo inventarios")
    console.log(datosFormulario);
        

  let InvCodProducto_Id =datosFormulario.codigo;	
  let InvDescriproducto =datosFormulario.descripcion;	
  let InvNomProducto =datosFormulario.nombre;	
  let InvfechaConsulta =datosFormulario.peso;	
  let InvEstadoProducto=datosFormulario.comision;	
  let InvDescuento =datosFormulario.unidad;
  let InvCanEntradas =datosFormulario.venta;	
  let InvCanSalidas =datosFormulario.exentoIva;	
  let InvPrecioUnitario =datosFormulario.categoria;	
  let InvExisTotales=datosFormulario.cantidad;
  
  		
    
	 let registrar = "INSERT INTO tblinventario (InvCodProducto_Id,nvDescriproducto,InvNomProducto, InvfechaConsulta,InvEstadoProducto, InvDescuento,nvCanEntradas,InvCanSalidas,InvPrecioUnitario, vExisTotales) VALUES	('"+InvCodProducto_Id+"','"+InvDescriproducto+"','"+InvNomProducto+"','"+InvfechaConsulta+"','"+InvEstadoProducto+"','"+InvDescuento+"','"+InvCanEntradas+"','"+InvCanSalidas+"', '"+nvPrecioUnitario+"', '"+InvPrecioUnitario+"','"+InvExisTotales+"')"
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

rutas.get('/inventarios', (req, res) => {
console.log (path.join(__dirname, '../../frontend', 'inventarios.html'))
res.sendFile(path.join(__dirname, '../../frontend', 'inventarios.html'));
});


module.exports = rutas

   