function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  
  updateClock();

  const themes = ['theme1', 'theme2', 'theme3'];
  let currentThemeIndex = 0;
  
  document.getElementById('theme-toggle').addEventListener('click', () => {
 
    document.body.classList.remove(themes[currentThemeIndex]);
  
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    document.body.classList.add(themes[currentThemeIndex]);
  });
  
  document.body.classList.add(themes[currentThemeIndex]);
  