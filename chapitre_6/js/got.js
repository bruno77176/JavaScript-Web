//liste de quelques maisons de Game of Thrones : 
var maison = [
    {
        code : "ST",
        nom : "Stark"
    },
    {
        code : "LA",
        nom : "Lannister"
    },
    {
        code : "BA",
        nom : "Baratheon"
    },
    {
        code : "TA",
        nom : "Targaryen"
    }
];

//renvoie un tableau contenant quelques personnages d'une maison : 

function getPersonnages (codeMaison){
    switch(codeMaison){
        case "ST" : 
            return ["Eddard","Catelyn","Robb","Sansa","Arya","John Snow"];
        case "LA" : 
            return ["Tywin","Cersei","Jaime","Tyrion"];
        case "BA" : 
            return ["Robert","Stannis","Renly"];
        case "TA" : 
            return ["Aerys","Daenerys","Viserys"];
        default : 
            return "";
    }
}

var ulElt = document.querySelectorAll("ul")[0];

for(var i=0; i<maison.length;i++){
    
    var optionElt = document.createElement("option");
    optionElt.textContent = maison[i].nom;
    optionElt.id = maison[i].code;
    document.getElementById("maison").appendChild(optionElt);
    
    document.getElementById(maison[i].code).addEventListener("click", function(e){
            
            ulElt.innerHTML ="";
        
            for(var j = 0; j<getPersonnages(e.target.id).length; j++){
                var liElt = document.createElement("li");
                liElt.textContent = getPersonnages(e.target.id)[j];
                ulElt.appendChild(liElt);
            }
    });
}
