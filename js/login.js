/***************************************************************************************************************
 *     
 * Logueo y registro de USUARIOS.
 * 
 ***************************************************************************************************************/

/*Inputs registro*/
const registroInputUser = document.querySelector("#registroInputUser");
const registroInputPass = document.querySelector("#registroInputPass");
const registroInputNombre = document.querySelector("#registroInputNombre");
const registroInputApellido = document.querySelector("#registroInputApellido");
const registroInputEdad = document.querySelector("#registroInputEdad");
const registroInputTelefono = document.querySelector("#registroInputTelefono");
const registroInputMail = document.querySelector("#registroInputMail");
const registroRecibirInfo = document.querySelector("#registroRecibirInfo");

/*Inputs login*/
const loginInputUserOrMail = document.querySelector("#loginInputUserOrMail");
const loginPassword = document.querySelector("#loginPassword");

/*  */
const botonesNavegacion = document.querySelector("#botonesNavegacion");



/*Constructor de los usuarios (conviene una clase?)*/
function Usuario(id, user, password, nombre, apellido, edad, telefono, mail){
    this.id=id;
    this.user=user;
    this.password=password;
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.telefono=telefono;
    this.mail=mail;
}


/*Recupero el usuario logueado del localStorage, si no existe creo un arreglo vacio*/
let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado")) || [];
console.log (usuarioLogueado);


verificarLogin();
// Si el usuario está logueado, muestro un boton salir en el menú, si no lo está muestro los botones ingresar y registrar

function verificarLogin(){

    if (usuarioLogueado.length) {
        console.log("Usuario logueado");
        let logueado = '';
        logueado += '<img src="media/no-disponible.png" class="imgPerfil">';
        logueado += '<button type="button" class="btn btn-danger" onclick="desloguearUsuario()">Salir</button>';
        botonesNavegacion.innerHTML = logueado;
    } else
        {
            console.log("Usuario deslogueado");
            let deslogueado = '';
            deslogueado+='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Ingresar</button>'; 
            deslogueado+='<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#registroModal">Registrarse</button>';
            botonesNavegacion.innerHTML = deslogueado;
        }
}


/*LOGUEO*/
function actualizarLogueoLocalStorage(array) {
	localStorage.setItem("usuarioLogueado", JSON.stringify(array));
}


/*Funcion para loguearse, funciona bien, pero la tengo que reformular para que no se almacenen todos los datos en localStorage*/
function loginUsuario(){
    usuarioEncontrado=[];
    usuarioEncontrado.push (usuarios.find( ({ password }) => password === loginPassword.value ));
    if(usuarioEncontrado[0].mail === loginInputUserOrMail.value || usuarioEncontrado[0].user === loginInputUserOrMail.value){
        actualizarLogueoLocalStorage(usuarioEncontrado); 
        verificarLogin();
    } else {
        console.log("Alguno de los datos es incorrecto")
    }
    

}

/*Funcion para desloguearse*/
function desloguearUsuario(){
    usuarioLogueado=[];
    actualizarLogueoLocalStorage(usuarioLogueado);
    verificarLogin();
}

