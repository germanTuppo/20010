let opcion=-1;
let opciones= "Selecciona lo que quieres hacer: \n1) Ingresar un número para ver si es primo. \n2) Ingresar un número y ver una lista de todos los numeros primos hasta dicho número. \n0) Salir.\n";
 //console.log(primosHasta(100));
while(opcion!=0){
    let numero;

    console.log(opciones);//Solo para que se muestren las opciones en la consola
    opcion=parseInt(prompt(opciones));
    switch (opcion){
        case 1: {
            numero=parseInt(prompt("Ingrese el número para saber si es primo"));
            if (esPrimo(numero)) console.log(`El ${numero} es primo\n`); else console.log(`El ${numero} no es primo\n\n`);
            break;           
        }
        case 2: {
            numero=parseInt(prompt("Ingrese el número para conocer todos los números primos hasta ese número, no te zarpes pls!"));
            console.log(`Los numeros primos hasta el ${numero} son:\n${primosHasta(numero)}\n\n`);
            break;
        }

        default: console.log("La opción es incorrecta!. Ingresela nuevamente");
    }
    

}



function esPrimo(numero){
    /*Regresa 1 si el número ingregado es primo (Es decir tiene exactamente dos divisores),
      0 si no lo es o -1 en caso de 0, negativo o con coma*/
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

function primosHasta (numero){
    /*Devuelve una cadena, separada por comas, de los numeros primos hasta cierto valor (enteros positivos) o -1 en caso de error*/
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


/************************** Desafío clase 1 **************************/
function pedirNombreFecha(){
    var nombre=prompt("Ingrese su nombre");
    var diaNacimiento=prompt("¿Que dia naciste?");
    var mesNacimiento=prompt("¿De que mes?");
    var anioNacimiento=prompt("¿y el año, si me queres contar? (con cuatro digitos porque se rompe todo, porfa!)");

    edad=2021-parseInt(anioNacimiento);
    edadDiciembre= edad -1;

    console.log("Hola "+nombre+". Mi super sistéma informatico detecta que naciste el "+diaNacimiento+" del "+mesNacimiento+" del "+anioNacimiento+" esto quiere dedir que tenés "+edad+" años. A no ser que hayas nacido entre el 27 de noviembre y el 31 de diciembre, en ese caso tenés: "+ edadDiciembre+" años (pero no cantes victoria ehhh!!)");
    }
/*********************************************************************/

/************************** Desafío clase 2 **************************/
function evolucion(){
    console.log("Nuestra inteligencia artificial va aumentando de a poco!, ahora podemos decir algunas cosas mas de vos "+nombre+":");

    /*validemos que hayamos puesto un año con 4 digitos, y que tenga coherencia*/
    if(parseInt(anioNacimiento)<100){
        anioNacimiento=prompt("Recuerdo haberte dicho que pongas tu año de nacimento con 4 digitos, porfa, porque se me cruzan los transistores");
    } else
    if(parseInt(anioNacimiento)>100 && parseInt(anioNacimiento)<1920){
        anioNacimiento=prompt("No creo que seas tan viejo!, poné tu año de nacimiento real, no seas malo!!! (con 4 digitos, gracias!)");
    } else 
    if(parseInt(anioNacimiento)>2022){
        anioNacimiento=prompt("Naaaa, me estas jodiendo!, ya voy a APRENDER A PEGARTE UNA PATADA EN EL TUJE EN VIVO Y EN DIRECTO!!, Ultima chance!, no seas malo. Pone tu año de nacimiento son 4 digitos y seremos amigues!");
    }
    console.log(anioNacimiento);
    /* Creo que tambian podría haber usado un case, pero tambien imagino que lo ideal sería un while, para meterlo en un bucle infinito hasta que me diga un año de 4 cifras en serio! */

    var mesTexto=""; //Convierte el mes de formato numérico a formato texto.
    var cantMaxDiasMes;
    switch(parseInt(mesNacimiento)){
        case 1:
            mesTexto = "Enero";
            cantMaxDiasMes = 31;
            break;
        case 2:
            mesTexto = "Febrero";
            cantMaxDiasMes = 29;
            break;
        case 3: 
            mesTexto = "Marzo";
            cantMaxDiasMes = 31;
            break;
        case 4: 
            mesTexto = "Abril";
            cantMaxDiasMes = 30;
            break;
        case 5: 
            mesTexto = "Mayo";
            cantMaxDiasMes = 31;
            break;
        case 6: 
            mesTexto = "Junio";
            cantMaxDiasMes = 30;
            break;
        case 7: 
            mesTexto = "Julio";
            cantMaxDiasMes = 31;
            break;
        case 8: 
            mesTexto = "Agosto";
            cantMaxDiasMes = 31;
            break;
        case 9: 
            mesTexto = "Septiembre";
            cantMaxDiasMes = 30;
            break;
        case 10: 
            mesTexto = "Octubre";
            cantMaxDiasMes = 31;
            break;
        case 11: 
            mesTexto = "Noviembre";
            cantMaxDiasMes = 30;
            break;
        case 12: 
            mesTexto = "Diciembre";
            cantMaxDiasMes = 31;
            break;
    }
}
/*********************************************************************/