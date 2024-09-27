export default class Langages {
  constructor() {
    this.init();
  }

  init() {
    
   //https://gsap.com/community/forums/topic/37327-animating-a-simple-line-on-scroll/

 

    

    
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
