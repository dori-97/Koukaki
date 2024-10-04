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
        root: null, // observer la fenêtre de visualisation
        threshold: 0.1 // 10% de l'élément visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-title-visible'); 
                observer.unobserve(entry.target); // Arrête d'observer l'élément une fois qu'il est visible
            }
        });
    }, options);

    titles.forEach(title => {
        observer.observe(title); // Commence à observer chaque titre
    });
});


// ----- ETAPE 2 : Réalisation de l'effet de parallax ------ //

document.addEventListener('DOMContentLoaded', function() {
    const parallaxEffect = document.querySelector('.logo-image');
    console.log(parallaxEffect);

   // Position à laquelle le parallaxe doit s'arrêter
   const sectionStory = document.getElementById('#story'); 
  // console.log(stopParallaxAt);

  const stopParallaxAt = sectionStory.getBoundingClientRect().bottom + window.scrollY; // Position d'arrêt
  console.log('Position d\'arrêt pour le parallaxe:', stopParallaxAt); 

   // Effet de parallaxe
   window.addEventListener('scroll', function() {
       const scrollPosition = window.scrollY; // Récupère la position de scroll
       const parallaxSpeed = 0.5; 

       // N'applique l'effet de parallaxe que si on est pas encore dans la section suivante
       if (scrollPosition < stopParallaxAt) { 
           // Applique l'effet de parallaxe à l'élément
           parallaxEffect.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
       }
   });
});








