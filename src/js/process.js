import { Swiper, Navigation, EffectFade, Controller } from 'swiper';

import { gsap } from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);

Swiper.use([Navigation, EffectFade, Controller]);

export default function process() {
    const elements = Array.from(document.querySelectorAll('.js-process'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.process__slider-text .swiper-container');
        const imagesContainer = element.querySelector('.process__slider-images-slider .swiper-container');
        const bullets = Array.from(element.querySelectorAll('.process__slider-pagination-bullet'));

        const setActiveBullet = index => {
            bullets.forEach(bullet => bullet.classList.remove('active'));
            bullets[index].classList.add('active');
        };

        const mainSlider = new Swiper(mainContainer, {
            slidesPerView: 1,
            speed: 400,
            watchOverflow: true,
            autoHeight: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            init: false,
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);

                    gsap.to('.process__slider-images-progress svg:nth-child(2) circle', { duration: 0.4, drawSVG: `0% ${swiper.progress * 100}%` });
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);

                    gsap.to('.process__slider-images-progress svg:nth-child(2) circle', { duration: 0.4, drawSVG: `0% ${swiper.progress * 100}%` });
                }
            }
        });

        mainSlider.init();

        bullets.forEach((bullet, bulletIndex) => {
            bullet.addEventListener('click', event => {
                event.preventDefault();

                mainSlider.slideTo(bulletIndex);
            });
        });

        const imagesSlider = new Swiper(imagesContainer, {
            slidesPerView: 1,
            speed: 400,
            watchOverflow: true
        });

        mainSlider.controller.control = imagesSlider;
        imagesSlider.controller.control = mainSlider;
    });
}
