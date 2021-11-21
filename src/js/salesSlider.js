import { Swiper, EffectFade, Pagination } from 'swiper';

Swiper.use([EffectFade, Pagination]);

export default function salesSlider() {
    const elements = Array.from(document.querySelectorAll('.js-sales-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            speed: 400,
            loop: true,
            pagination: {
                el: element.querySelector('.sales__slider-card-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
