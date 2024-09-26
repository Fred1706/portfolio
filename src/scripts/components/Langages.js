export default class Langages {
  constructor() {
    this.init();
  }

  init() {

    const observer = new IntersectionObserver(this.observe.bind(this), {
      rootMargin: '-45% 0px',
    });

    const langages = document.querySelectorAll('.langage');

    for (let i = 0; i < langages.length; i++) {
      const langage = langages[i];
      observer.observe(langage);
    }
  }

  observe(entries) {
    
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const target = entry.target;

        if(entry.isIntersecting){

            target.classList.add('is-active');
    
        }
    }

    


    
  }
}
