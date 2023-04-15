// Modo oscuro
const botonModoOscuro = document.querySelector("#modo-oscuro");

botonModoOscuro.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Cargar noticias desde un archivo JSON
fetch('noticias.json')
  .then(response => response.json())
  .then(data => {
    // Agregar noticias a la sección de noticias
    const noticiasSection = document.querySelector('.noticias');
    data.forEach(noticia => {
      const article = document.createElement('article');
      article.classList.add('articulo');
      article.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p>${noticia.resumen}</p>
        <a href="${noticia.url}">Leer más</a>
      `;
      noticiasSection.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Error al cargar las noticias', error);
  });

// Mostrar/ocultar menú de navegación en dispositivos móviles
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('nav ul');
menuButton.addEventListener('click'), () => {
 
}