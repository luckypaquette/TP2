/* Fonction calcul */
function fCalcul() {
    // déclaration Variables
    var NomEtudiant = document.RegForm.nometudiant.value;
    var NumMatricule = parseInt(document.RegForm.nummatricule.value)
    var NoteExam1 = parseFloat(document.RegForm.noteexam1.value)
    var NoteExam2 = parseFloat(document.RegForm.noteexam2.value)
    var NoteExam3 = parseFloat(document.RegForm.noteexam3.value)
    var NoteTravail1 = parseFloat(document.RegForm.notetravail1.value)
    var NoteTravail2 = parseFloat(document.RegForm.notetravail2.value)
    var NoteTravail3 = parseFloat(document.RegForm.notetravail3.value)
    var NoteTravail4 = parseFloat(document.RegForm.notetravail4.value)
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
    if (NumeroMatricule == '') {

        alert('Veuillez insérer un nombre composé de sept chiffres.');
        document.RegForm.nummatricule.value = ''
        document.RegForm.nummatricule.focus()
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