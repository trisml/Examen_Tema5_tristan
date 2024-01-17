const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const informacion = document.getElementById("informacion");
const enviar = document.getElementById("enviar");
const errores = document.getElementById("mensajesError");
const formulario = document.getElementById("formulario");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");

let mensajesError = []

const validacion = evento => {
    evento.preventDefault()
    mensajesError = [];

    nombre.value.trim().length === 0 && mensajesError.push("El campo nombre no puede estar vacio")
    !/^[a-zA-Z]*$/.test(nombre.value.trim()) && mensajesError.push("Introduzca un nombre valido")

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesError.push("Introduzca un correo electronico valido")

    if(mensajesError.length === 0 && confirm("¿Estas seguro de enviar el formulario?")){
        formulario.submit()
    }else if(mensajesError.length > 0){
        errores.textContent = ""
        mensajesError.forEach(function(mensaje){
            const error = document.createElement("li")
            error.textContent = mensaje
            errores.appendChild(error)
        })
    }
}
informacion.addEventListener("click", validarRadio)
function validarRadio(){
if(info1.checked){
    alert("Enviaremos informacion adicional al correo indicado en el formulario")
}else{
    alert("Reserva completada. Enviaremos los billetes a tu correo electronico")
}
}



formulario.addEventListener('submit',validacion)