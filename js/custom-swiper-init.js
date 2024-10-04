// ------ ETAPE 3 : initialisation de Swiper JS ------ //

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',  // Un slide visible à la fois pour le test
    spaceBetween: 10,  // Espacement entre les slides      
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      // Ajoute la classe 'active' après l'initialisation complète
      init: function () {
        let activeSlide = swiper.slides[swiper.activeIndex];
        activeSlide.classList.add('active');
      },
      // Met à jour la classe 'active' quand le slide change
      slideChangeTransitionStart: function () {
        swiper.slides.forEach(function (slide) {
          slide.classList.remove('active');  // Enlève la classe 'active' de tous les slides
        });
        let activeSlide = swiper.slides[swiper.activeIndex];
        activeSlide.classList.add('active');  // Ajoute la classe 'active' au slide actif
      }
    }
  });
  
  console.log('Swiper avec gestion de classe active initialisé');
});
