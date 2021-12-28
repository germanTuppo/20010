/*mostrar usuarios en el index. VUELA EN ALGUN MOMENTO*/
const listaUsuarios = document.querySelector("#listaUsuarios");

/*CREO UN ARRAY DE OBJETOS, despues estará en el JSON o en firebase*/
const inicializar = [];
inicializar[0] = new Usuario (1, "ger1985", "1234", "German", "Tuppo","36", "1167431242", "germantuppo@gmail.com" );
inicializar[1] = new Usuario (2, "uciel", atob("asd123"), "Uciel", "Sola","0", "1111111111", "ucielsola@gmail.com" );
inicializar[2] = new Usuario (3, "juan123", "qwerty", "Juan", "Perez","0", "1122334455", "Juanperez@gmail.com" );
inicializar[3] = new Usuario (4, "floyd86", "asd123", "Roger", "Waters","0", "1133221100", "waters69@gmail.com" );

// Recuperamos array del localStorage. Si localStorage está vacío, la variable se inicializa con inicializar
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || actualizarLocalStorage(inicializar);
usuarios = JSON.parse(localStorage.getItem("usuarios")) || actualizarLocalStorage(inicializar);
console.log(usuarios);

// Si el array ya contiene usuarios, los imprimimos al HTML (usuarios registrados)
if (usuarios.length) {
	imprimirUsuarios(usuarios);
}

/* Mostrar usuarios activos en el index (seguridad a marzo) */
function imprimirUsuarios(array) {
	listaUsuarios.innerHTML = "";
	array.forEach((usuario) => {
		const cardUsuario = `<div class="card col-12 col-md-6 col-xl-4 p-2">
                                <img src="media/no-disponible.png" class="card-img-top" alt="Imagen no disponible">
                                <div class="card-body">
                                    <h5 class="card-title">Id de usuario: ${usuario.id}</h5>
                                </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Usuario: ${usuario.user}</li>
                                        <li class="list-group-item">Contraseña: ${usuario.password}</li>
                                        <li class="list-group-item">Nombre: ${usuario.nombre}</li>
                                        <li class="list-group-item">Apellido: ${usuario.apellido}</li>
                                        <li class="list-group-item">Edad: ${usuario.edad}</li>
                                        <li class="list-group-item">Mail: ${usuario.mail}</li>
                                        <li class="list-group-item">Telefono: ${usuario.telefono}</li>
                                    </ul>
                            </div>
        `;
		listaUsuarios.innerHTML += cardUsuario;
	});
}


// funciones para actualizar localStorage
/*USUARIOS*/
function actualizarLocalStorage(array) {
    console.log("actualizando local storage")
	localStorage.setItem("usuarios", JSON.stringify(array));
}

/*Funcion para registrar usuarios*/
function registrarUsuario(){
    let id=usuarios.length+1;
    usuarios.push(
		new Usuario(
			id,
			registroInputUser.value,
			registroInputPass.value,
			registroInputNombre.value,
			registroInputApellido.value,
            registroInputEdad.value,
            registroInputMail.value,
            registroInputTelefono.value
            // loginRecibirInfo.value
		)
	);
    actualizarLocalStorage(usuarios);
    imprimirUsuarios(usuarios);
    
}