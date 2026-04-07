
$(document).ready(function(){
    //Tarea nueva
    let posicionesArt=[]
    let posicionID=0;
    $("#nuevaTarea").click(function(){
        //clone() clona el contenedor
        //if($("#ejemplo").hasClass("0")){
        let nuevoTask=$("#ejemplo").clone();
        posicionID++
        posicionesArt.push(posicionID)
        $("#ejemplo").attr("id","nuevo")
        //Esta línea le quita el valor
        nuevoTask.children().val("");
        //nuevoTask.attr("ejemplo").replace()
        if(nuevoTask.hasClass("finTarea")){
            nuevoTask.removeClass("finTarea")
        }
        nuevoTask.removeClass("0")
        nuevoTask.addClass(""+posicionID)
        $("article").prepend(nuevoTask)
        //}
        
       /* Código de ejemplo
       var div_copy = $('#dv').clone();
                div_copy.children().val("");//para quitar el valor
                $('.container_div').append(div_copy);
        $("article").prepend(nuevoTask)
        */

    })
    //Completar tarea
    $(".completado").click(function(){
        let posicionCompletar=0;
        let claseEncontrada=false
        $(this).parent().parent().toggleClass("finTarea");

        /*
        //while(claseEncontrada==flase){
            if($("#completado").hasClass(posicionCompletar)){
                claseEncontrada=true
            }
            else{
                posicionCompletar++
            }
        //}
        if($("#ejemplo").hasClass(posicionCompletar)){
            $("#ejemplo").toggleClass("finTarea")
        }*/
    })
    //Eliminar
    $("#eliminar").click(function(){
        let posicionEliminar=0;
        /*
        if($("#ejemplo").hasClass(posicionEliminar)){
            $("#ejemplo").remove()
        }
        */
    })
    
    //Modo oscuro (no definitivo)
    $("#modo").click(function(){
        $("body").toggleClass("fondoOscuro")
        $("h2").toggleClass("tarea-osc")
    })



    
})