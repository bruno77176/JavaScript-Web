/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});



// ici commence l'Activité n°2 : 



//création d'un nouveau bloc <div> qui contiendra un bouton "ajouter" puis un formulaire et enfin un message de confirmation : 

var divElt = document.createElement("div");
document.body.insertBefore(divElt, contenu);

// création du bouton "ajouter"
var boutonElt = document.createElement("button");
boutonElt.textContent = "Ajouter un lien";
boutonElt.style.marginBottom = "20px";
divElt.appendChild(boutonElt);

// gestion de l'évenement associé au clic sur le bouton "ajouter" : création des zones de saisie du formulaire : 

boutonElt.addEventListener("click", function (){
    divElt.innerHTML = "";
    var formElt = document.createElement("form");
    
    var inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.placeholder = "Entrez votre nom";
    inputElt.required = true;
    inputElt.style.marginRight = "10px";
    inputElt.style.marginBottom = "20px";
    
    var input2Elt = document.createElement("input");
    input2Elt.type = "text";
    input2Elt.placeholder = "Entrez le titre du lien";
    input2Elt.size = "40";
    input2Elt.style.margin = "10px";
    input2Elt.required = true;
    
    var input3Elt = document.createElement("input");
    input3Elt.type = "text";
    input3Elt.placeholder = "Entrez l'URL du lien";
    input3Elt.size = "40";
    input3Elt.style.margin = "10px";
    input3Elt.required = true;
    
    var input4Elt = document.createElement("input");
    input4Elt.type = "submit";
    input4Elt.value = "Ajouter";
    input4Elt.style.margin = "10px";
    
    divElt.appendChild(formElt);
    formElt.appendChild(inputElt);
    formElt.appendChild(input2Elt);
    formElt.appendChild(input3Elt);
    formElt.appendChild(input4Elt);
    
    input4Elt.addEventListener("click", function (){
    
    if(inputElt.value!=""&&input2Elt.value!=""&&input3Elt.value!=""){
        

        var nouveauLien = {
            titre : input2Elt.value,
            url : input3Elt.value,
            auteur : inputElt.value
        };
            
        // vérification de la conformité de l'url à l'aide d'un regex, et modification de l'url si besoin : 
        
        var regex = /^https?:\/\//;
        
        if(!regex.test(nouveauLien.url)) {
            nouveauLien.url = "http://"+nouveauLien.url;
        }
        
        listeLiens.push(nouveauLien);
        
        var nouveauLienElt = creerElementLien(nouveauLien);
        contenu.insertBefore(nouveauLienElt, document.getElementsByClassName("lien")[0]);
        
        // confirmer l'ajout du nouveau lien par un message :
        
        divElt.innerHTML = "";
        var div2Elt = document.createElement("h4");
        div2Elt.style.lineHeight = "50px";
        div2Elt.style.marginBottom = "20px";
        div2Elt.style.paddingLeft = "10px";

        div2Elt.style.backgroundColor = "#e6f2ff";
        div2Elt.style.color = "#004d99";

        div2Elt.textContent = "Le lien \""+nouveauLien.titre+"\" a bien été ajouté.";

        div2Elt.style.verticalAlign = "middle";

        
        setTimeout(function(){divElt.removeChild(div2Elt);}, 2000);


        divElt.appendChild(div2Elt);
        divElt.appendChild(boutonElt);
        }
    });
});






