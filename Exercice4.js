function donnee(){
   var nom = document.getElementById('nom').value;
   var prenom = document.getElementById('prenom').value;
   var ville = document.getElementById('ville').value;
   if(nom && ville && prenom && isNaN(nom) == true && isNaN(prenom) == true && isNaN(ville) == true)
    {
     var result = 'Nom : ' + nom +  '\n' + 'Prénom : ' + prenom + '\n' + 'Ville : ' + ville;
     alert(result);
    }
 }
