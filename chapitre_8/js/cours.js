

function afficher(reponse) {
    console.log(reponse);
    var reponseTab = reponse.split(";");
    console.log(reponseTab);
    reponseTab.forEach(function(langage){
        var liElt = document.createElement("li");
        liElt.textContent = langage;
        document.querySelectorAll("ul")[0].appendChild(liElt);
    })
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);




/*

var avion = {
    marque : "Airbus",
    couleur : "A320"
};

console.log(avion);
var texteAvion = JSON.stringify(avion);

console.log(texteAvion);

console.log(JSON.parse(texteAvion));


var avions = [
    {
        marque : "Airbus",
        couleur : "A320"
    },
    {
        marque : "Airbus",
        couleur : "A380"
    }
];

console.log(avions);

var texteAvions = JSON.stringify(avions);
console.log(texteAvions);

console.log(JSON.parse(texteAvions));

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function(reponse){
    var films = JSON.parse(reponse);
    films.forEach(function(film){
        console.log(film.titre);
    })
});

*/