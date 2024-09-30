import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Langages {
  constructor() {
    this.init();
  }

  init() {
    this.ligne();
    this.horizontalSCroll();
    this.competence();

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
          end: 'bottom top',
          scrub: true,
          once: true,
        },
      }
    );
  }

  horizontalSCroll() {
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
  }

  competence() {
    const container = document.querySelector('.js-competences');
    const list = document.querySelector('.js-competence');

    gsap.to(list, {
      top: 100,
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
      },
    });

    const observer2 = new IntersectionObserver(this.observeLi.bind(this), {
      rootMargin: '-80% 0px',
    });

    const li = document.querySelectorAll('.js-li');

    for (let i = 0; i < li.length; i++) {
      const nom = li[i];
      observer2.observe(nom);
    }
  }

  observeLi(entries) {
    console.log('li');

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('li-is-active');
      }
    }
  }
}
