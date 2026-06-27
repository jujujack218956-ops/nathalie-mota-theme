const boutonPlus = document.querySelector('.load-more');
boutonPlus.addEventListener('click', function (e) {
  e.preventDefault();
  let dataOffset = parseInt(boutonPlus.dataset.offset, 10);
  fetch(`${nathalie_mota_home.rest_url}wp/v2/photo?per_page=8&offset=${dataOffset}`)
    .then(response => {
      const total = parseInt(response.headers.get('X-WP-Total'), 10);
      return response.json().then(data => ({ data, total }));
    })
    .then(({ data, total }) => {
      if (dataOffset < total) {
        const homePhotos = document.querySelector('.home-photos');
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

        dataOffset += 8;
        boutonPlus.dataset.offset = dataOffset;
      }
      if (dataOffset >= total) {
        boutonPlus.style.display = 'none';
      }
    });
});

