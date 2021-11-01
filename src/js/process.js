import { Swiper, Navigation, EffectFade, Controller, Mousewheel } from 'swiper';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);

Swiper.use([Navigation, EffectFade, Controller, Mousewheel]);

export default function process() {
    const elements = Array.from(document.querySelectorAll('.js-process'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.process__slider-text .swiper-container');
        const outerImageSliderContainer = element.querySelector('.process__slider-images-outer-slider > .swiper-container');
        const blobContainer = element.querySelector('.process__slider-images-outer-shell-blob-slider .swiper-container');
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
            mousewheel: {
                invert: false,
                eventsTarget: '.process__col',
                releaseOnEdges: true
            },
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);
                }
            }
        });

        mainSlider.init();

        const outerImageSlider = new Swiper(outerImageSliderContainer, {
            slidesPerView: 1,
            speed: 400,
            watchOverflow: true,
            // autoHeight: true,
            effect: 'fade',
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            }
        });

        const blobSlider = new Swiper(blobContainer, {
            slidesPerView: 1,
            speed: 400,
            watchOverflow: true,
            autoHeight: true,
            effect: 'fade',
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            }
        });

        mainSlider.controller.control = outerImageSlider;

        outerImageSlider.controller.control = blobSlider;

        bullets.forEach((bullet, bulletIndex) => {
            bullet.addEventListener('click', event => {
                event.preventDefault();

                mainSlider.slideTo(bulletIndex);
            });
        });

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
    });
}
