// Function to highlight the active link when a section is in view
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let isSectionInView = false; // Flag to track if a section is in view
  
    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Check if the section is in view
      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
        isSectionInView = true; // A section is in view
        // Set the corresponding nav link to active
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  
    // If no section is in view, set the Home link as active
    if (!isSectionInView) {
      navLinks.forEach(link => {
        if (link.id === 'home') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }
  
  // Function to handle the sticky header
  function handleStickyHeader() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('fixed'); // Make header fixed when scrolling down
    } else {
      header.classList.remove('fixed'); // Revert to default when at the top
    }
  }
  
  // Listen for scroll events to call the functions
  window.addEventListener('scroll', () => {
    setActiveNavLink();
    handleStickyHeader();
  });
  
  // Initial call to check if a section is already in view on page load
  setActiveNavLink();
  handleStickyHeader();
  