import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function events() {
    const elements = Array.from(document.querySelectorAll('.js-events'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 20,
            speed: 400,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
