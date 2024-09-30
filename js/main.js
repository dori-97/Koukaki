// Lorsque le contenu de la page est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section'); // Sélectionne toutes les sections

    sections.forEach((section) => {
        section.classList.add('section-visible');
    });
});