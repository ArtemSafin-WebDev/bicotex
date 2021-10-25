import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function animation() {
    const intro = document.querySelector('.intro');
    const process = document.querySelector('.process');

    const ballsCount = 10;

    const ballsAnimationDuration = 70;

    let delayFactor = ballsAnimationDuration / ballsCount;

    const shapes = Array.from(document.querySelectorAll('.intro__video-shape'));

    shapes.forEach(shape => {
        const balls = Array.from(shape.querySelectorAll('.intro__video-shape-ball'));
        const path = shape.querySelector('.intro__video-shape-path');
        const tl = gsap.timeline({
            paused: true
        });

        balls.forEach((ball, ballIndex) => {
            let tween = gsap.to(
                ball,
                {
                    motionPath: {
                        path: path,
                        align: path,
                        autoRotate: true,
                        alignOrigin: [0.5, 0.5]
                    },
                    repeat: -1,
                    fromCurrent: true,
                    duration: ballsAnimationDuration,
                    ease: 'none'
                },
                0
            );

            tl.add(tween, ballIndex * delayFactor);
        });

        tl.time(ballsAnimationDuration).play();
    });

    if (intro && process) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.intro__content',
                start: 'top top+=80',
                scrub: true,
                endTrigger: process,
                end: 'center center',
                pin: '.intro__video-pinned-element',
                pinSpacing: false
            }
        });

        tl.to('.intro__heading', {
            autoAlpha: 0,
            duration: 0.2
        })
            .to(
                '.intro__numbers',
                {
                    autoAlpha: 0,
                    duration: 0.2
                },
                0
            )
            .to(
                '.intro__video',
                {
                    scale: 0,
                    duration: 1
                },
                0
            )
            .to(
                '.intro__video-inner',
                {
                    autoAlpha: 0,
                    duration: 0.3
                },
                '-=0.8'
            )
            .to(
                '.intro__video',
                {
                    autoAlpha: 0,
                    duration: 0.3
                },
                '-=0.3'
            )

            .to(
                '.intro__video-large-shape',
                {
                    scale: 0,
                    duration: 1
                },
                0
            )
            .to(
                '.intro__video-large-shape path',
                {
                    stroke: '#FF772B',
                    duration: 0.3
                },
                '<'
            )
            .to(
                '.intro__video-medium-shape',
                {
                    scale: 0,
                    duration: 1
                },
                0
            )
            .to(
                '.intro__video-medium-shape path',
                {
                    stroke: '#FF772B',
                    duration: 0.3
                },
                '<'
            )
            .from('.process__col:nth-child(1)', {
                autoAlpha: 0,
                duration: 0.4
            })
            .from(
                '.process__main-heading',
                {
                    autoAlpha: 0,
                    duration: 0.4
                },
                '<'
            )
            .from(
                '.process__slider-images-circle',
                {
                    scale: 0,
                    duration: 0.4
                },
                '<'
            )
            .from(
                '.process__slider-images-outer-shell-blob',
                {
                    autoAlpha: 0,
                    duration: 0.4
                },
                '<'
            );
    }
}
