var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var vitesse = 7;
var max = parseFloat(getComputedStyle(cadre).width);
var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var direction = -1;
var demarrerElt = document.getElementById("demarrer");
var arreterElt = document.getElementById("arreter");
var animationId=null;


function deplacerBallon(){
    
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    
    if((xBallon == 0)||(xBallon+largeurBallon >= max)){
        direction =-direction;
    } 
    ballon.style.left = (xBallon + direction*vitesse)+ "px";
    
    animationId = requestAnimationFrame(deplacerBallon);
}


demarrerElt.addEventListener("click", function(){
    animationId = requestAnimationFrame(deplacerBallon);
    arreterElt.disabled = false;
    demarrerElt.disabled = true;
});

arreterElt.addEventListener("click", function(){
    cancelAnimationFrame(animationId);
    demarrerElt.disabled = false;
    arreterElt.disabled = true;
});
