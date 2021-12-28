import { Swiper, Thumbs, Navigation } from 'swiper';

Swiper.use([Thumbs, Navigation]);

export default function productGallery() {
    const elements = Array.from(document.querySelectorAll('.js-product-gallery'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.product__gallery-slider-main .swiper-container');
        const thumbsContainer = element.querySelector('.product__gallery-slider-thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 0,
            thumbs: {},
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.product__gallery-slider-arrow--next'),
                prevEl: element.querySelector('.product__gallery-slider-arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            threshold: 10,
            speed: 700,
            slideToClickedSlide: true,
            spaceBetween: 10,
            centerInsufficientSlides: window.matchMedia('(max-width: 640px)').matches ? false : true,
            breakpoints: {
                641: { spaceBetween: 20 }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
