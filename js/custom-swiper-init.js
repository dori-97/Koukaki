// ------ ETAPE 3 : initialisation de Swiper JS ------ //
document.addEventListener('DOMContentLoaded', function () {
const swiperElement = document.querySelector(".swiper-container");

if (swiperElement) {
  const swiper = new Swiper(swiperElement, {
    effect: "coverflow",
    slidesPerView: 'auto',/* ajuste automatiquement en fonction de la largeur des slides */
    spaceBetween: 0,
    centeredSlides: true, /* désactive le centrage automatique des slides */
    
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    coverflowEffect: {
      rotate: 50, /* angle de rotation */
      stretch: 0, /* espacement des slides */
      depth: 100, /* profondeur des slides */
      modifier: 1,
      slideShadows: false, /* Ombres sur les slides */
    },
  });
} else {
  console.error("L'élément conteneur n'a pas été trouvé");
}
});



