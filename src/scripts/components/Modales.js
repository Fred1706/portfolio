
export default class Modales{
    constructor(element){
        this.element = element
        this.init();
    }


    init(){

        

        this.element.addEventListener('click' , this.openModal.bind(this));

        const close = document.querySelector('.js-modal-close')

        close.addEventListener('click' , this.closeModal.bind(this));
    }



    openModal(){
       document.documentElement.classList.add('is-modal-open');

        

        const modalImg = document.querySelector('.js-modal-img');
        const modalCap = document.querySelector('.js-modal-caption');

        modalImg.src = this.element.src;
        modalCap.innerText = this.element.alt;
       
    }

    closeModal(){
        document.documentElement.classList.remove('is-modal-open');
 
        
     }
}