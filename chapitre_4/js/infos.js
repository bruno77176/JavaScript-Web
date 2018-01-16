var styleContenu = getComputedStyle(document.getElementById("contenu"));

document.getElementById("infos").innerHTML = "Informations sur l'élément</br><ul><li>Hauteur : "+styleContenu.height+"</li><li>Longueur : "+styleContenu.width+"</li>";


console.log(styleContenu.height);
console.log(styleContenu.width);
