document.addEventListener('DOMContentLoaded', function () {

  // Modale de contact
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuToggle = document.querySelector('.menu-toggle');

  // Ouverture via clic sur contact
  function openModal() {
    if (modalOverlay) modalOverlay.classList.add('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    // Fermer le menu mobile si ouvert pour afficher la modale sur mobile
    const mobilePanel = document.querySelector('.mobile-panel');
    const menuToggleBtn = document.querySelector('.menu-toggle');
    if (mobilePanel) mobilePanel.classList.remove('active');
    if (menuToggleBtn) menuToggleBtn.classList.remove('active');
  }

  const contactLinks = document.querySelectorAll('.contact-link a');
  contactLinks.forEach(function (contactLink) {
    if (contactLink && modalOverlay) {
      contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // empêche la propagation du clic
        openModal();
      });
    }
  });

  const contactPhoto = document.querySelectorAll('.contact-photo');
  contactPhoto.forEach(function (btn) {
    if (btn && modalOverlay) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // empêche la propagation du clic
        const ref = btn.dataset.ref;
        const refField = document.querySelector('[name="ref-photo"]');
        if (refField) {
          refField.value = ref;
        }
        openModal();
      });
    }
  });

  // Fermeture via bouton close
  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', function () {
      modalOverlay.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Fermeture de la modale au clic en dehors du contenu
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
  const navMobile = document.querySelector('.mobile-panel');
  const navMobileClose = document.querySelector('.menu-toggle-close');

  if (menuToggleButton && navMobile) {
    menuToggleButton.addEventListener('click', function () {
      const isExpanded = menuToggleButton.getAttribute('aria-expanded') === 'true';
      menuToggleButton.setAttribute('aria-expanded', !isExpanded);
      navMobile.classList.toggle('active');
      menuToggleButton.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Fermeture du menu mobile via bouton close
  if (navMobileClose && navMobile) {
    navMobileClose.addEventListener('click', function () {
      navMobile.classList.remove('active');
      menuToggleButton.setAttribute('aria-expanded', 'false');
    });
  }
});