export default class Cursor {
  constructor() {
    this.init();
  }

  init() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    });

    // tous les projets dans une page
    const projetsPage = document.querySelectorAll('.projets-hover-page');

    for (let i = 0; i < projetsPage.length; i++) {
      const projet = projetsPage[i];

      projet.addEventListener('mouseover', (e) => {
        cursor.classList.add('cursor-hover-projet-page');
      });

      projet.addEventListener('mouseout', (e) => {
        cursor.classList.remove('cursor-hover-projet-page');
      });
    }

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



    const imgProjets = document.querySelectorAll('.hover-img');

    for (let i = 0; i < imgProjets.length; i++) {
      const img = imgProjets[i];

      img.addEventListener('mouseover', (e) => {
        cursor.classList.add('cursor-hover');
      });

      img.addEventListener('mouseout', (e) => {
        cursor.classList.remove('cursor-hover');
      });
    }
  }
}
