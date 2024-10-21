import gsap from 'gsap';

export default class Preload {
  constructor() {
    this.init();
  }

  init() {
    const time = { time: 0 };
    const preload = document.querySelector('.js-preload');

    if (localStorage.getItem('visit') == 'no') {
      preload.classList.toggle('preload-none');
    }

    if (localStorage.getItem('visit') != 'no') {
      localStorage.setItem('visit', 'yes');
    }

    if (localStorage.getItem('visit') == 'yes') {
      gsap.to(time, {
        time: 100,
        duration: 1.5,
        onUpdate: () => {
          const timer = document.querySelector('.js-timer');
          const percent = Math.round(time.time);

          timer.textContent = percent;
        },

        onComplete: () => {
          const preload = document.querySelector('.js-preload');

          preload.classList.toggle('preload-end');

          localStorage.setItem('visit', 'no');

          
        },
      });
    }
  }
}
