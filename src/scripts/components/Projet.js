import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default class Projet{
    constructor(){


        this.init()
    }

    init(){
    const container = document.querySelector('.js-horizontal');
    const containers = gsap.utils.toArray('.js-horizontals');

    gsap.to(containers, {
      xPercent: -100 * (containers.length - 1),
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
      },
    });



    const container2 = document.querySelector('.js-horizontal2');
    const containers2 = gsap.utils.toArray('.js-horizontals2');

    gsap.to(containers2, {
      xPercent: -100 * (containers2.length - 1),
      scrollTrigger: {
        trigger: container2,
        pin: true,
        scrub: 1,
      },
    });
    }
    
}