(function () {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const modes = ['auto', 'light', 'dark'];

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(mode) {
    const activeMode = mode === 'auto' ? getSystemTheme() : mode;

    if (activeMode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    toggle.textContent = mode;
    localStorage.setItem('theme', mode);
  }

  const saved = localStorage.getItem('theme') || 'auto';
  applyTheme(saved);

  toggle.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'auto';
    const nextIndex = (modes.indexOf(current) + 1) % modes.length;
    applyTheme(modes[nextIndex]);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if ((localStorage.getItem('theme') || 'auto') === 'auto') {
      applyTheme('auto');
    }
  });
})();
