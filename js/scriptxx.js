/* Fonction calcul */
function fCalcul(){
    // déclaration Variables
    var NomEtudiant=(document.Formulaire.nometudiant.value);
    var NumMatricule=(document.Formulaire.nummatricule.value);
    var NoteExam1=parseFloat(document.Formulaire.noteexam1.value);
    var NoteExam2=parseFloat(document.Formulaire.noteexam2.value);
    var NoteExam3=parseFloat(document.Formulaire.noteexam3.value);
    var NoteTravail1=parseFloat(document.Formulaire.notetravail1.value);
    var NoteTravail2=parseFloat(document.Formulaire.notetravail2.value);
    var NoteTravail3=parseFloat(document.Formulaire.notetravail3.value);
    var NoteTravail4=parseFloat(document.Formulaire.notetravail4.value);
    var EnsMoyExam;
    var EnsMoyTravaux;
    var Resultat;

   document.getElementById("Mention").value="";

    // validation
    if (NomEtudiant == "") {
        alert("Inscrivez le nom de l'étudiant; Le champ est présentement Vide.");
        document.Formulaire.nometudiant.focus();
        return false;
    }
    if (NumMatricule == '') {
        alert('Veuillez insérer un nombre constitué de sept chiffres.');
        document.Formulaire.nummatricule.value = ''
        document.Formulaire.nummatricule.focus()
        return false;
    }    
    if (noteexam1 == ',') {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.Formulaire.noteexam1.value = ''
        document.Formulaire.noteexam1.focus()
        return false;
    }
    if (noteexam2 == ',') {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.Formulaire.noteexam2.value = ''
        document.Formulaire.noteexam2.focus()
        return false;
    }
    if (noteexam3 == ',') {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.Formulaire.noteexam3.value = ''
        document.Formulaire.noteexam3.focus()
        return false;
    }
    if (notetravail1 == ',') {
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
        document.Formulaire.notetravail1.value = ''
        document.Formulaire.notetravail1.focus()
        return false;
    }
       if (notetravail2 == ',') { 
        alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
    document.Formulaire.notetravail2.value = ''
    document.Formulaire.notetravail2.focus()
    return false;
}    
if (notetravail3 == ',') {
    alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
    document.Formulaire.notetravail3.value = ''
    document.Formulaire.notetravail3.focus()
    return false;
}    
if (notetravail4 == ',') {
    alert('Veuillez entrer tout nombre décimal en le séparant de la portion entière avec le point (.) plutôt que la virgule(,)');
    document.Formulaire.notetravail4.value = ''
    document.Formulaire.notetravail4.focus()
    return false;
}

    EnsMoyExam = (NoteExam1 + NoteExam2 + NoteExam3) * 80 / 70
    EnsMoyTravaux = (NoteTravail1 + NoteTravail2 + NoteTravail3 + NoteTravail4) * 20 / 65
    Resultat = EnsMoyTravaux + EnsMoyExam
    document.getElementById("Resultat").value = Resultat
// resultat de la valeur
    document.getElementById("Resultat").value = Resultat.toFixed(2);
   
    // conditionnelle Mention
    if (Resultat >= 60) {
        document.getElementById("Mention").innerHTML = "Réussite"
    }
    else {
        document.getElementById("Mention").innerHTML = "Échec"
    }
    
}