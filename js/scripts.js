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


function mesDias(mes){
    
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
/*********************************************************************/