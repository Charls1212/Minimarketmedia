const express = require("express");
const conexion = require("../basededatos.js")
const path = require("path")
const Registro = express.Router();


    
//  analizar datos JSON y urlencoded
Registro.use(express.json());
Registro.use(express.urlencoded({ extended: false }));
Registro.use(express.static(__dirname + '/../frontend'));

// Configurar el tipo MIME para archivos JavaScript

  

// Ruta para servir la página del formulario
Registro.get('/registro', (req, res) => {
  console.log (path.join(__dirname, '../../frontend', 'Registro.html'));
  res.sendFile(path.join(__dirname, '../../frontend', 'Registro.html'));
});
// Ruta para procesar los datos del formulario
Registro.post('/procesar-usuarios', (req, res) => {
  const datosFormulario = req.body;
  console.log(datosFormulario);
  
    let UsuCedula_Id =datosFormulario.cedula;	
    let UsuNombres=datosFormulario.nombres;	
    let UsuEmail=datosFormulario.email;	
    let UsuApellidos=datosFormulario.apellidos;	
    let UsuWassap=datosFormulario.wassapp;	
    let TblCiudad_CiuCli_Id=datosFormulario.ciudad;
    let UsuContrasena= datosFormulario.contrasena;	
    let UsuConContrasena=datosFormulario.concontrasena;	
    let UsuDireccion=datosFormulario.direccion;
    let UsuNacimiento=datosFormulario.fecha;
    
	 let registrar = "INSERT INTO tblusuario (UsuCedula_Id, UsuNombres, UsuEmail, UsuApellidos, UsuWassap, TblCiudad_CiuCli_Id, UsuContrasena, UsuConContrasena, UsuDireccion, UsuNacimiento  ) VALUES	('"+UsuCedula_Id+"','"+UsuNombres+"','"+UsuEmail+"','"+UsuApellidos+"','"+UsuWassap+"','"+TblCiudad_CiuCli_Id+"','"+UsuContrasena+"','"+UsuConContrasena+"', '"+UsuDireccion+"', '"+UsuNacimiento+"' )"
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


module.exports = Registro;