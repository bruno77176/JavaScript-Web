
var compteur=0;

function compter(){
    compteur ++;
    document.getElementById("compteurClics").textContent = compteur;
}

document.getElementById("clic").addEventListener("click", compter);

document.getElementById("desactiver").addEventListener("click", function(){
    
    document.getElementById("compteurClics").id = "compteurfin";
})