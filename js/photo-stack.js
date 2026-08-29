(function () {
  const stack = document.getElementById('photo-stack');
  if (!stack) return;

  const photos = Array.from(stack.querySelectorAll('img'));
  if (photos.length < 2) return;

  let currentIndex = 0;
  photos[currentIndex].classList.add('active');

  function showNext() {
    photos[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % photos.length;
    photos[currentIndex].classList.add('active');
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(showNext, 7000);
  }
})();
