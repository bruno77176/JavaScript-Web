var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";


var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color);
console.log(paragraphesElts[1].style.color);
console.log(paragraphesElts[2].style.color);


var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.color);
console.log(stylePara.fontStyle);
