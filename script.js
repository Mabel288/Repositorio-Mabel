// Elementos del DOM
const searchInput = document.getElementById('search');
const postsContainer = document.getElementById('posts');
const listViewButton = document.getElementById('view-list');
const cardsViewButton = document.getElementById('view-cards');
const addArticleForm = document.getElementById('add-article-form');
const articleTitleInput = document.getElementById('article-title');
const articleContentInput = document.getElementById('article-content');

// Función de búsqueda
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    const title = post.querySelector('.post-title').textContent.toLowerCase();
    post.style.display = title.includes(query) ? '' : 'none';
  });
});

// Alternancia entre vistas
listViewButton.addEventListener('click', () => {
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    post.classList.remove('card-view');
    post.classList.add('col-12');
  });
});

cardsViewButton.addEventListener('click', () => {
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    post.classList.add('card-view');
    post.classList.remove('col-12');
  });
});

// Agregar un nuevo artículo
addArticleForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = articleTitleInput.value.trim();
  const content = articleContentInput.value.trim();

  if (!title || !content) {
    alert('Por favor, completa ambos campos.');
    return;
  }

  // Crear un nuevo artículo y añadirlo al contenedor
  const newArticle = document.createElement('article');
  newArticle.classList.add('post', 'col-12', 'mb-3');
  newArticle.innerHTML = `
    <h3 class="post-title">${title}</h3>
    <p>${content}</p>
  `;
  postsContainer.appendChild(newArticle);

  // Limpiar el formulario y cerrar el modal
  articleTitleInput.value = '';
  articleContentInput.value = '';
  const modal = bootstrap.Modal.getInstance(document.getElementById('addArticleModal'));
  modal.hide();
});
