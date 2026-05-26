document.addEventListener('DOMContentLoaded', function () {

  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuToggle = document.querySelector('.menu-toggle');

  // Fermeture via bouton close
  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', function () {
      modalOverlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Ouverture via clic sur contact
  const contactLink = document.querySelector('.contact-link a');
  if (contactLink && modalOverlay) {
    contactLink.addEventListener('click', function (e) {
      e.preventDefault();
      modalOverlay.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
    });
  }

  // Fermeture du modal au clic en dehors du contenu
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }
});