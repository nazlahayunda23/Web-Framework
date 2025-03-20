      // Add active class to current page link
      document.addEventListener('DOMContentLoaded', function() {
        const currentLocation = location.pathname;
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
          if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        
        // Hamburger menu animation
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const navbarCollapse = document.getElementById('navbarNav');
        
        hamburgerMenu.addEventListener('click', function() {
          this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });
        
        // Close the navbar when a link is clicked on mobile
        if (window.innerWidth < 992) {
          const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
          
          navLinks.forEach(link => {
            link.addEventListener('click', () => {
              const navbarCollapse = document.getElementById('navbarNav');
              const bsCollapse = new bootstrap.Collapse(navbarCollapse);
              bsCollapse.hide();
            });
          });
        }
      });