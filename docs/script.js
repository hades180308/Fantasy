function vibrateElement() {
  const fairy = document.getElementById('fairyBox');
  fairy.style.animation = 'shake 0.2s infinite';
  setTimeout(() => {
    fairy.style.animation = 'float 3s ease-in-out infinite';
  }, 1000);
}
