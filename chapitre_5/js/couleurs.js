// ;

/*
function convertirLettreEnCouleur(){
    var couleur ="";
    switch(letter){
        case "r" : couleur = "red";
        break;
        case "j" : couleur = "yellow";
        break;
        case "b" : couleur = "blue";
        break;
        case "v" : couleur = "green";
        break;
    }
}
*/


document.addEventListener("keypress", function(e){
    
    var letter = String.fromCharCode(e.charCode);
    
    var couleur;
    
    if(letter === "r"){
        couleur = "red";
    } else if (letter === "j"){
        couleur = "yellow";
    } else if (letter === "b"){
        couleur = "blue";
    } else if (letter === "v"){
        couleur = "green";
    } else { couleur = "white";
    }

    for(var i = 0; i<document.getElementsByTagName("div").length; i++){
    document.getElementsByTagName("div")[i].style.backgroundColor = couleur;
    }
})

