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


for(var i=0; i<listeLiens.length; i ++){
    //d'abord, je crée 3 nouveaux élements du DOM : un paragraphe <p> de class "lien" qui contiendra le lien <a> dont le titre est cliquable et renvoit vers l'url, et un <span> qui affiche les informations du lien, c'est-à-dire son url et son auteur : 
    var paraElt = document.createElement("p");
    paraElt.className = "lien";
    
    var lienElt = document.createElement("a");
    lienElt.href = listeLiens[i].url;
    lienElt.innerHTML = listeLiens[i].titre;
    //je définie le style du lien pour lui donner une apparence similaire à l'exemple, gras, bleu et non souligné :
    lienElt.style.color ="#428bca";
    lienElt.style.textDecoration = "none";
    lienElt.style.fontWeight = "bold";
    
    var spanElt = document.createElement("span");
    spanElt.innerHTML =" "+listeLiens[i].url+"</br></br>Ajouté par "+listeLiens[i].auteur;
    
    // enfin, j'intègre les 3 nouveaux élements à l'aide de la méthode appendChild() :
    document.getElementById("contenu").appendChild(paraElt);
    document.getElementsByTagName("p")[i].appendChild(lienElt);
    document.getElementsByTagName("p")[i].appendChild(spanElt);
    
}

