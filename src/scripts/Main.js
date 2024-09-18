import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import Preload from './components/Preload';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    new ComponentFactory();
    new Preload();
   

    document.documentElement.classList.add('has-js');
  }



 
}
new Main();
