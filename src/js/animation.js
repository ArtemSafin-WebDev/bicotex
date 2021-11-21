import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function animation() {
    if (window.matchMedia('(max-width: 640px)').matches) return;
    
    const intro = document.querySelector('.intro');
    const process = document.querySelector('.process');

  

    const ballsAnimationDuration = 70;

  

    const shapes = Array.from(document.querySelectorAll('.intro__video-shape'));

    shapes.forEach(shape => {
        const balls = Array.from(shape.querySelectorAll('.intro__video-shape-ball'));

        const ballsCount = balls.length;
        let delayFactor = ballsAnimationDuration / ballsCount;
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
                        alignOrigin: [0.5, 0.5],
                        fromCurrent: true
                    },
                    repeat: -1,
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
       
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.intro__content',
        //         start: 'top top+=120',
        //         scrub: true,
        //         endTrigger: process,
        //         end: 'center center',
               
        //     }
        // });

        // tl.to('.intro__heading', {
        //     autoAlpha: 0,
        //     duration: 0.2
        // })
        //     .to(
        //         '.intro__numbers',
        //         {
        //             autoAlpha: 0,
        //             duration: 0.2
        //         },
        //         0
        //     )
        //     .to(
        //         '.intro__video',
        //         {
        //             scale: 0,
        //             duration: 1
        //         },
        //         0
        //     )
        //     .to(
        //         '.intro__video-inner',
        //         {
        //             autoAlpha: 0,
        //             duration: 0.3
        //         },
        //         '-=0.8'
        //     )
        //     .to(
        //         '.intro__video',
        //         {
        //             autoAlpha: 0,
        //             duration: 0.3
        //         },
        //         '-=0.3'
        //     )

        //     .to(
        //         '.intro__video-large-shape',
        //         {
        //             scale: 0,
        //             duration: 1
        //         },
        //         0
        //     )
        //     .to(
        //         '.intro__video-large-shape path',
        //         {
        //             stroke: '#FF772B',
        //             duration: 0.3
        //         },
        //         '<'
        //     )
        //     .to(
        //         '.intro__video-medium-shape',
        //         {
        //             scale: 0,
        //             duration: 1
        //         },
        //         0
        //     )
        //     .to(
        //         '.intro__video-medium-shape path',
        //         {
        //             stroke: '#FF772B',
        //             duration: 0.3
        //         },
        //         '<'
        //     )
           
           
    }


}
