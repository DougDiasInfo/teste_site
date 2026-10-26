// Marca automaticamente a página atual na navegação.
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.dock-item, .navigation ul li a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('?')[0].split('#')[0];
    const active = href === currentPage || (!currentPage && href === 'index.html');
    link.classList.toggle('active', active);
    if (link.parentElement?.classList.contains('list')) link.parentElement.classList.toggle('active', active);
    link.addEventListener('click', () => { if ('vibrate' in navigator) navigator.vibrate(10); });
  });
});
