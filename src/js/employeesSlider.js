import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function employeesSlider() {
    const elements = Array.from(document.querySelectorAll('.js-employees-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 30,
            navigation: {
                nextEl: element.querySelector('.career__employees-slider-arrow--next'),
                prevEl: element.querySelector('.career__employees-slider-arrow--prev')
            },
            breakpoins: {
                641: {
                    spaceBetween: 50
                }
            }
        });
    });
}
