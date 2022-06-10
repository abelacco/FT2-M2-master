var URL = "http://localhost:5000/amigos/"

let showFriends = function(){
    $("#lista").empty();
    $.get(`${URL}`, function(friends){
    friends.forEach(f => $(`<li id = "${f.id}">${f.name}</li>`).appendTo("#lista"))      
    $("#mostrar").css("display","none");
    $("#prueba").empty();
    if( `${friends.length}` > 0) {
    $("#lista").after($(`<span id="prueba"> Tengo ${friends.length} amigos </span>`))
    } else {
    $("#lista").after($(`<span id="prueba"> Me quede sin amigos </span>`))    
    }
        
    });
}

$("#boton").click(showFriends);


let getFriends = function(){
    let input = $("#input").val(); 
    if(input) {
    $.get(`${URL}${input}`, function(friends){
        
        $("#amigo").text(`${friends.name} ${friends.age} ${friends.email}`)
        $("#input").val("");
    });
    }
   
}

$("#search").click(getFriends);


let deleteFriends = function(){
    let inputD = $("#inputDelete").val();
    let friend;
    $.get(`${URL}${inputD}`, function(friends){
        friend = friends;
    });   
    

    if(inputD) {
        $.ajax({
            url: `http://localhost:5000/amigos/${inputD}`,
            type: 'DELETE',
            success: function () {
                $("#success").text(`Tu amigo ${friend.name} fue borrado con éxito`);
                $("#inputDelete").val("");
                showFriends();
            },
         });
    } else {
            $("#success").text("Tienes que ingresar un id");
    }       
}

$("#delete").click(deleteFriends);