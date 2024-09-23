export default class Cursor {
  constructor() {
    this.init();
  }

  init() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
    });

    // tous les projets
    const projets = document.querySelectorAll('.projets-hover');

    for (let i = 0; i < projets.length; i++) {
      const projet = projets[i];

      projet.addEventListener('mouseover', (e) => {
        
        cursor.classList.add('cursor-hover-projet');
      });

      projet.addEventListener('mouseout', (e) => {
        cursor.classList.remove('cursor-hover-projet');
      });
    }

    //tous les liens sauf les projets

    const links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      link.addEventListener('mouseover', (e) => {
        
        cursor.classList.add('cursor-hover');
      });

      link.addEventListener('mouseout', (e) => {
        cursor.classList.remove('cursor-hover');
      });
    }
  }
}
