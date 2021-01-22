(function($) {
    "use strict";

    /**SLIDER USING SWIPER**/
	var cardSlider = new Swiper('.card-slider', {
        loop: true,
		slidesPerView: 1.85,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 200,
            },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
              1024: {
                slidesPerView: 1.7,
                spaceBetween: 30,
            },
        }
    });

})(jQuery);