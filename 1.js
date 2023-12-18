
function getID(id) {
    return document.getElementById(id).value; 
}

function innerHTML(id,result){
    return document.getElementById(id).innerHTML=result;
}

function contadorCaracteres(){
    setInterval(function(){
        var c = getID("text");
        if (c.lenght>100) {
            innerHTML("textvista","SOLO PERMITE 100 CARACTERES");
        }else{
            innerHTML("textvista", c.lenght);
        }
    },1000);
}



function encriptar(){
    var frase=document.getElementById("offset").value.
    toLowerCase();
}