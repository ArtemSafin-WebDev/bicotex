import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        placeFocusBack: false
    });

    Fancybox.bind('a.about__history-slider-card-image-container', {
      
        placeFocusBack: false,
        Image: {
            zoom: false
        }
    });
}
