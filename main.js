/* Suhyeok Han — Global Scripts */
document.addEventListener('DOMContentLoaded', () => {
  /* Active nav */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
