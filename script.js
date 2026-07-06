/* Samarbetsbolaget – liten delad skriptfil */

// Mobilmeny
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Håll årtalet i footern aktuellt
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

  // Kontaktformulär: skicka till rätt Netlify-formulär utifrån vald mottagare.
  // Utan JS går allt till "kontakt-patrick" (formulärets standardnamn) – inget går förlorat.
  var form = document.getElementById('kontaktform');
  if (form) {
    var select = form.querySelector('#mottagare');
    var formName = form.querySelector('input[name="form-name"]');
    function sync() {
      if (!select || !formName) return;
      formName.value = select.value === 'syrene' ? 'kontakt-syrene' : 'kontakt-patrick';
    }
    if (select) { select.addEventListener('change', sync); }
    form.addEventListener('submit', sync);
    sync();
  }
});
