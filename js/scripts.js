/************************** Desafío clase 1 **************************/
var nombre=prompt("Ingrese su nombre");
var diaNacimiento=prompt("¿Que dia naciste?");
var mesNacimiento=prompt("¿De que mes?");
var anioNacimiento=prompt("¿y el año, si me queres contar? (con cuatro digitos porque se rompe todo, porfa!)");

edad=2021-parseInt(anioNacimiento);
edadDiciembre= edad -1;

console.log("Hola "+nombre+". Mi super sistéma informatico detecta que naciste el "+diaNacimiento+" del "+mesNacimiento+" del "+anioNacimiento+" esto quiere dedir que tenés "+edad+" años. A no ser que hayas nacido entre el 27 de noviembre y el 31 de diciembre, en ese caso tenés:"+ edadDiciembre+" años (pero no cantes victoria ehhh!!)");
/********************************************************************/