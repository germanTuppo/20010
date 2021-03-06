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