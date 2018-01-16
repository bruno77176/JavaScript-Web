// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];


var dlElt = document.createElement("dl");
dlElt.id = "dictionnaire";

for(var i=0; i < mots.length; i ++){
    var dtElt = document.createElement("dt");
    dtElt.innerHTML = "<strong>"+mots[i].terme+"</strong>";
    var ddElt = document.createElement("dd");
    ddElt.textContent = mots[i].definition;
    document.getElementById("contenu").appendChild(dtElt);
    document.getElementsByTagName("dt")[i].appendChild(ddElt);
}