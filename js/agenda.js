
$.ajax({
    type: "get",
    url: "../json/agenda.json",
    dataType: "json",
    success: function (respuesta) {
        agenda = respuesta;
        JSON.parse(localStorage.getItem("agenda")); 
    generarAgenda();
    }
});
      
function generarAgenda(){
    const fechaHoy = new Date();
    const fechaMax = new Date();
    const fechaMaxima= sumarDias(fechaMax, 10);

    /* seteo los valores min y max del input para seleccionar la fecha */
    $(document).ready(function(){
        $("#fechaClase").attr("min",`${numeroDosDigitos(fechaHoy.getFullYear())}-${numeroDosDigitos(fechaHoy.getMonth()+1)}-${fechaHoy.getDate()}`);
        $("#fechaClase").attr("max",`${numeroDosDigitos(fechaMaxima.getFullYear())}-${numeroDosDigitos(fechaMaxima.getMonth()+1)}-${fechaMaxima.getDate()}`);
    });
    /* Tomo el valor de la fecha seleccionada. ME hubiera gustado lograr que no haya que presionar el botón pero no se como implementarlo. */
    $(document).ready(function(){
        $("#buscarDisponibilidad").on("click",function(e){
            /* Uso prevent default para evitar que se recargue la página con el uso del form */
            e.preventDefault();
            const fecha=$('#fechaClase').val();
            console.log(fecha);

            const arrayfiltrado= agenda.filter(arr => arr.date == fecha)
            console.log(arrayfiltrado);

            pintarHorarios();
        });
    });

}


function pintarHorarios(){

    $(document).ready(function(){
        $("#agendaHorarios"). html(`    <h2 class="text-center">Seleccionar el horario:</h2>
                                <ul class="horarios">
                                    <li class="itemHorario disponible">10hs - 11hs</li>
                                    <li class="itemHorario disponible">11hs - 12hs</li>
                                    <li class="itemHorario disponible">12hs - 13hs</li>
                                    <li class="itemHorario disponible">13hs - 14hs</li>
                                    <li class="itemHorario noDisponible">14hs - 15hs</li>
                                    <li class="itemHorario disponible">15hs - 16hs</li>
                                    <li class="itemHorario noDisponible">16hs - 17hs</li>
                                    <li class="itemHorario disponible">17hs - 18hs</li>
                                    <li class="itemHorario disponible">18hs - 19hs</li>
                                    <li class="itemHorario noDisponible">19hs - 20hs</li>
                                    <li class="itemHorario noDisponible">20hs - 21hs</li>
                                </ul>`) 

    });  
}

/* function filtrarAgenda(array, fecha){
    const filtrado = array.filter(function(element){
        return element.date == fecha;
      });
} */




/* Funciones de uso gral */


/* Funcion que transforma un numero de un digito en un numero de dos digitos (agrega el 0 delante) */
function numeroDosDigitos(num){
    if(num<10){
        return `0${num}`;
    } else {
        return `${num}`;
    }
}

/* Función que suma o resta días a una fecha, si el parámetro
   días es negativo restará los días*/
   function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }