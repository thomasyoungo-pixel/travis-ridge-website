/* Travis Ridge — mobile navigation toggle */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('header');
  if (!toggle || !header) return;

  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu when a link is tapped or on Escape
  header.addEventListener('click', function (e) {
    if (e.target.closest('nav.links a')) {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
