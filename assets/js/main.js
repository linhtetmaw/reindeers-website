// Mobile menu
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections on scroll
if ('IntersectionObserver' in window) {
  const items = document.querySelectorAll('.section h2, .service, .case, .mini-case, .member, .stats li, .contact-card');
  items.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
}
