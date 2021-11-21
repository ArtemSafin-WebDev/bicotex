import { Swiper, Navigation } from 'swiper';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

Swiper.use([Navigation]);

export default function newProcess() {
    const elements = Array.from(document.querySelectorAll('.js-new-process'));

    elements.forEach(element => {
        const pinWrapper = document.querySelector('.process-pin-wrapper');
        const layers = Array.from(document.querySelectorAll('.new-process__stage'));

        layers.forEach(element => {
            const galleryContainer = element.querySelector('.swiper-container');

            const progress = element.querySelector('.new-process__gallery-progress svg:nth-child(2) circle');

            const innerImagesSlider = new Swiper(galleryContainer, {
                slidesPerView: 1,
                speed: 400,
                watchOverflow: true,
                init: false,
                navigation: {
                    nextEl: element.querySelector('.new-process__gallery-arrow--next'),
                    prevEl: element.querySelector('.new-process__gallery-arrow--prev')
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

        if (!pinWrapper) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                start: 'bottom bottom',
                end: `+=${layers.length * 200}%`,
                trigger: pinWrapper,
                anticipatePin: 1,
                pin: true,
                pinSpacing: true,
                scrub: true,
                snap: {
                    snapTo: 'labelsDirectional',
                    duration: { min: 0.2, max: 0.6 },
                    delay: 0.1,
                    ease: 'power1.inOut'
                }
            }
        });

        layers.forEach((layer, layerIndex) => {
            if (layerIndex === 0) {
                tl.addLabel(`stage-${layerIndex}`, '<');
                return;
            }

            tl.to(layers[layerIndex - 1], {
                autoAlpha: 0,
                duration: 0.4,
                ease: 'none'
            });

            tl.to(layer, {
                autoAlpha: 1,
                duration: 0.4,
                ease: 'none'
            });
            tl.addLabel(`stage-${layerIndex}`, '>');
        });
    });
}
