import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import accordions from './accordions';
import modals from './modals';
import events from './events';
import brandsSlider from './brandsSlider';
import processImageSliders from './processImageSliders';
import animation from './animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from './imagesLoaded';
import fancybox from './fancybox';
import readMore from './readMore';
import processStages from './processStages';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    events();
    brandsSlider();
    processImageSliders();
    
    imagesLoaded();
    fancybox();
    readMore();
    processStages();

    animation();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    ScrollTrigger.refresh();
   
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
