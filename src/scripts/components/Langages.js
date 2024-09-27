import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Langages {
  constructor() {
    this.init();
  }

  init() {
    //https://gsap.com/community/forums/topic/37327-animating-a-simple-line-on-scroll/

    this.ligne();

    const observer = new IntersectionObserver(this.observe.bind(this), {
      rootMargin: '-45% 0px',
    });

    const langages = document.querySelectorAll('.js-langage');

    for (let i = 0; i < langages.length; i++) {
      const langage = langages[i];
      observer.observe(langage);
    }
  }

  observe(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
      }
    }
  }

  ligne() {
    const line = document.querySelector('.js-line');
    const lineWrapper = document.querySelector('.js-line-wrapper');

    
    console.log(lineWrapper.offsetHeight);

    gsap.set(line, { transformOrigin: 'center top', xPercent: -50, x: 0 });

    gsap.fromTo(
      line,
      {
        scaleY: 0,
      },
      {
        scaleY: 1.35,
        ease: 'none',
        scrollTrigger: {
          trigger: lineWrapper,
          start: 'top center',
          end:"bottom top",
          scrub: true,
          once:true,
        },
      }
    );
  }
}
