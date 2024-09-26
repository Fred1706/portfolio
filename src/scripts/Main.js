import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import Langages from './components/langages';


class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    new ComponentFactory();
    new Langages();
    
    
   

    document.documentElement.classList.add('has-js');

   
  }




  
 
}
new Main();
