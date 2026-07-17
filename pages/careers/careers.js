document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('../../header/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
      const script = document.createElement('script');
      script.src = '../../header/header.js';
      document.body.appendChild(script);
    });

  // Load footer
  fetch('../../footer/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
      const script = document.createElement('script');
      script.src = '../../footer/footer.js';
      document.body.appendChild(script);
    });

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Page header
    gsap.from('.page-header h1', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3
    });
    gsap.from('.page-header p', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });
    gsap.from('.page-header .section-tag', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.1
    });

    // Job cards
    document.querySelectorAll('.job-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        delay: index * 0.08
      });
    });
  }
});