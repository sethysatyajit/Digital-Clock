function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  const themeToggleButton = document.getElementById('themeToggle');
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.textContent = document.body.classList.contains('dark-mode') 
      ? 'Switch to Light Mode' 
      : 'Switch to Dark Mode';
  });
  
  const colorCycleButton = document.getElementById('colorCycle');
  colorCycleButton.addEventListener('click', () => {
    const colors = ['#ff007a', '#4caf50', '#ff5722', '#2196f3', '#9c27b0'];
    document.documentElement.style.setProperty('--glow-color', colors[Math.floor(Math.random() * colors.length)]);
  });
  
  setInterval(updateClock, 1000);
  updateClock();
  