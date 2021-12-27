/***************************************************************************************************************
 *     
 * DOM + PRUEBAS CON FIREBASE + PRUEBAS CON EVENTOS (LO SE ME ESTOY SPOILEANDO PERO ME PROMETÍ NO MAS PROMPT)
 * (UCIEL NO PUDE ESTAR EN EL AFTER, PERO VI LA GRABACIÓN SOS MUY DIDACTICO. TE VOY A ROBAR MIL COSAS EHHH)
 * 
 ***************************************************************************************************************/

// Accedemos a los elementos del DOM con sus IDs Acá me siento un ladrón, pero me parecio muy ordenado como lo hiciste en el after

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

/*mostrar usuarios en el index. VUELA EN ALGUN MOMENTO*/
const listaUsuarios = document.querySelector("#listaUsuarios");

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

/*CREO UN ARRAY DE OBJETOS, despues estará en el JSON o en firebase*/
const inicializar = [];
inicializar[0] = new Usuario (1, "ger1985", "1234", "German", "Tuppo","36", "1167431242", "germantuppo@gmail.com" );
inicializar[1] = new Usuario (2, "uciel", "12345", "Uciel", "Sola","0", "1111111111", "ucielsola@gmail.com" );
inicializar[2] = new Usuario (3, "juan123", "qwerty", "Juan", "Perez","0", "1122334455", "Juanperez@gmail.com" );
inicializar[3] = new Usuario (4, "floyd86", "asd123", "Roger", "Waters","0", "1133221100", "waters69@gmail.com" );

/*Recupero el usuario logueado del localStorage, si no existe creo un arreglo vacio*/
let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado")) || [];
console.log (usuarioLogueado);

// Recuperamos array del localStorage. Si localStorage está vacío, la variable se inicializa con inicializar
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || actualizarLocalStorage(inicializar);
console.log(usuarios);

// Si el array ya contiene usuarios, los imprimimos al HTML (usuarios registrados)
if (usuarios.length) {
	imprimirUsuarios(usuarios);
}


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

/*LOGUEO*/
function actualizarLogueoLocalStorage(array) {
	localStorage.setItem("usuarioLogueado", JSON.stringify(array));
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



/***************************************************************************************************************
 *     
 * Separo un poco esto que corresponde a los desafíos anteriores.
 * 
 * FUNCIONES
 * 
 ***************************************************************************************************************/

/*Regresa 1 si el número ingregado es primo (Es decir tiene exactamente dos divisores),0 si no lo es o -1 en caso de 0, negativo o con coma*/
function esPrimo(numero){
    
    if(numero<1 || numero%1 != 0){
        return -1;
    }
        else if(numero==1){
            return 0;
        }
            else {
                for(let i=2;i<numero;i++){
                    if (numero%i == 0) return 0;
                }
                return 1;
            }
}

/*Devuelve una cadena, separada por comas, de los numeros primos hasta cierto valor (enteros positivos) o -1 en caso de error*/
function primosHasta (numero){
    
    let cadena="";
    if(numero<1 || numero%1 != 0){
        return -1;
    } 
    else {
        for(let i=1;i<numero;i++){
            if (esPrimo(i)){ 
                cadena=`${cadena} ${i}, `;
            }
        }
        /*Esto lo hago para eliminar la última coma, lo saqué de aca: https://www.delftstack.com/es/howto/javascript/remove-last-character-from-javascript/#utilice-el-m%C3%A9todo-slice-para-eliminar-el-%C3%BAltimo-car%C3%A1cter-de-una-cadena-de-javascript */
        cadena=cadena.slice(0, -1);
        cadena=cadena.slice(0, -1);
        return cadena;
    }    
}
/*Ya que estamos con el algebra jajaj, me gustaría hacer:
    --> Algo que calcule todos los divisores de un número
    --> Alguna funcion que calcule el mcd y otra para el mcm
    --> cuando veamos arrays trabajar con matrices (suma resta multiplicacion division determinantes resolucion de un sistema de m ecuaciones con m incognitas.
        
        Me pongo con ello!!!*/

/*Muestra cuantas veces es un número divisor de otro */
function multiplicidadDivisor(num, divisor){
    
    let aux=0;
    let cociente;

    if(num%1!==0 || divisor==1){//por las dudas que el que el usuario ponga 1 como divisor y se pudra todo (me pasó)
        return -1;
    } else
        if (num%divisor!=0){
            return 0;
        }
            else {
                cociente=num;
                while (cociente%divisor==0){
                    aux++;
                    cociente=cociente/divisor;
                }
                return aux;
            }
}

/* Muestra todos los factores primos de un numero y su multiplicidad */
function primosDivisores(numero){
    /*EN PROCESO! Debería mostrar todos los factores primos de un número y la multiplicidad:
        
            1) recorrer los numeros hasta el primo que elevado al cuadrado sea mayor que el número (ver esto)
            2) evaluar si un primo encontrado es divisor
            3) ver la multiplicidad
            */
    let resultado=""; 
            
    if (numero%1 != 0){
        return "El numero no tiene factores, ingrese un número entero";
    } else {
        for(let i=2; i<numero; i++){
            if (esPrimo(i) && multiplicidadDivisor(numero, i)>0){
                resultado=`${resultado} ${i} es divisor de multiplicidad ${multiplicidadDivisor(numero, i)}\n`
            }
        }
        return resultado;
    }

}


/*HASTA ACÁ LLEGO DE MOMENTO, NECESITO ARREGLOS DE ACA EN ADELANTE */
function divisores (numA, numB){
    /*EN PROCESO! calcular el minimo común multiplo de los dos numeros */
}

function mcm (numA, numB){
    /*EN PROCESO! calcular el minimo común multiplo de los dos numeros */
}

function mcd (numA, numB){
    /*EN PROCESO! calcular el maximo común divisor de los dos numeros */
}

function sumaMatrices(matrizA, matrizB) {
    /*EN PROCESO! calcular la suma de dos matrices*/
}

function restaMatrices(matrizA, matrizB) {
    /*EN PROCESO! calcular la resta de dos matrices*/
}

function productoMatrices(matrizA, matrizB) {
    /*EN PROCESO! calcular el producto de dos matrices*/
}

function inversaMatriz(matrizA) {
    /*EN PROCESO! calcular la inversa de una matriz*/
}

function determinante(matrizA) {
    /*EN PROCESO! calcular el determinante de una matriz*/
}

function resolverSistema(matrizA) {
    /*EN PROCESO! resolver un sistema de ecuaciones con n incognitas*/
}




/*de aca había arrancado para desafios anteriores, pero lo "refactorice" para que tenga mas sentido a lo que ya estuvimos viendo!*/
function mesDias(mes){
    /*Función que indica dado un mes la cantidad de dias que posee*/
    switch(parseInt(mes)){
        case 1:
            return 31;
        case 2:
            return 29;
        case 3: 
            return 31;
        case 4: 
            return 30;
        case 5: 
            return 31;
        case 6: 
            return 30;
        case 7: 
            return 31;
        case 8: 
            return 31;
        case 9: 
            return 30;
        case 10: 
            return 31;
        case 11: 
            return 30;
        case 12: 
            return 31;
    }
}

function mesTexto(mes){
    /*Función que indica dado un mes (en formato numérico) su nombre en formato texto*/
    switch(parseInt(mes)){
        case 1:
            return "Enero";            
        case 2:
            return "Febrero";           
        case 3: 
            return "Marzo";           
        case 4: 
            return "Abril";          
        case 5: 
            return "Mayo";           
        case 6: 
            return "Junio";          
        case 7: 
            return "Julio";            
        case 8: 
            return "Agosto";            
        case 9: 
            return "Septiembre";           
        case 10: 
            return "Octubre";            
        case 11: 
            return "Noviembre";           
        case 12: 
            return "Diciembre";           
    }
}