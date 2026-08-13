// Revela cada tarjeta de operación al hacer scroll, en cascada según su orden.
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.opcard');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.i) * 90;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));
});