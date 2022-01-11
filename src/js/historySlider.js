import { Swiper, Thumbs, Navigation, Controller, EffectFade } from 'swiper';

Swiper.use([Thumbs, Navigation, Controller, EffectFade]);

export default function historySlider() {
    const elements = Array.from(document.querySelectorAll('.js-history-slider'));

    elements.forEach(element => {
        const rangeContainer = element.querySelector('.about__history-slider-range .swiper-container');

        const textContainer = element.querySelector('.about__history-text-slider .swiper-container');

        const contentContainer = element.querySelector('.about__history-content-slider .swiper-container');

        const rangeSlider = new Swiper(rangeContainer, {
            slidesPerView: 'auto',
            watchOverflow: true,
            slideToClickedSlide: true,
            speed: 700,
            centeredSlides: true,
            centeredSlidesBounds: false,
            threshold: 10,
            navigation: {
                nextEl: element.querySelector('.about__history-arrow--next'),
                prevEl: element.querySelector('.about__history-arrow--prev')
            }
        });

        const textSlider = new Swiper(textContainer, {
            effect: 'fade',
            speed: 700,
            autoHeight: true,
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            }
        });

        const contentSlider = new Swiper(contentContainer, {
            effect: 'fade',
            speed: 700,
            autoHeight: true,
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            }
        });

        rangeSlider.controller.control = textSlider;
        textSlider.controller.control = contentSlider;
    });
}
