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
    console.log(agenda);
}
