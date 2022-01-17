

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
    console.log(fechaHoy.getFullYear());
  
    console.log(fechaHoy.getMonth());
    console.log(fechaHoy.getDate());
    /* seteo los valores min y max del input para seleccionar la fecha */
    $(document).ready(function(){
        /* revisar la forma extraña que implemente para que me tome el mes con dos digitos */
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
        });
    });

}

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