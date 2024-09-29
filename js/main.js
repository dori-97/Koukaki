// Lorsque le contenu de la page est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section'); // Sélectionne toutes les sections

    // Boucle à travers chaque section
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-visible'); // Ajoute la classe 'visible' pour déclencher l'effet fade in
        }, index * 500); // Délai de 500ms entre chaque section
    });
});