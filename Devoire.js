
const images = document.querySelectorAll('.slider img');
const btnSuivant = document.getElementById('suivant');
const btnPrecedent = document.getElementById('precedent');

let index = 0; // L'index de l'image actuellement affichée

function changerImage(nouvelIndex) {

    images[index].classList.remove('active');


    index = nouvelIndex;


    if (index >= images.length) {
        index = 0; // Retour au début
    } else if (index < 0) {
        index = images.length - 1; 
    }

    
    images[index].classList.add('acti…ve');
}


btnSuivant.addEventListener('click', () => {
    changerImage(index + 1);
});


btnPrecedent.addEventListener('click', () => {
    changerImage(index - 1);
});