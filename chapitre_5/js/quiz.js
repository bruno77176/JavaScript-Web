// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var i= 1;

questions.forEach(function(question){
    
    
    var paraElt = document.createElement("p");

    var spanElt = document.createElement("span");
    spanElt.textContent ="question "+i+" : ";
    spanElt.style.fontWeight = "bold";

    var questionTxtNode = document.createTextNode(question.enonce);

    var divElt = document.createElement("div");
   

    var buttonElt = document.createElement("button");
    buttonElt.textContent = "Afficher la réponse";
    buttonElt.addEventListener("click", function(){
        divElt.innerHTML="";
        divElt.textContent = question.reponse;
    })

    document.getElementById("contenu").appendChild(paraElt);
    paraElt.appendChild(spanElt);
    paraElt.appendChild(questionTxtNode);
    document.getElementById("contenu").appendChild(divElt);
    divElt.appendChild(buttonElt);
    
    i++;
});
