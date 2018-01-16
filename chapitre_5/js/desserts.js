document.getElementsByTagName("button")[0].addEventListener("click", function(){
    var dessert = prompt("Quel dessert voulez-vous ajouter à la liste?");
    var liElt = document.createElement("li");
    liElt.textContent = dessert;
    liElt.addEventListener("click", function(){
        console.log("test event li");
        var nouveauDessert = prompt("Modifiez le dessert :");
        liElt.textContent = nouveauDessert;
    })
    document.getElementById("desserts").appendChild(liElt);
    
})

/*
var liElts = document.getElementsByTagName("li");

for(var i=0; i< liElts.length; i++){
    liElts[i].addEventListener("click", function(){
        var nouveauDessert = prompt("modifier le dessert?");
        liElts[i].textContent = nouveauDessert;
    })
}
*/