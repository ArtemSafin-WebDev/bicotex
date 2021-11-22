import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function sales() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            const elements = Array.from(document.querySelectorAll('.js-sales'));

            elements.forEach(element => {
                const cards = Array.from(element.querySelectorAll('.sales__card'));

                cards.forEach((card, cardIndex) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'bottom top'
                        }
                    });
                    if (cardIndex % 2 === 0) {
                        tl.to(card, {
                            y: -40,
                            duration: 0.4
                        });
                    } else {
                        tl.to(card, {
                            y: 40,
                            duration: 0.4
                        });
                    }
                });
            });
        }
    });
}
