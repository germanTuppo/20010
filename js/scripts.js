let opcion=-1;
let opciones= "Selecciona lo que quieres hacer: \n1) Ingresar un número para ver si es primo. \n2) Ingresar un número y ver una lista de todos los numeros primos hasta dicho número. \n3) Ingresar un mes en formato numérico para verlo en formato texto y conocer la candidad de días posee. \n4)Ver los divisores de un número \n0) Salir.\n";

/* Nota a Uciel: Las boludeces de la consola con los colores y eso las saqué de acá: https://blog.irontec.com/8-trucos-de-console/*/

while(opcion!=0){
    let numero;
    let numeroB;

    console.log(opciones);//Solo para que se muestren las opciones en la consola
    opcion=parseInt(prompt(opciones));
    switch (opcion){
        case 0: console.log("%cGracias por confiar en nosotros! Te vamos a extrañar\n\n\n","color:#000;font-size: 14px;background:#0f0;font-weight: bold;")
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
            numero=parseInt(prompt("Ingrese dividendo:"));
            numeroB=parseInt(prompt("Ingrese el divisor:"));
            console.log (`${multiplicidadDivisor(numero, numeroB)}\n`)
            break;
        }

        default: console.log("La opción es incorrecta!. Ingresela nuevamente");
    }
    

}





/***************************************************************************************************************
 * 
 *FUNCIONES
 * 
 ***************************************************************************************************************/

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
/*Ya que estamos con el algebra jajaj, me gustaría hacer:
    --> Algo que calcule todos los divisores de un número
    --> Alguna funcion que calcule el mcd y otra para el mcm
    --> cuando veamos arrays trabajar con matrices (suma resta multiplicacion division determinantes resolucion de un sistema de m ecuaciones con m incognitas.
        
        Me pongo con ello!!!*/

function multiplicidadDivisor(num, divisor){
    /*EN PROCESO! Debería mostrar cuantas veces es un número divisor de otro */
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
                    console.log("toy en el while");
                }
                return aux;
            }
}

function primosDivisores(numero){
    /*EN PROCESO! Debería mostrar todos los divisores de un número */
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