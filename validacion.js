const formulario = document.querySelector(".formulario")
const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const data = {
    nombre : "",
    email : "",
    mensaje : ""
}
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validarForm();
});
function leerTexto(e){
    data[e.target.id] = e.target.value;
}
function validarForm() {
    const {nombre,email,mensaje} = data;
    if(nombre === "" || email === "" || mensaje === ""){
        alerta("Todos los campos son obligatorios",'error');
    }else{
        alerta("Mensaje enviado correctamente");
        }
}
function alerta(mensaje,error=null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add("error"); 
    }else{
        alerta.classList.add("mensajeEnviado"); 
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}