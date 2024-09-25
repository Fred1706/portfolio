import Swiper from 'swiper/bundle';
import { Controller } from 'swiper/modules';

export default class Carrousel {
  constructor(element) {
    this.element = element;
    this.options1 = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 50,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
    },
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };


    this.options2 = {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 500,
      effect: "fade",
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

    
    const premierSwiper = document.querySelector('.swiper1')
    const deuxiemeSwiper = document.querySelector('.swiper2')
    

    const swiper1 = new Swiper(premierSwiper, this.options1);

    const swiper2 = new Swiper(deuxiemeSwiper, this.options2);

    
    
    swiper1.controller.control = swiper2;


    

  

   
    
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
