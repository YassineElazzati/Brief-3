let compteur = document.getElementById("compteur")
    if (localStorage.getItem("compteur")==null)
     localStorage.setItem("compteur",0);

     let compteurvue = Number(localStorage.getItem("compteur"));
     localStorage.setItem("compteur", compteurvue+1);

     console.log(compteur.innerHTML)
     compteur.innerHTML = compteurvue;

     