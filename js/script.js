function slider(anything) {
  const mainImage = document.querySelector('.one');
  mainImage.classList.add('fade');

  setTimeout(() => {
    mainImage.src = anything;
    mainImage.classList.remove('fade');
  }, 300);
}