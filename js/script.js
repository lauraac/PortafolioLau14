/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /* sticky navbar */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /* remove toggle icon ann navbar when click navbar link (scroll)*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* scroll reveal  */
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.Accueil-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.Accueil-img, .apropos-content, .compétences-box, .contact form', {
  origin: 'bottom',
});
ScrollReveal().reveal('.Accueil-content h1, .apropos-img', {origin: 'left'});
ScrollReveal().reveal('.Accueil-content p, .apropos-content', {origin: 'right'});

/* typed js */
const typed = new Typed('.multiple-text', {
  strings: ['Front-end Developer ', 'Senior Mobile Engineer'],
  typeSpeed: 100,
  backspeed: 100,
  backDelay: 1000,
  loop: true,
});

/* validacion de formulario */

document.getElementById('languageToggle').addEventListener('click', function() {
  // Alternar el idioma guardado en el cuerpo del documento para referencia global
  var currentLang = document.body.dataset.lang || 'es';
  var newLang = currentLang === 'es' ? 'en' : 'es';
  document.body.dataset.lang = newLang;  // Guardar el nuevo idioma en el cuerpo para uso global

  // Seleccionar todos los elementos que deberían cambiar de idioma
  var elements = document.querySelectorAll('.lang');

  elements.forEach(el => {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.type === 'submit') {
              // Actualizar el valor del botón de enviar
              el.value = el.dataset[newLang];
          } else {
              // Actualizar placeholders para inputs y textareas
              el.placeholder = el.dataset[newLang];
          }
      } else {
          // Actualizar el contenido de texto para otros elementos
          el.innerHTML = el.dataset[newLang];
      }

      // Actualizar el atributo de idioma del elemento
      el.dataset.lang = newLang;
  });
});


