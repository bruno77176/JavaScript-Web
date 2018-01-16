/*
function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);
*/

document.getElementById("bouton").addEventListener("click", function(){
    console.log("Clic !");
})


document.getElementById("bouton").addEventListener("click", function(e){
    console.log(e.type+" "+e.target.textContent);
})

document.addEventListener("keypress", function(e){
  console.log(e.charCode+" représente "+String.fromCharCode(e.charCode)); 
})

function infoClavier(e){
    console.log("Evénement clavier : "+e.type+", touche : "+e.keyCode);
}

document.addEventListener("keydown", infoClavier);
document.addEventListener("keyup",infoClavier);


// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

window.addEventListener("load", function(){
 console.log("La page est entièrement chargée.");   
})

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

// Gestion du clic sur le document

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation;
});

document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});