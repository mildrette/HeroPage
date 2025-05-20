window.addEventListener('DOMContentLoaded', () => {
  const profilePanel = document.querySelector('.profile-panel');
  setTimeout(() => {
    profilePanel.style.opacity = 1;
  }, 100);

  const searchInput = document.querySelector('.nav-right input');
  const aboutLinks = document.querySelectorAll('.about-links li');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    aboutLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      link.style.display = text.includes(query) ? '' : 'none';
    });
  });
});
