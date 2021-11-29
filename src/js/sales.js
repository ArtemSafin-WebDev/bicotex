import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function sales() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            const elements = Array.from(document.querySelectorAll('.js-sales'));

            const SHIFT_AMOUNT = 80;

            elements.forEach(element => {
                const cards = Array.from(element.querySelectorAll('.sales__list-item'));

                cards.forEach((card, cardIndex) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: 'top center',
                            end: '+=50%',
                            scrub: true
                        }
                    });

                    if (cardIndex === 0) {
                        tl.to(card, {
                            y: SHIFT_AMOUNT / 2,
                            duration: 0.4
                        });
                    } else if (cardIndex === 1) {
                        tl.from(card, {
                            y: SHIFT_AMOUNT,
                            duration: 0.4
                        });
                    } else if (cardIndex === 2) {
                        tl.to(card, {
                            y: SHIFT_AMOUNT,
                            duration: 0.4
                        });
                    }
                });
            });
        }
    });
}
