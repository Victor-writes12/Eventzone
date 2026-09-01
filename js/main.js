// Eventzone.ng — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {

  // ---- Preloader ----
  var preloader = document.getElementById('preloader');
  if (preloader) {
    var hidden = false;
    var hide = function () {
      if (hidden) return;
      hidden = true;
      preloader.classList.add('done');
    };
    var start = Date.now();
    var minShow = 500;
    var reveal = function () {
      var elapsed = Date.now() - start;
      var wait = Math.max(0, minShow - elapsed);
      setTimeout(hide, wait);
    };
    // page structure and content are what matter for a usable view;
    // don't wait on slow external fonts/icons over a weak connection
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      reveal();
    } else {
      document.addEventListener('DOMContentLoaded', reveal);
    }
    // hard ceiling so a very slow connection never leaves it stuck
    setTimeout(hide, 1800);
  }

  // ---- Mobile nav ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Header shadow on scroll ----
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 6px 18px rgba(36,27,47,0.08)' : 'none';
    });
  }

  // ---- Project filter (projects page) ----
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        projectCards.forEach(function (card) {
          var match = filter === 'all' || card.getAttribute('data-category') === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // ---- Contact form (front end only, no backend wired up yet) ----
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-status');
      if (note) {
        note.textContent = 'Thank you, your message has been received; our team will reply within one business day.';
        note.style.color = '#0D4F4E';
      }
      form.reset();
    });
  }

  // ---- Footer year ----
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

});
