function openCity(evt, cityName) {
    // Declarer les variables
    var i, ongletcontent, tablinks;
  
    // Récupère tous les éléments avec class = "ongletcontent" et les cache
    ongletcontent = document.getElementsByClassName("ongletcontent");
    for (i = 0; i < ongletcontent.length; i++) {
      ongletcontent[i].style.display = "none";
    }
  
    // Récupère tous les éléments avec class = "tablinks" et supprime la classe "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Affiche l'onglet en cours et ajoute une classe "active" au bouton qui a ouvert l'onglet
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }