// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];


var paysElt = document.getElementById("pays");
var sugElt = document.getElementById("suggestions");


paysElt.addEventListener("input",function(e){
    sugElt.innerHTML ="";
    for(var i=0; i<listePays.length;i++){
        
        if (listePays[i].indexOf(e.target.value) !== -1){
            var divElt = document.createElement("div");
            divElt.className = "suggestion";
            divElt.textContent = listePays[i];
            sugElt.appendChild(divElt);
        } 
        
    }
    var divElts = document.getElementsByTagName("div");
    
    for(var i=0; i<divElts.length;i++){
 
        divElts[i].addEventListener("click", function(e){
            paysElt.value = e.target.textContent;
            sugElt.innerHTML ="";
            })
    }
})




