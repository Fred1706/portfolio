import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import Paralaxe from './components/Paralaxe';


class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    new Paralaxe();
    new ComponentFactory();
    document.documentElement.classList.add('has-js');
    
    
  }


 

  
}
new Main();
