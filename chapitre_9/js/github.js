
var boutonElt = document.querySelectorAll("button")[0];

boutonElt.addEventListener("click", function(e){
        contenu.innerHTML = "";
    var username = document.getElementById("username").value;
    var url = "https://api.github.com/users/"+username;
  
    ajaxGet(url, function(reponse){
        
        var profil = JSON.parse(reponse);
        
        var contenu = document.getElementById("contenu");
        
        var imgElt = document.createElement("img");
        imgElt.src = profil.avatar_url;
        imgElt.style.width = "200px";
        imgElt.style.height = "200px";
        
        
        var h2Elt = document.createElement("h2");
        h2Elt.textContent = profil.name;
        
        var aElt = document.createElement("a");
        aElt.href = profil.blog;
        aElt.textContent = profil.blog;
        
        contenu.appendChild(imgElt);
        contenu.appendChild(h2Elt);
        contenu.appendChild(aElt);
    });
});


