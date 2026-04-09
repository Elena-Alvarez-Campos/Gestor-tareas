
$(document).ready(function(){
    //Tarea nueva
    let posicionesArt=[]
    let posicionID=0;
    $("#nuevaTarea").click(function(){
        //clone() clona el contenedor
        //if($("#ejemplo").hasClass("0")){
        const estructura=$("<div>",{class:"ejemplo"})
        const titulo=$("<input>",{type:"text",class:"campo-texto",placeholder:"Título de la tarea"})
        const contenido=$("<textarea>",{name:"text",class:"des-tarea",placeholder:"Añade la tarea",rows:"4"})
        const grupoBot=$("<div>",{class:"botones"})
        const completar=$("<button>",{class:"completado"}).text("Completar")
        const borrar=$("<button>",{class:"eliminar"}).text("Eliminar")

        grupoBot.append(completar,borrar);
        estructura.append(titulo,contenido,grupoBot)
        $("article").prepend(estructura)
        /*
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
        */
        //$("article").prepend(nuevoTask)
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
        $(this).closest(".ejemplo").toggleClass("finTarea");
        /*
        if($(this).parent.parent.hasClass("finTarea")){
            $(this).text("Restaurar")
        }else{
            $(this).text("Completar6")
        }*/

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
    $(".eliminar").click(function(){
        //let posicionEliminar=0;
        $(this).parent().parent().remove()
        /*
        if($("#ejemplo").hasClass(posicionEliminar)){
            $("#ejemplo").remove()
        }*/
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