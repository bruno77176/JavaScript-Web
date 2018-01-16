document.getElementById("langages").innerHTML += '<li id="c">C</li>';

//document.getElementById("langages").innerHTML = "";


document.querySelector("h1").textContent +=" de programmation";

document.querySelector("h1").setAttribute("id","titre");


var titreElt = document.querySelector("h1");

titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);


var PythonElt = document.createElement("li");
PythonElt.id = "python";
PythonElt.textContent = "Python";
document.getElementById("langages").appendChild(PythonElt);

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="JavaScript">JavaScript</li>');

var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

document.getElementById("langages").removeChild(document.getElementById("bash"));




