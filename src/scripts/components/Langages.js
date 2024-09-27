export default class Langages {
  constructor() {
    this.init();
  }

  init() {
    
   

    const middle = window.innerHeight / 2;
    const line = document.querySelector('.js-line');
    const section = document.querySelector('.langages');
    const htmlMiddke = section.innerHeight;
    const info = window.scrollY;

    

    
    line.style.height = middle + 'px';


    section.addEventListener('scroll' , (e) =>{

      console.log(e.target.scrollTop)
    } 
    )


    console.log(window.scrollTop)


   

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

        if(entry.isIntersecting){

            target.classList.add('is-active');
    
        }
    }

    


    
  }
}
