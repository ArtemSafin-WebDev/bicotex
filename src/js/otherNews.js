import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function otherNews() {
    const elements = Array.from(document.querySelectorAll('.js-other-news'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            spaceBetween: 12,
            watchOverflow: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: element.querySelector('.other-news__arrow--next'),
                prevEl: element.querySelector('.other-news__arrow--prev')
            },
            breakpoints: {
                641: {
                    spaceBetween: 18,
                    slidesPerView: 4
                }
            }
        });
    });
}
