function infoLiens () {
    var Liens = document.getElementsByTagName("a");
    console.log(Liens.length);
    console.log(Liens[0].getAttribute("href"));
    console.log(Liens[Liens.length-1].href); //pour varier les plaisirs j'utilise la propriété href plutôt que la méthode getAttribute()
};

infoLiens();


function possede(instrument, famille){
    console.log(document.getElementById(instrument).classList.contains(famille));
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur