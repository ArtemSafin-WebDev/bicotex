import { Swiper, EffectFade, Pagination, Navigation } from 'swiper';

Swiper.use([EffectFade, Pagination, Navigation]);

export default function similarProducts() {
    const elements = Array.from(document.querySelectorAll('.js-similar-products'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 15,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.similar-products__arrow--next'),
                prevEl: element.querySelector('.similar-products__arrow--prev')
            },
           
            breakpoints: {
                641: {
                    spaceBetween: 30
                }
            }
        });
    });
}
