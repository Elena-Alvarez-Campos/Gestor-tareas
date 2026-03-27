
$(document).ready(function(){
    //Tarea nueva
    $("#nuevaTarea").click(function(){
        //clone() clona el contenedor
        let nuevoTask=$("#ejemplo").clone();
        //Esta línea le quita el valor
        nuevoTask.children().val("");
        $("article").prepend(nuevoTask)
        
       /* Código de ejemplo
       var div_copy = $('#dv').clone();
                div_copy.children().val("");//para quitar el valor
                $('.container_div').append(div_copy);
        $("article").prepend(nuevoTask)
        */

    })
    //Completar tarea
    $("#completado").click(function(){
        $("#ejemplo").toggleClass("finTarea")
    })
    
    //Modo oscuro (no definitivo)
    $("#modo").click(function(){
        $("body").toggleClass("fondoOscuro")
    })


    
})