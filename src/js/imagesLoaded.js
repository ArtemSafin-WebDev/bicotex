import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function imagesLoaded() {
    return;
    let imgLoad = imagesLoaded(document.querySelector('.page-content'));
    function onAlways() {
        ScrollTrigger.refresh();
    }

    imgLoad.on('always', onAlways);
}
