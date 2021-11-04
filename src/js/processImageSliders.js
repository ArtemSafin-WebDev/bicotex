import { Swiper, Navigation, EffectFade, Controller, Mousewheel } from 'swiper';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

Swiper.use([Navigation, EffectFade, Controller, Mousewheel]);

export default function processImageSliders() {
    const innerImagesSliders = Array.from(document.querySelectorAll('.process__slider-images-inner-slider'));

    innerImagesSliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');
        const progress = slider.querySelector('.process__slider-images-progress svg:nth-child(2) circle');

        const innerImagesSlider = new Swiper(container, {
            slidesPerView: 1,
            speed: 400,
            watchOverflow: true,
            init: false,
            navigation: {
                nextEl: slider.querySelector('.slider-arrows__btn--next'),
                prevEl: slider.querySelector('.slider-arrows__btn--prev')
            },
            on: {
                init: swiper => {
                    gsap.to(progress, {
                        duration: 0.4,
                        drawSVG: `0% ${swiper.progress * 100}%`
                    });
                },
                slideChange: swiper => {
                    gsap.to(progress, {
                        duration: 0.4,
                        drawSVG: `0% ${swiper.progress * 100}%`
                    });
                }
            }
        });

        innerImagesSlider.init();
    });
}
