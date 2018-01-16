var submitElt = document.querySelectorAll("input")[2];

var mdp1Elt = document.getElementById("mdp1");
var mdp2Elt = document.getElementById("mdp2");
var infoMdpElt = document.getElementById("infoMdp");

var regex = /[0-9]/;


submitElt.addEventListener("click", function(e){
    
    if(mdp1Elt.value !== mdp2Elt.value){
        infoMdpElt.textContent = "Erreur : les mots de passe saisis sont différents.";
    }
     else if(mdp1Elt.value.length<6){
         infoMdpElt.textContent = "Erreur : la longueur minimale du mot de passe est de 6 caractères."
     } else if (!regex.test(mdp1Elt.value)){
         infoMdpElt.textContent = "Erreur : le mot de passe doit contenir au moins un chiffre."
     } else {
         infoMdpElt.textContent = "Mots de passe OK."
     }
    e.preventDefault();
});