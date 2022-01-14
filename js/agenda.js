$.ajax({
    type: "get",
    url: "../json/agenda.json",
    dataType: "json",
    success: function (respuesta) {
        agenda = respuesta;

        agendaClases = JSON.parse(localStorage.getItem("agenda"));
        
    generarAgenda(agendaClases);
    }
});
      
function generarAgenda(agendaClases){
    console.log(agendaClases);
}
/*Esto no me está funcionando :(*/