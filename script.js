// script.js

const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetPage = link.getAttribute('data-page');

    // Afficher la bonne page, cacher les autres
    pages.forEach(page => {
      if (page.id === targetPage) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });

    // Mettre à jour la classe active sur le menu
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

console.log("Bienvenue sur LookActu !");
