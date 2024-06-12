const formDetalle = Document.getElementById("formDetalle");
const InputCantidad = Document.getElementById("inputCantidad");
const selectDescripcion = Document.getElementById("selectDescripcion");
const InputPrecioUnitario = Document.getElementById("selectDescripcion");
const InputSinIva = Document.getElementById("selectDescripcion");
const InputIva = Document.getElementById("selectDescripcion");
const InputSubTotal = Document.getElementById("selectDescripcion");

let arregloDetalle = [];
const redibujarTabla =()=>{
    arregloDetalle.forEach((detalle)=>{

        let fila = document.createElement("tr");
        fila.innerHTML =  <td>${detalle.cant}</td>
                          <td>${detalle.descripcion}</td>
                          <td>${detalle.pUnitario}</td>
                          <td>${detalle.sinIva}</td>
                          <td>${detalle.iva}</td>
                          <td>${detalle.sTotal}</td>;
let tdeliminar = document.createElement("td");

})

}



formDetalle.onsubmit = (e) => {
    e.preventDefault ();
//creando el objeto de detalle
const objDetalle = {
    cant: InputCantidad.value,
    descripcion:selectDescripcion.value,
    pUnitario:InputPrecioUnitario.value,
    sinIva:InputSinIva.value,
    iva:InputIva.value,
    sTotal:InputSubTotal.value,
};
arregloDetalle.push(objDetalle);
redibujarTabla();

};

