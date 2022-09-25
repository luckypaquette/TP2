/* Fonction calcul */
function fCalcul() {
    // déclaration Variables
    var NomEtudiant;
    var NumMatricule;
    var NoteExam1;
    var NoteExam2;
    var NoteExam3;
    var NoteTravail1;
    var NoteTravail2;
    var NoteTravail3;
    var NoteTravail4;
    var EnsMoyExam;
    var EnsMoyTravaux;
    var Resultat;

   document.getElementById("Mention").value="";

    // validation
    if (NomEtudiant == "") {
        alert("Inscrivez un nom Étudiant; Le champ est présentement Vide.");
        document.RegForm.nometudiant.focus();
        return false;
    }
    if (NumMatricule == '') {
        alert('Veuillez insérer un nombre composé de sept chiffres.');
        document.RegForm.nummatricule.value = ''
        document.RegForm.nummatricule.focus();
        return false;
    }
    // validation
    if (NomEtudiant == "") {
        alert("Inscrivez le nom de l'étudiant; Le champ est présentement Vide.");
        document.RegForm.nometudiant.focus();
        return false;
    }
    if (NumMatricule == '') {
        alert('Veuillez insérer un nombre constitué de sept chiffres.');
        document.RegForm.nummatricule.value = '';
        document.RegForm.nummatricule.focus();
        return false;
    }    

//modifié pour valider avant de parser
//   SI va dans le document, le formulaire, le champ noteexam1 va chercher sa valeur, 
//   s'il contient une virgule INDEXOF va retourner la valeur 0 dans l'index de la 
//   virgule dans la chaine de caractère.
    if (document.RegForm.noteexam1.value.indexOf(',')>=0) {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.RegForm.noteexam1.value = ''
        document.RegForm.noteexam1.focus();
        return false;
    }
    if (document.RegForm.noteexam2.value.indexOf(',')>=0) {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.RegForm.noteexam2.value = '';
        document.RegForm.noteexam2.focus();
        return false;
    }
    if (document.RegForm.noteexam3.value.indexOf(',')>=0) {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.RegForm.noteexam3.value = '';
        document.RegForm.noteexam3.focus();
        return false;
    }
    //à modifier comme ci-haut
    if (document.RegForm.notetravail1.value.indexOf(',')>=0) {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.RegForm.notetravail1.value = ''
        document.RegForm.notetravail1.focus();
        return false;
    }
       if (document.RegForm.notetravail2.value.indexOf(',')>=0) {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
    document.RegForm.notetravail2.value = '';
    document.RegForm.notetravail2.focus();
    return false;
}    
if (document.RegForm.notetravail3.value.indexOf(',')>=0) {
    alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
    document.RegForm.notetravail3.value = '';
    document.RegForm.notetravail3.focus();
    return false;
}    
if ( document.RegForm.notetravail4.value.indexOf(',')>=0) {
    alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
    document.RegForm.notetravail4.value = '';
    document.RegForm.notetravail4.focus();
    return false;
}

 NomEtudiant = document.RegForm.nometudiant.value;
 NumMatricule = parseInt(document.RegForm.nummatricule.value);

 NoteExam1 = parseFloat(document.RegForm.noteexam1.value);
 NoteExam2 = parseFloat(document.RegForm.noteexam2.value);
 NoteExam3 = parseFloat(document.RegForm.noteexam3.value);
 NoteTravail1 = parseFloat(document.RegForm.notetravail1.value);
 NoteTravail2 = parseFloat(document.RegForm.notetravail2.value);
 NoteTravail3 = parseFloat(document.RegForm.notetravail3.value);
 NoteTravail4 = parseFloat(document.RegForm.notetravail4.value);


    EnsMoyExam = (NoteExam1 + NoteExam2 + NoteExam3) * 80 / 70;
    EnsMoyTravaux = (NoteTravail1 + NoteTravail2 + NoteTravail3 + NoteTravail4) * 20 / 65;
    Resultat = EnsMoyTravaux + EnsMoyExam;
    document.getElementById("Resultat").value = Resultat;
// resultat de la valeur
    document.getElementById("Resultat").value = Resultat.toFixed(2);
   
    // conditionnelle Mention
    if (Resultat >= 60) {
        document.getElementById("Mention").innerHTML = "Réussite";
    }
    else {
        document.getElementById("Mention").innerHTML = "Échec";
    }

    EnsMoyExam = (NoteExam1 + NoteExam2 + NoteExam3) * 80 / 70;
    EnsMoyTravaux = (NoteTravail1 + NoteTravail2 + NoteTravail3 + NoteTravail4) * 20 / 65;
    Resultat = EnsMoyTravaux + EnsMoyExam;
// resultat de la valeur
    document.getElementById("Resultat").value = Resultat.toFixed(2);
   
    // conditionnelle Mention
    if (Resultat >= 60) {
        document.getElementById("Mention").innerHTML = "Réussite";
    }
    else {
        document.getElementById("Mention").innerHTML = "Échec";
    }
    
}