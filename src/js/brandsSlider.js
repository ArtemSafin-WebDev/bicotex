import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function brandsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-brands-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
            speed: 400,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
