//----- ETAPE 1 : Gestion des apparitions de titres sur sections ----//
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.section-title');
    console.log(titles);

    const options = {
        root: null, /* mesurer intersections avec la fenetre du navigateur */
        threshold: 0.1 /* 10% de l'élément visible */
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-title-visible'); 
                observer.unobserve(entry.target); /* arrête d'observer l'élément une fois qu'il est visible */
            }
        });
    }, options);

    titles.forEach(title => {
        observer.observe(title); /* commence à observer chaque titre */
    });
});


// ----- ETAPE 2 : Réalisation de l'effet de parallaxe ------ //

document.addEventListener('DOMContentLoaded', function() {
    const parallaxEffect = document.querySelector('.logo-image');
    console.log(parallaxEffect);

   /* Position à laquelle le parallaxe doit s'arrêter */
   const sectionStory = document.getElementById('story'); 

    const stopParallaxAt = sectionStory.getBoundingClientRect().bottom + window.scrollY; /* Position d'arrêt */
    console.log('Position d\'arrêt pour le parallaxe:', stopParallaxAt); 

    /* Effet de parallaxe */
    window.addEventListener('scroll', function() {
       const scrollPosition = window.scrollY; /* Récupère la position de scroll */
       const parallaxSpeed = 0.5; /* vitesse souhaitée pour effet parallaxe */

       /* Vérifie que position de scroll actuelle est bien avant le point d'arrêt */
       if (scrollPosition < stopParallaxAt) { 
           /* Applique l'effet de parallaxe à l'élément */
           parallaxEffect.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
        }
    });
});


/* ------ ETAPE 4 : Faire bouger les nuages de section Lieu avec parallaxe ------ */

document.addEventListener('DOMContentLoaded', function() {
    var clouds = document.querySelector('.clouds');
    var placeSection = document.querySelector('#place');
    
    // Position initiale et finale des nuages (en pixels)
    var startPosition = -250;
    var endPosition = -550;
    
    function moveClouds() {
        // Obtenir la position de la section par rapport au haut de la fenêtre
        var sectionTop = placeSection.getBoundingClientRect().top;
        
        // Hauteur de la fenêtre
        var windowHeight = window.innerHeight;
        
        // Calculer le pourcentage de défilement
        var scrollPercentage = (windowHeight - sectionTop) / windowHeight;
        
        // S'assurer que le pourcentage est entre 0 et 1
        scrollPercentage = Math.max(0, Math.min(1, scrollPercentage));
        
        // Calculer la nouvelle position des nuages
        var newPosition = startPosition + (endPosition - startPosition) * scrollPercentage;
        
        // Appliquer la nouvelle position
        clouds.style.transform = 'translateX(' + newPosition + 'px)';
    }

    // Exécuter moveClouds à chaque défilement
    window.addEventListener('scroll', moveClouds);
    
    // Exécuter moveClouds une fois au chargement
    moveClouds();
});
 
/* -------- ETAPE 5 : Activation du menu toggle avec J Query ------- */

/* privilégier "jQuery" à la place de "$" pour éviter conflits avec autres scripts */
jQuery(document).ready(function() {
    const $burgerMenu = jQuery('#menu-burger');
    const $menuModal = jQuery('#new-menu');
    
    $burgerMenu.on('click', function() {
        jQuery(this).toggleClass('active');
        $menuModal.toggleClass('show');
    });
});






