import { Swiper, Thumbs, Navigation } from 'swiper';

Swiper.use([Thumbs, Navigation]);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.single-news__gallery-slider-main .swiper-container');
        const thumbsContainer = element.querySelector('.single-news__gallery-slider-thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 0,
            thumbs: {},
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.single-news__gallery-slider-arrow--next'),
                prevEl: element.querySelector('.single-news__gallery-slider-arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 4,
            threshold: 10,
            speed: 700,
            slideToClickedSlide: true,
            spaceBetween: 12,
            centerInsufficientSlides: window.matchMedia('(max-width: 640px)').matches ? false : true,
            breakpoints: {
                641: {
                    spaceBetween: 12,
                    slidesPerView: 10,
                }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
