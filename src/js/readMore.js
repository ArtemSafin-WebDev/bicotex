import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function readMore() {
    const elements = Array.from(document.querySelectorAll('.js-read-more'));
    const SPEED = 0.7;
    elements.forEach(element => {
        const originalText = element.textContent;
        const newText = element.getAttribute('data-text');
        const readMoreParent = element.closest('.js-read-more-parent');
        const readMoreHiddenText = readMoreParent.querySelector('.js-read-more-hidden-text');

        let open = false;
        element.addEventListener('click', event => {
            event.preventDefault();

            if (!open) {
                open = true;
                element.textContent = newText;
                gsap.to(readMoreHiddenText, {
                    height: 'auto',
                    duration: SPEED,
                    onComplete: () => ScrollTrigger.refresh()
                });
            } else {
                open = false;
                element.textContent = originalText;
                gsap.to(readMoreHiddenText, {
                    height: 0,
                    duration: SPEED,
                    onComplete: () => ScrollTrigger.refresh()
                });
            }
        });
    });
}
