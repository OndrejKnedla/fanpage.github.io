const floatingWindow = document.getElementById('floatingWindow');

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    floatingWindow.style.display = 'none';
  } else {
    floatingWindow.style.display = 'block';
  }
});