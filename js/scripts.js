
console.log("---DESAFÍO CLASE 1---")
/************************** Desafío clase 1 **************************/
var nombre=prompt("Ingrese su nombre");
var diaNacimiento=prompt("¿Que dia naciste?");
var mesNacimiento=prompt("¿De que mes?");
var anioNacimiento=prompt("¿y el año, si me queres contar? (con cuatro digitos porque se rompe todo, porfa!)");

edad=2021-parseInt(anioNacimiento);
edadDiciembre= edad -1;

console.log("Hola "+nombre+". Mi super sistéma informatico detecta que naciste el "+diaNacimiento+" del "+mesNacimiento+" del "+anioNacimiento+" esto quiere dedir que tenés "+edad+" años. A no ser que hayas nacido entre el 27 de noviembre y el 31 de diciembre, en ese caso tenés: "+ edadDiciembre+" años (pero no cantes victoria ehhh!!)");
/********************************************************************/

console.log("-----------o-----------");
console.log("---DESAFÍO CLASE 2---");

/************************** Desafío clase 2 **************************/
console.log("Nuestra inteligencia artificial va aumentando de a poco!, ahora podemos decir algunas cosas mas de vos "+nombre+":");

/*validemos que hayamos puesto un año con 4 digitos, y que tenga coherencia*/
if(parseInt(anioNacimiento)<100){
    var anioNacimiento=prompt("Recuerdo haberte dicho que pongas tu año de nacimento con 4 digitos, porfa, porque se me cruzan los transistores");
} else
if(parseInt(anioNacimiento)>100 && parseInt(anioNacimiento)<1920){
    var anioNacimiento=prompt("No creo que seas tan viejo!, poné tu año de nacimiento real, no seas malo!!! (con 4 digitos, gracias!)");
} else 
if(parseInt(anioNacimiento)>2022){
    var anioNacimiento=prompt("Naaaa, me estas jodiendo!, ya voy a APRENDER A PEGARTE UNA PATADA EN EL TUJE EN VIVO Y EN DIRECTO!!, Ultima chance!, no seas malo. Pone tu año de nacimiento son 4 digitos y seremos amigues!");
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

console.log ("Tu mes de nacimiento es: "+mesTexto+" y tiene: "+cantMaxDiasMes+" dias.");