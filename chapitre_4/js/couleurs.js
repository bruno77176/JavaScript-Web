var color = prompt("saisissez la couleur du texte (en anglais ou en RGB) :");
var backgroundColor = prompt("saissez la couleur du fond (en anglais ou en RGB :)");

var divElts = document.getElementsByTagName("div");

for(var i=0; i <divElts.length; i++){
    divElts[i].style.color = color;
    divElts[i].style.backgroundColor = backgroundColor;
}
