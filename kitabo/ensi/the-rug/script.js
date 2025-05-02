const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? '🌚' : '🌞';
});
