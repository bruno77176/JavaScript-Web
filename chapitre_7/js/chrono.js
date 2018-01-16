var boutonElt = document.getElementById("bouton");
var tempsElt = document.getElementById("temps");
var demarre = false;
var intervalId = null;

function demarrerChrono(){
    boutonElt.textContent = "Arrêter";
    var temps = Number(tempsElt.textContent);
        temps = temps + 1;
        tempsElt.textContent = temps;
        
}

boutonElt.addEventListener("click",function(e){
    if(!demarre){
    intervalId = setInterval(demarrerChrono, 1000);
    } else {
    clearInterval(intervalId);
        boutonElt.textContent = "Démarrer";
    } 
    demarre = !demarre;
    
})


