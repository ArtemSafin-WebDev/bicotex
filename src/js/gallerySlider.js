import { Swiper, Thumbs, Navigation } from 'swiper';

Swiper.use([Thumbs, Navigation]);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    function initializeSlider(element) {
        const mainContainer = element.querySelector('.gallery-slider__main .swiper-container');
        const thumbsContainer = element.querySelector('.gallery-slider__thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 0,
            thumbs: {},
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.gallery-slider__arrow--next'),
                prevEl: element.querySelector('.gallery-slider__arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 4,
            threshold: 10,
            speed: 700,
            slideToClickedSlide: true,
            spaceBetween: 12,
            centerInsufficientSlides: window.matchMedia('(max-width: 640px)').matches ? false : true,
            breakpoints: {
                641: {
                    spaceBetween: 12,
                    slidesPerView: 10
                }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    }

    elements.forEach(element => {
        initializeSlider(element);
    });

    function initializeACFSlider($block) {
        console.log('Native slider element', $block[0]);
        initializeSlider($block[0]);
    }

    if (window.acf) {
        window.acf.addAction('render_block_preview/type=gallery-slider', initializeACFSlider);
    }
}
