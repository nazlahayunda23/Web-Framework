document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navbarCollapse = document.getElementById('navbarNav');

  // Tambahkan kelas 'active' ke link halaman saat ini
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Toggle aria-expanded pada hamburger menu
  hamburgerMenu.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
  });

  // Event delegation untuk menutup menu di layar kecil
  document.querySelector('.navbar-nav').addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-link') && window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});
