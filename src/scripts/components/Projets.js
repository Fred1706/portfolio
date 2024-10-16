import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Projets{
    constructor(){

        this.init();
        
    }



    init(){
        const container = document.querySelector('.js-horizontal');
        const containers = gsap.utils.toArray('.js-horizontals');

    gsap.to(containers, {
      xPercent: -100 * (containers.length - 1),
      
      scrollTrigger: {
        trigger: container,
        end: "+=" + (window.innerHeight * 7),
        pin: true,
        scrub: 1,
      },
    });



    }
}