/*

var compteurElt = document.getElementById("compteur");

function diminuerCompteur(){
    var compteur = Number(compteurElt.textContent);
    if(compteur > 1){
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval(intervalId);
        
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        setTimeout(function () {
            titre.textContent = "Tout est cassé :(";
        }, 2000);
    }
    
}

var intervalId =setInterval(diminuerCompteur, 1000);



var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null;

var vitesse = 7;

function deplacerBloc (){
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if(xBloc+largeurBloc <= xMax){
        bloc.style.left = (xBloc + vitesse)+"px";
    animationId = requestAnimationFrame(deplacerBloc);
    } else {
        cancelAnimationFrame(animationId);
    }
    
}

//animationId = requestAnimationFrame(deplacerBloc);
*/
document.getElementById("div").addEventListener("click", function () {
    console.log("Clic sur l'élément div");
});
document.getElementById("span").addEventListener("click", function () {
    console.log("Clic sur l'élément span");
});

document.getElementById("input").addEventListener("input", function () {
    console.log("Coucou");
});