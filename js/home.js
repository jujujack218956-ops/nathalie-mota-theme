const boutonPlus = document.querySelector('.load-more');
const homePhotos = document.querySelector('.home-photos');

function chargerPhotos(offset, replace) {
  // 1. On lit l'état actuel des trois selects
  const order = document.querySelector('#filter-sort').value;
  const category = document.querySelector('#filter-category').value;
  const format = document.querySelector('#filter-format').value;

  // 2. On construit UNE seule URL, puis on y ajoute les filtres si besoin
  let url = `${nathalie_mota_home.rest_url}wp/v2/photo?per_page=8&offset=${offset}&order=${order}`;
  if (category) url += `&categorie=${category}`;
  if (format) url += `&format-photo=${format}`;

  // 3. Une seule requête serveur
  fetch(url)
    .then(response => {
      const total = parseInt(response.headers.get('X-WP-Total'), 10);
      return response.json().then(data => ({ data, total }));
    })
    .then(({ data, total }) => {
      if (replace) homePhotos.innerHTML = ''; // on vide seulement si filtre changé

      data.forEach(photo => {
        const photoBlock = document.createElement('div');
        photoBlock.classList.add('photo-block');
        photoBlock.innerHTML = `
          <a href="${photo.link}" class="photo-block__link">
            <img src="${photo.image_url}" alt="${photo.title.rendered}" class="photo-block__image" />
          </a>
          <p class="photo-block__reference">${photo.reference}</p>
          <p class="photo-block__category">${photo.categorie}</p>
        `;
        homePhotos.appendChild(photoBlock);
      });

      // 4. On met à jour l'offset et on cache le bouton s'il n'y a plus rien
      const nouvelOffset = offset + data.length;
      boutonPlus.dataset.offset = nouvelOffset;
      boutonPlus.style.display = (nouvelOffset >= total) ? 'none' : '';
    });
}

// Bouton « Charger plus » : on continue depuis l'offset courant, sans vider
boutonPlus.addEventListener('click', (e) => {
  e.preventDefault();
  chargerPhotos(parseInt(boutonPlus.dataset.offset, 10), false); // clic → replace = false
});

// Changement d'un filtre : on repart de zéro et on vide la grille
document.querySelectorAll('.filter select').forEach((select) => {
  select.addEventListener('change', () => chargerPhotos(0, true));// change → replace = true
});
