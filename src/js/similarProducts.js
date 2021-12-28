import { Swiper, EffectFade, Pagination } from 'swiper';

Swiper.use([EffectFade, Pagination]);

export default function similarProducts() {
    const elements = Array.from(document.querySelectorAll('.js-similar-products'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 15,
            watchOverflow: true,
            breakpoints: {
                641: {
                    spaceBetween: 30
                }
            }
        });
    });
}
