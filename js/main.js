// ---- ETAPE 1 : Afficher fade in toutes les sections en même temps ----- //
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section'); 
    console.log(sections);

    sections.forEach((section) => {
        section.classList.add('section-visible');
    });
});

//----- ETAPE 2 : Gestion des apparitions de titres sur sections ----//
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
   const sectionStory = document.getElementById('#story'); 

    const stopParallaxAt = sectionStory.getBoundingClientRect().bottom + window.scrollY; /* Position d'arrêt */
    console.log('Position d\'arrêt pour le parallaxe:', stopParallaxAt); 

    /* Effet de parallaxe */
    window.addEventListener('scroll', function() {
       const scrollPosition = window.scrollY; /* Récupère la position de scroll */
       const parallaxSpeed = 0.5; 

       /* N'applique l'effet de parallaxe que si on est pas encore dans la section suivante */
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
    console.log(placeSection);
   

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        /* déplace nuages vers la gauche si section visible */
        clouds.style.transform = 'translateX(-550px)';
      } else {
        /* remet nuages à la position initiale si section plus visible */
        clouds.style.transform = 'translateX(-250px)';
      }
    });
  });

  observer.observe(placeSection);
 });
 
/* -------- ETAPE 5 : Activation du menu toggle ------- */

 document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('menu-burger');
    const menuModal = document.getElementById('new-menu');
   
   
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        menuModal.classList.toggle('show'); /* bascule de classe pour montrer le nouveau menu */
    });
});

  








