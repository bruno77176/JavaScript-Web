var titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);

var merveillesElts = document.getElementsByClassName("merveilles");
for(i=0; i<merveillesElts.length; i++){
    console.log(merveillesElts[i]);
}

console.log(document.getElementById("nouvelles"));

console.log(document.querySelectorAll("p").length);
console.log(document.querySelectorAll("#contenu p").length);
console.log(document.querySelectorAll(".existe").length);

console.log(document.querySelectorAll("#antiques > .existe").length);

console.log(document.getElementById("contenu").innerHTML);
console.log(document.getElementById("contenu").textContent);

