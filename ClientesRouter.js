const express = require("express")
const path = require("path")
const conexion = require("../basededatos.js")
let rutas = express.Router()

rutas.post('/procesar-clientes', (req, res) => {
    const datosFormulario = req.body;
    console.log("llamado al archivo clientes")
    console.log(datosFormulario);
        
      let CliApellidos_Id=datosFormulario.apellidos;
      let Clinombres =datosFormulario.nombres;	
      let Cliemail=datosFormulario.email;	
      let Cliciudad =datosFormulario.ciudad;	
      let CLiwhatsApp=datosFormulario.WhatsApp;
      let Clipago =datosFormulario.pago;	
      
       
	 let registrar = "INSERT INTO tblcliente (CliApellidos_Id,Clinombres,Cliemail, Cliciudad,CLiwhatsApp,Clipago) VALUES	('"+CliApellidos_Id+"','"+Clinombres+"','"+Cliemail+"','"+Cliciudad+"','"+CLiwhatsApp+"','"+Clipago+"')"
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

rutas.get('/clientes', (req, res) => {
console.log (path.join(__dirname, '../../frontend', 'clientes.html'))
res.sendFile(path.join(__dirname, '../../frontend', 'clientes.html'));
});


module.exports = rutas

   