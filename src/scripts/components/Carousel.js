import Swiper from 'swiper/bundle';

export default class Carrousel {
  constructor(element) {
    this.element = element;
    this.options = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 50,
      mousewheel: true,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  init() {
    
    this.setOptions();
    let swiper = new Swiper(this.element, this.options);
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = 'true';
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        this.element.dataset.slides || this.options.slidesPerView;
    }

    if ('gap' in this.element.dataset) {
      this.options.spaceBetween =
        this.element.dataset.gap || this.options.spaceBetween;
    }

    if ('fade' in this.element.dataset) {
      this.options.effect = 'fade'
      
    }
  }
}
