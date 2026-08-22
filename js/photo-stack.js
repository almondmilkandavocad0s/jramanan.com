(function () {
  const stack = document.getElementById('photo-stack');
  if (!stack) return;

  const photos = Array.from(stack.querySelectorAll('img'));
  if (photos.length < 2) return;

  let currentIndex = Math.floor(Math.random() * photos.length);
  photos[currentIndex].classList.add('active');

  function showNext() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * photos.length);
    } while (nextIndex === currentIndex && photos.length > 1);

    photos[currentIndex].classList.remove('active');
    photos[nextIndex].classList.add('active');
    currentIndex = nextIndex;
  }

  setInterval(showNext, 7000);
})();
