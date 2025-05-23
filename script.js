// Simple contact form feedback (demo only, no backend)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Thank you for your message!';
  this.reset();
  setTimeout(() => {
    document.getElementById('form-status').textContent = '';
  }, 3000);
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});