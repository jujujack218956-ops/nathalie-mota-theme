document.addEventListener('DOMContentLoaded', function () {

  // Modale de contact
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuToggle = document.querySelector('.menu-toggle');

  // Ouverture via clic sur contact
  const contactLink = document.querySelector('.contact-link a');
  if (contactLink && modalOverlay) {
    contactLink.addEventListener('click', function (e) {
      e.preventDefault();
      modalOverlay.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
    });
  }

  // Fermeture via bouton close
  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', function () {
      modalOverlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
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


  // Menu mobile
  const menuToggleButton = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navMobileClose = document.querySelector('.close-icon');

  if (menuToggleButton && navMobile) {
    menuToggleButton.addEventListener('click', function () {
      const isExpanded = menuToggleButton.getAttribute('aria-expanded') === 'true';
      menuToggleButton.setAttribute('aria-expanded', !isExpanded);
      navMobile.classList.toggle('active');
      menuToggleButton.classList.toggle('active');
    });
  }

  // Fermeture du menu mobile via bouton close
  if (navMobileClose && navMobile) {
    navMobileClose.addEventListener('click', function () {
      navMobile.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  }

});