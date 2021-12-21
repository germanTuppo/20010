/*Este archivo se va en cualquier momento, lo uso para no perder ciertas cosas que tengo hechas y que por momentos me quiero traer */


let opcion=100;
let opciones= "Selecciona lo que quieres hacer: \n1) Ingresar un número para ver si es primo. \n2) Ingresar un número y ver una lista de todos los numeros primos hasta dicho número. \n3) Ingresar un mes en formato numérico para verlo en formato texto y conocer la candidad de días posee. \n4) Descomponer un numero en sus factores primos \n0) Salir.\n";

/* Nota a Uciel: Las boludeces de la consola con los colores y eso las saqué de acá: https://blog.irontec.com/8-trucos-de-console/*/

while(opcion!=0){
    let numero;
    //let numeroB;

    console.log(opciones);//Solo para que se muestren las opciones en la consola
    opcion=parseInt(prompt(opciones));
    switch (opcion){
        case 0: {
            console.log("%cGracias por confiar en nosotros! Te vamos a extrañar\n\n\n","color:#000;font-size: 14px;background:#0f0;font-weight: bold;");
            break;
        }
        case 1: {
            numero=parseInt(prompt("Ingrese el número para saber si es primo"));
            if (esPrimo(numero)) console.log(`%cEl ${numero} es primo\n`,"color:#000;font-size: 16px;background:#0f0;font-weight: bold;"); else console.log(`%cEl ${numero} no es primo\n\n`,"color:#000;font-size: 14px;background:#0f0;font-weight: bold;");
            break;           
        }
        case 2: {
            numero=parseInt(prompt("Ingrese el número para conocer todos los números primos hasta ese número, no te zarpes pls!"));
            console.log(`%cLos numeros primos hasta el ${numero} son:\n${primosHasta(numero)}\n\n`,"color:#000;font-size: 14px;background:#0f0;font-weight: bold;");
            break;
        }
        case 3: {
            numero=parseInt(prompt("Ingrese un mes (en formato numérico) para conocer su nombre y la cantidad de dias que tiene."));
            console.log(`%cEl mes de ingresado es: ${mesTexto(numero)} y tiene ${mesDias(numero)} dias\n\n`,"color:#000;font-size: 14px;background:#0f0;font-weight: bold;");
            break;
        }
        case 4: {
            numero=parseInt(prompt("Ingrese el numero que quieres descomponer en factores primos:"));
            console.log (`%c los factores primos del número ${numero} son:\n${primosDivisores(numero)}\n\n`,"color:#000;font-size: 14px;background:#0f0;font-weight: bold;")
            break;
        }

        default: console.log("%cLa opción es incorrecta!. Ingresela nuevamente\n\n","color:#000;font-size: 14px;background:#0f0;font-weight: bold;");
    }
    

}










/*ingresar el nombre*/
let nombre=prompt("ingrese su nombre");

/*Inicializo el objeto persona*/
const persona = new PersonaMasTextos(nombre);

/*saludo Inicial*/
persona.saludoInicial();
persona.informacion();

/*Armar la matriz*/
let armarMatriz = [];

for(let i=0;i<=8;i++){
    armarMatriz [i] = parseInt(prompt("ingrese el siguiente valor de la matriz"));
}

/*Inicializar la clase matriz*/
const matriz = new Matriz(armarMatriz[0], armarMatriz[1], armarMatriz[2], armarMatriz[3], armarMatriz[4], armarMatriz[5], armarMatriz[6], armarMatriz[7], armarMatriz[8]);


persona.infoDatos();
matriz.mostrarDatos();









/* nombre="uciel"; */
/* pass=prompt("ingrese su contraseña"); */
/* console.log((usuarios.find(e => e.user===nombre)).nombre); */

/*Interactuo simple con el usuario de momento, por ultimisima vez con prompt*/
let opcion=0;
let opciones= "Selecciona lo que quieres hacer: \n1) Loguearte \n2) Ver usuarios \n3) ordenar por nombre (alfabeticamente)\n4) agregar usuario\n5) Salir.\n";

while(opcion!=5){

    console.log(opciones);//Solo para que se muestren las opciones en la consola
    opcion=parseInt(prompt(opciones));

    let nombre;
    let pass;

    switch (opcion){
        case 1: {
            console.log("\nLogearte\n");
            nombre="ger1985";
            pass=prompt("ingrese su contraseña");
                 if((usuarios.find(e => e.user===nombre)).user===nombre){
                    console.log("usuario encontrado")
                }
            break;
        }
        case 2: {
            console.log("\nVer usuarios\n");
            break;           
        }
        case 3: {
            console.log("\nOrdenar usuarios por nombre\n");
            break;
        }
        case 4: {
            console.log("\nAgregar usuario\n");
            break;
        }
        case 5: {
            console.log("\nSalir\n");
            break;
        }

        default: console.log("%cLa opción es incorrecta!. Ingresela nuevamente\n\n","color:#000;font-size: 14px;background:#0f0;font-weight: bold;");
    }
}


/* 
 class Matriz {
    constructor (matriz){
        this.matriz=matriz;
    }

    mostrarDatos() {
        console.log(`${this.matriz}\n`);
    }

}

const matrizAOperar = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matriz = new Matriz(matrizAOperar);


matriz.mostrarDatos(); */



// SignUp
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

});




/***************************************************************************************************************
 *     
 * OBJETOS------------------>
 * 
 ***************************************************************************************************************/

/*objeto donde pido datos y paso la información por consola*/
function PersonaMasTextos(nombre) {
    this.nombre=nombre;
    
    this.saludoInicial= function(){console.log(`Hola ${this.nombre} espero que estés bién!!!\n\n`)}
    this.informacion= function(){console.log(`Preparado para trabajar con matrices?, para continuar deberas ingresar los valores por filas de una matriz de 3 x 3 (no voy a validar esto porque la idea es hacerlo con el dom despues. INGRESA 9 NUMEROS:\n`)}
    this.infoDatos= function(){console.log(`La matriz ingresada es:\n`)}
}

/* clase matriz, contiene al constructor mas metodos */
/* class Matriz {
    constructor (a, b, c, d, e, f, g, h, i){

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.i = i;
    }

    mostrarDatos() {
        console.log(`${this.a} ${this.b} ${this.c}\n${this.d} ${this.e} ${this.f}\n${this.g} ${this.h} ${this.i}\n`);
    }

} */
