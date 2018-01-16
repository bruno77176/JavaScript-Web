var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/tableaux.json", false);
req.send(null);

var tableaux = JSON.parse(req.responseText);

console.log(tableaux);
//constructions des entêtes du tableau à l'aide des paramètres des Objects de type "tableau" : 

var proprietesTableau = Object.getOwnPropertyNames(tableaux[0]);

for(var i=0; i<proprietesTableau.length; i++){
    var tableHeader = document.createElement("th");
tableHeader.textContent = proprietesTableau[i];
document.getElementById("tableaux").appendChild(tableHeader);
}

// construction des lignes du tableau : 
for(var i= 0; i< tableaux.length; i++){
    var trElt = document.createElement("tr");
    document.getElementById("tableaux").appendChild(trElt);
    for(var j=0; j<proprietesTableau.length; j++){
    var tdElt = document.createElement("td");
        var propriete = Object.getOwnPropertyNames(tableaux[i])[j];
        tdElt.textContent = propriete+i;
        console.log(propriete);
    trElt.appendChild(tdElt);
    }
    
    
}

console.log(document.getElementById("tableaux").innerHTML);