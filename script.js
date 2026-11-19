"use strict";

const translations = {
  "es": {
    "skip": "Saltar al contenido",
    "navAbout": "Sobre mí",
    "navExperience": "Experiencia",
    "navProjects": "Proyectos",
    "navCerts": "Certificaciones",
    "navContact": "Contacto",
    "heroEyebrow": "ANDROID · REACT NATIVE · ANDROID TV",
    "heroLead": "Desarrollo aplicaciones móviles seguras, escalables y listas para producción.",
    "quote": "“Cada desafío es una oportunidad para aprender, adaptarme y llegar más lejos.”",
    "viewProjects": "Ver proyectos",
    "contactMe": "Contáctame",
    "aboutEyebrow": "PERFIL PROFESIONAL",
    "aboutTitle": "Desarrollo de software que conecta tecnología, innovación y personas",
    "aboutSubtitle": "Transformo ideas en soluciones digitales escalables, funcionales y centradas en el usuario.",
    "aboutMobileTitle": "Desarrollo Mobile",
    "aboutQualityTitle": "Calidad y producción",
    "aboutObjectiveTitle": "Mi objetivo profesional",
    "aboutSectionTitle": "Más allá del código",
    "creativityTitle": "Creatividad y diseño",
    "creativityText": "Disfruto imaginar, diseñar y construir aplicaciones desde una idea hasta convertirlas en productos reales. Me interesa especialmente la experiencia de usuario (UX) y la calidad de cada detalle.",
    "perseveranceTitle": "Perseverancia y resolución de problemas",
    "perseveranceText": "Los desafíos técnicos me motivan a investigar, aprender y encontrar soluciones. No me doy por vencida fácilmente; cuando algo parece imposible, busco otra manera de conseguirlo.",
    "learningTitle": "Aprendizaje y crecimiento",
    "learningText": "Me gusta mantenerme actualizada, explorar nuevas tecnologías y utilizar herramientas de inteligencia artificial para mejorar mis procesos de desarrollo, siempre con criterio y validación.",
    "goalTitle": "Mi siguiente gran objetivo",
    "goalText": "Seguir creciendo profesionalmente, fortalecer mi inglés hasta alcanzar un nivel que me permita colaborar con equipos internacionales y participar en proyectos de impacto global.",
    "philosophyTitle": "Mi filosofía",
    "philosophyQuote": "Que alguien diga que no se puede no significa que sea imposible. Cada desafío es una oportunidad para aprender, crear y demostrar que sí se puede.",
    "philosophyClosing": "Mi objetivo no es solamente escribir código, sino crear tecnología que haga la diferencia.",
    "aiTitle": "IA aplicada al desarrollo",
    "aiText": "Utilizo herramientas de inteligencia artificial como apoyo para investigar, analizar código, generar pruebas y mejorar mi productividad, siempre revisando y validando los resultados.",
    "languageTitle": "Idiomas",
    "languageText": "Español: nativo. Inglés: nivel básico (A1), actualmente en aprendizaje. Disponible para comunicación técnica en español.",
    "cvTitle": "Currículum",
    "cvText": "Descarga mi trayectoria profesional en el idioma que prefieras.",
    "experienceEyebrow": "TRAYECTORIA",
    "experienceTitle": "Experiencia profesional",
    "macropayDates": "Ingeniera Mobile Senior · Ago 2024 – Actualidad",
    "macropayText": "Desarrollo y mantenimiento de aplicaciones Android en producción, integración de SDKs y servicios, notificaciones, mejoras de seguridad, pruebas y publicación de versiones.",
    "servifacilDates": "Ingeniera Mobile Senior · Oct 2023 – Ago 2024",
    "servifacilText": "Desarrollo y mantenimiento de soluciones móviles y colaboración con equipos multidisciplinarios.",
    "zubaleDates": "Ingeniera Mobile · Jul 2022 – Jul 2023",
    "zubaleText": "Desarrollo móvil con React Native y TypeScript, integración de funcionalidades y herramientas de depuración.",
    "projectsEyebrow": "TRABAJO DESTACADO",
    "projectsTitle": "Proyectos y especialidades",
    "projectsNote": "Algunos desarrollos profesionales son privados; aquí describo mis aportaciones sin exponer código ni información confidencial.",
    "project1Title": "Aplicaciones Android en producción",
    "project1Text": "Evolución de funcionalidades, arquitectura, persistencia con Room, notificaciones push y monitoreo con Crashlytics.",
    "project2Title": "Publicación y calidad",
    "project2Text": "Preparación de versiones, validación con QA, corrección de incidencias y mantenimiento de aplicaciones publicadas en Google Play.",
    "project3Title": "Experiencias multiplataforma",
    "project3Text": "Desarrollo de interfaces y funcionalidades para Android, Android TV y aplicaciones con React Native.",
    "certEyebrow": "APRENDIZAJE CONTINUO",
    "certTitle": "Certificaciones y logros",
    "contactEyebrow": "HABLEMOS",
    "contactTitle": "Construyamos algo valioso",
    "contactText": "Estoy abierta a oportunidades profesionales y proyectos de desarrollo móvil. Escríbeme por correo, llámame o utiliza el formulario para ponerte en contacto conmigo.",
    "formName": "Nombre",
    "formEmail": "Correo electrónico",
    "formMessage": "Mensaje",
    "formNameInvalid": "Escribe tu nombre.",
    "formEmailInvalid": "Escribe un correo electrónico válido.",
    "formMessageInvalid": "Escribe un mensaje de al menos 10 caracteres, sin contar espacios al inicio o al final.",
    "formSend": "Enviar mensaje",
    "backTop": "Volver arriba ↑",
    "aboutText": ", con experiencia en la creación, evolución y mantenimiento de aplicaciones y soluciones digitales.",
    "aboutExperience": ", así como conocimientos de desarrollo web, integración de APIs REST, comunicación con servicios backend y diseño de arquitecturas de software escalables y mantenibles.",
    "aboutApproach": "Me apasiona transformar necesidades de negocio en productos digitales intuitivos, seguros y eficientes, combinando pensamiento analítico, creatividad y atención a la experiencia del usuario.",
    "menuOpen": "Abrir menú",
    "menuClose": "Cerrar menú",
    "certView": "Vista ampliada del certificado",
    "certClose": "Cerrar certificado",
    "certExpand": "Ampliar",
    "technologies": "Tecnologías",
    "navLabel": "Principal",
    "homeLabel": "LAC inicio",
    "pageTitle": "LAC | Desarrolladora de Software Senior",
    "pageDescription": "Portafolio de Laura Alfonso Contreras, Senior Software Developer especializada en desarrollo Mobile, Android, Kotlin, Jetpack Compose y React Native.",
    "heroRole": "Desarrolladora de Software",
    "heroSeniority": "Senior",
    "aboutIntro": "Soy ",
    "aboutIdentity": "Laura Alfonso Contreras, Senior Software Developer especializada en desarrollo Mobile",
    "aboutExperienceIntro": "Mi trayectoria incluye el desarrollo de aplicaciones para ",
    "aboutPlatforms": "Android, Android TV y React Native",
    "aboutStackIntro": "Trabajo con tecnologías como ",
    "aboutStack": "Kotlin, Jetpack Compose, JavaScript, HTML, CSS, Firebase y Git",
    "aboutArchitecture": ", aplicando principios de Clean Architecture, MVVM y buenas prácticas de ingeniería de software.",
    "aboutServices": "Tengo experiencia integrando servicios externos, SDKs, sistemas de autenticación, notificaciones push, persistencia local y funcionalidades conectadas con plataformas backend. También participo en procesos de pruebas, optimización, resolución de incidencias y publicación de aplicaciones en ",
    "aboutObjective": "Mi objetivo es seguir creciendo profesionalmente y contribuir a proyectos tecnológicos internacionales, aportando soluciones de calidad, capacidad de adaptación y una mentalidad de mejora continua.",
    "cvSpanish": "CV en español",
    "cvEnglish": "CV en inglés",
    "projectAndroidAlt": "Ilustración futurista de desarrollo Android",
    "projectReleaseAlt": "Ilustración futurista de publicación de aplicaciones",
    "projectCrossAlt": "Ilustración futurista de Android TV y dispositivos móviles",
    "robotLabel": "Animación futurista de robot metálico rosa y azul",
    "certFrontend": "Desarrollo Web Front-End",
    "certNative": "React Native: Aplicaciones nativas para iOS y Android",
    "certPython": "Máster en Python 3.x: De 0 a experto con práctica",
    "certDjango": "Curso práctico de Django: Desarrollo Web Backend con Python",
    "projectQualityStack": "Google Play · Pruebas de calidad · Git · Crashlytics",
    "skillRest": "APIs REST",
    "certificateAlt1": "Certificado Samsung Knox Professional",
    "certificateAlt2": "Certificado Samsung Knox Associate",
    "certificateAlt3": "Certificado Android Enterprise Professional",
    "certificateAlt4": "Certificado Android Enterprise Associate",
    "certificateAlt5": "Diploma de Desarrollo Web Front-End de Laboratoria",
    "certificateAlt6": "Certificado React Native para iOS y Android",
    "certificateAlt7": "Certificado Máster en Python 3.x",
    "certificateAlt8": "Certificado Desarrollo Web Backend con Django",
    "certificateAlt9": "Certificado JavaScript",
    "certificateAlt10": "Certificado CSS",
    "certificateAlt11": "Certificado HTML",
    "certificateAlt12": "Certificado React y Redux",
    "certificateAlt13": "Certificado SQL",
    "certificateAlt14": "Certificado jQuery",
    "contactEmail": "Correo principal",
    "contactAlternate": "Correo alternativo",
    "contactPhone": "Teléfono",
    "formDelivery": "Tu nombre, correo y mensaje se procesan mediante FormSubmit para contactar a Laura, sin salir de esta página.",
    "formSubject": "Nuevo contacto desde el portafolio de Laura Alfonso",
    "formSending": "Enviando…",
    "formPending": "Estamos enviando tu mensaje. Espera un momento.",
    "formSuccess": "FormSubmit aceptó tu mensaje. ¡Gracias por contactarme!",
    "formError": "No se pudo confirmar el envío. Tu texto se conserva; puedes intentarlo más tarde o escribirme directamente por correo.",
    "formActivation": "El formulario aún requiere activar el correo de destino en FormSubmit. No se ha confirmado el envío. Por favor, contacta a Laura directamente por correo.",
    "formUncertain": "¡Gracias por escribir! El servicio no confirmó el envío. Conservamos tu mensaje; espera unos minutos antes de volver a intentarlo para evitar duplicados.",
    "formUnavailable": "Para enviar sin salir de esta página, activa JavaScript o utiliza los enlaces de correo.",
    "formLocal": "Abre el portafolio desde su dirección web para enviar el mensaje. También puedes usar los enlaces de correo."
  },
  "en": {
    "skip": "Skip to content",
    "navAbout": "About",
    "navExperience": "Experience",
    "navProjects": "Projects",
    "navCerts": "Certifications",
    "navContact": "Contact",
    "heroEyebrow": "ANDROID · REACT NATIVE · ANDROID TV",
    "heroLead": "I build secure, scalable, production-ready mobile applications.",
    "quote": "“Every challenge is an opportunity to learn, adapt, and go further.”",
    "viewProjects": "View projects",
    "contactMe": "Contact me",
    "aboutEyebrow": "PROFESSIONAL PROFILE",
    "aboutTitle": "Software development that connects technology, innovation, and people",
    "aboutMobileTitle": "Mobile Development",
    "aboutQualityTitle": "Quality and Production",
    "aboutObjectiveTitle": "My Professional Objective",
    "aboutText": ", with experience creating, evolving, and maintaining applications and digital solutions.",
    "aiTitle": "AI-assisted development",
    "aiText": "I use artificial intelligence tools to support research, code analysis, test creation, and productivity, while reviewing and validating the results.",
    "languageTitle": "Languages",
    "languageText": "Spanish: native. English: beginner (A1), currently learning. Comfortable with technical communication in Spanish.",
    "cvTitle": "Resume",
    "cvText": "Download my professional resume in your preferred language.",
    "experienceEyebrow": "CAREER",
    "experienceTitle": "Professional experience",
    "macropayDates": "Senior Mobile Engineer · Aug 2024 – Present",
    "macropayText": "Development and maintenance of production Android apps, SDK and service integrations, notifications, security improvements, testing, and releases.",
    "servifacilDates": "Senior Mobile Engineer · Oct 2023 – Aug 2024",
    "servifacilText": "Development and maintenance of mobile solutions, working with cross-functional teams.",
    "zubaleDates": "Mobile Engineer · Jul 2022 – Jul 2023",
    "zubaleText": "React Native and TypeScript mobile development, feature integration, and debugging tools.",
    "projectsEyebrow": "SELECTED WORK",
    "projectsTitle": "Projects and specialties",
    "projectsNote": "Some professional work is proprietary; I describe my contributions without sharing confidential code or information.",
    "project1Title": "Production Android applications",
    "project1Text": "Feature development, architecture, Room persistence, push notifications, and Crashlytics monitoring.",
    "project2Title": "Releases and quality",
    "project2Text": "Release preparation, QA validation, issue resolution, and maintenance of Google Play applications.",
    "project3Title": "Cross-platform experiences",
    "project3Text": "Interfaces and features for Android, Android TV, and React Native applications.",
    "certEyebrow": "CONTINUOUS LEARNING",
    "certTitle": "Certifications and achievements",
    "contactEyebrow": "LET’S CONNECT",
    "contactTitle": "Let’s build something valuable",
    "contactText": "I am open to professional opportunities and mobile development projects. Email me, call me, or use the form to get in touch.",
    "formName": "Name",
    "formEmail": "Email",
    "formMessage": "Message",
    "formNameInvalid": "Enter your name.",
    "formEmailInvalid": "Enter a valid email address.",
    "formMessageInvalid": "Enter a message of at least 10 characters, excluding leading and trailing spaces.",
    "formSend": "Send message",
    "backTop": "Back to top ↑",
    "aboutSubtitle": "I turn ideas into scalable, functional, user-centered digital solutions.",
    "aboutApproach": "I am passionate about turning business needs into intuitive, secure, and efficient digital products, combining analytical thinking, creativity, and attention to user experience.",
    "aboutExperience": ", along with knowledge of web development, REST API integration, communication with backend services, and the design of scalable, maintainable software architectures.",
    "aboutSectionTitle": "Beyond the code",
    "creativityTitle": "Creativity and design",
    "creativityText": "I enjoy imagining, designing, and building applications, taking an idea all the way to a real product. I am especially interested in user experience (UX) and the quality of every detail.",
    "perseveranceTitle": "Perseverance and problem solving",
    "perseveranceText": "Technical challenges motivate me to research, learn, and find solutions. I do not give up easily; when something seems impossible, I look for another way to make it happen.",
    "learningTitle": "Learning and growth",
    "learningText": "I enjoy staying up to date, exploring new technologies, and using artificial intelligence tools to improve my development processes, always applying sound judgment and validating the results.",
    "goalTitle": "My next big goal",
    "goalText": "To keep growing professionally, strengthen my English so I can collaborate with international teams, and contribute to projects with a global impact.",
    "philosophyTitle": "My philosophy",
    "philosophyQuote": "Just because someone says it cannot be done does not mean it is impossible. Every challenge is an opportunity to learn, create, and prove that it can be done.",
    "philosophyClosing": "My goal is not simply to write code, but to create technology that makes a difference.",
    "menuOpen": "Open menu",
    "menuClose": "Close menu",
    "certView": "Expanded certificate view",
    "certClose": "Close certificate",
    "certExpand": "Enlarge",
    "technologies": "Technologies",
    "navLabel": "Main",
    "homeLabel": "LAC home",
    "pageTitle": "LAC | Senior Software Developer",
    "pageDescription": "Portfolio of Laura Alfonso Contreras, Senior Software Developer specializing in mobile development, Android, Kotlin, Jetpack Compose, and React Native.",
    "heroRole": "Software Developer",
    "heroSeniority": "Senior",
    "aboutIntro": "I am ",
    "aboutIdentity": "Laura Alfonso Contreras, a Senior Software Developer specializing in mobile development",
    "aboutExperienceIntro": "My background includes developing applications for ",
    "aboutPlatforms": "Android, Android TV, and React Native",
    "aboutStackIntro": "I work with technologies such as ",
    "aboutStack": "Kotlin, Jetpack Compose, JavaScript, HTML, CSS, Firebase, and Git",
    "aboutArchitecture": ", applying Clean Architecture principles, MVVM, and software engineering best practices.",
    "aboutServices": "I have experience integrating external services, SDKs, authentication systems, push notifications, local persistence, and features connected to backend platforms. I also contribute to testing, optimization, issue resolution, and publishing applications on the ",
    "aboutObjective": "My goal is to keep growing professionally and contribute to international technology projects, delivering quality solutions, adaptability, and a continuous improvement mindset.",
    "cvSpanish": "Resume in Spanish",
    "cvEnglish": "Resume in English",
    "projectAndroidAlt": "Futuristic illustration of Android development",
    "projectReleaseAlt": "Futuristic illustration of application releases",
    "projectCrossAlt": "Futuristic illustration of Android TV and mobile devices",
    "robotLabel": "Futuristic pink and blue metallic robot animation",
    "certFrontend": "Front-End Web Development",
    "certNative": "React Native: Native Applications for iOS and Android",
    "certPython": "Python 3.x Masterclass: From Beginner to Expert with Practice",
    "certDjango": "Practical Django Course: Backend Web Development with Python",
    "projectQualityStack": "Google Play · Quality assurance · Git · Crashlytics",
    "skillRest": "REST APIs",
    "certificateAlt1": "Certificate: Samsung Knox Professional",
    "certificateAlt2": "Certificate: Samsung Knox Associate",
    "certificateAlt3": "Certificate: Android Enterprise Professional",
    "certificateAlt4": "Certificate: Android Enterprise Associate",
    "certificateAlt5": "Laboratoria Front-End Web Development diploma",
    "certificateAlt6": "Certificate: React Native for iOS and Android",
    "certificateAlt7": "Certificate: Python 3.x Masterclass",
    "certificateAlt8": "Certificate: Backend Web Development with Django",
    "certificateAlt9": "Certificate: JavaScript",
    "certificateAlt10": "Certificate: CSS",
    "certificateAlt11": "Certificate: HTML",
    "certificateAlt12": "Certificate: React and Redux",
    "certificateAlt13": "Certificate: SQL",
    "certificateAlt14": "Certificate: jQuery",
    "contactEmail": "Primary email",
    "contactAlternate": "Alternative email",
    "contactPhone": "Phone",
    "formDelivery": "Your name, email, and message are processed by FormSubmit to contact Laura, without leaving this page.",
    "formSubject": "New contact from Laura Alfonso’s portfolio",
    "formSending": "Sending…",
    "formPending": "Your message is being submitted. Please wait a moment.",
    "formSuccess": "FormSubmit accepted your message. Thank you for reaching out!",
    "formError": "We could not confirm your submission. Your text has been kept; try again later or email me directly.",
    "formActivation": "This form still requires activation of the recipient email address in FormSubmit. Submission has not been confirmed. Please email Laura directly.",
    "formUncertain": "Thanks for reaching out! The service didn't confirm the submission. Your message is kept; please wait a few minutes before trying again to avoid duplicates.",
    "formUnavailable": "To send without leaving this page, enable JavaScript or use the email links.",
    "formLocal": "Open the portfolio at its web address to send your message. You can also use the email links."
  }
};

// Contact delivery uses the FormSubmit AJAX endpoint declared in the HTML form.
let currentLanguage = "en";
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageButton = document.querySelector(".lang-toggle");
const contactForm = document.querySelector('#contact-form');
const contactButton = contactForm.querySelector('button[type="submit"]');
const contactStatus = document.querySelector('#form-status');
let contactSending = false;
let contactStatusKey = '';

function renderContactState() {
  contactButton.textContent = translations[currentLanguage][contactSending ? 'formSending' : 'formSend'];
  contactButton.disabled = contactSending;
  contactForm.setAttribute('aria-busy', String(contactSending));
  contactStatus.textContent = contactStatusKey ? translations[currentLanguage][contactStatusKey] : '';
  contactStatus.dataset.state = contactStatusKey === 'formSuccess'
    ? 'success'
    : contactStatusKey === 'formUncertain'
      ? 'uncertain'
      : contactSending ? 'pending' : contactStatusKey ? 'error' : '';
}

function setContactStatus(key) {
  contactStatusKey = key;
  renderContactState();
}

function validateContactFields() {
  const name = contactForm.querySelector('[name="name"]');
  const email = contactForm.querySelector('[name="email"]');
  const message = contactForm.querySelector('[name="message"]');

  name.setCustomValidity(name.value.trim() ? '' : translations[currentLanguage].formNameInvalid);
  email.setCustomValidity(
    email.value.trim() && email.validity.valid ? '' : translations[currentLanguage].formEmailInvalid,
  );
  message.setCustomValidity(
    message.value.trim().length >= 10 ? '' : translations[currentLanguage].formMessageInvalid,
  );

  return contactForm.reportValidity();
}

document.querySelector("#year").textContent = new Date().getFullYear();

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translated = translations[lang][element.dataset.i18n];
    if (translated !== undefined) element.textContent = translated;
  });
  for (const attribute of ['aria-label', 'alt', 'content', 'value']) {
    document.querySelectorAll('[data-i18n-' + attribute + ']').forEach((element) => {
      const key = element.getAttribute('data-i18n-' + attribute);
      if (translations[lang][key] !== undefined) element.setAttribute(attribute, translations[lang][key]);
    });
  }
  updateMenuLabel();
  document.querySelectorAll('.cert img').forEach((image) => {
    image.setAttribute('aria-label', translations[lang].certExpand + ' ' + image.alt);
  });
  languageButton.textContent = lang === "es" ? "EN" : "ES";
  languageButton.setAttribute(
    "aria-label",
    lang === "es" ? "Change language to English" : "Cambiar idioma a español",
  );
  document.title = translations[lang].pageTitle;
  const activeCertificate = document.querySelector('.cert img[data-active-certificate]');
  if (activeCertificate) document.querySelector('#certModal img').alt = activeCertificate.alt;
  renderContactState();
}

function updateMenuLabel() {
  const key = menuButton.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen';
  menuButton.setAttribute('aria-label', translations[currentLanguage][key]);
}

const mobileMenuQuery = window.matchMedia('(max-width: 700px)');
function setMenuOpen(isOpen, { returnFocus = false } = {}) {
  const shouldOpen = isOpen && mobileMenuQuery.matches;
  navLinks.classList.toggle('open', shouldOpen);
  menuButton.setAttribute('aria-expanded', String(shouldOpen));
  navLinks.inert = mobileMenuQuery.matches && !shouldOpen;
  navLinks.setAttribute('aria-hidden', String(mobileMenuQuery.matches && !shouldOpen));
  updateMenuLabel();
  if (returnFocus) menuButton.focus();
}

setMenuOpen(false);

languageButton.addEventListener("click", () =>
  {
    setLanguage(currentLanguage === "es" ? "en" : "es");
    setMenuOpen(false);
  },
);
menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener('click', (event) => {
  if (
    menuButton.getAttribute('aria-expanded') === 'true' &&
    !navLinks.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    setMenuOpen(false);
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false, { returnFocus: true });
  }
});
mobileMenuQuery.addEventListener('change', (event) => {
  setMenuOpen(false);
  if (!event.matches) {
    navLinks.inert = false;
    navLinks.setAttribute('aria-hidden', 'false');
  }
});

// Do not use native submission: the visitor stays on the portfolio, even on errors.
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (contactSending || !validateContactFields()) return;
  if (!['https:', 'http:'].includes(window.location.protocol)) {
    setContactStatus('formLocal');
    return;
  }
  const payload = Object.fromEntries(new FormData(contactForm));
  payload.name = payload.name.trim();
  payload.email = payload.email.trim();
  payload.message = payload.message.trim();
  if (payload._honey) {
    setContactStatus('formError');
    return;
  }
  payload._url = window.location.href.split('#')[0];
  payload._replyto = payload.email;
  contactSending = true;
  setContactStatus('formPending');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      redirect: 'error',
      referrerPolicy: 'strict-origin-when-cross-origin',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.headers.get('content-type')?.toLowerCase().includes('application/json')) {
      console.warn('Contact form received a non-JSON response', {
        status: response.status,
        contentType: response.headers.get('content-type'),
      });
      setContactStatus('formUncertain');
      return;
    }
    const result = await response.json();
    if (!result || typeof result !== 'object' || Array.isArray(result)) {
      console.warn('Contact form received an invalid response body', { status: response.status });
      setContactStatus('formUncertain');
      return;
    }
    const message = typeof result.message === 'string' ? result.message : '';
    // Activation can be reported with HTTP 200. Never treat a truthy string "false" as acceptance.
    if (/activat|actived|check.{0,20}(?:e-?mail|inbox)|confirm.{0,30}(?:e-?mail|address)|verif.{0,30}(?:e-?mail|address)/i.test(message)) {
      setContactStatus('formActivation');
      return;
    }
    const accepted = result.success === true || result.success === 'true';
    if (!response.ok || !accepted || result.error || result.errors) {
      console.warn('FormSubmit did not confirm the contact submission', {
        status: response.status,
        success: result.success,
        hasError: Boolean(result.error),
        hasErrors: Boolean(result.errors),
      });
      setContactStatus('formUncertain');
      return;
    }
    contactForm.reset();
    setContactStatus('formSuccess');
  } catch (error) {
    console.warn('Contact form confirmation is unavailable', {
      name: error && error.name ? error.name : 'UnknownError',
    });
    setContactStatus('formUncertain');
  } finally {
    clearTimeout(timeout);
    contactSending = false;
    renderContactState();
  }
});

const projectReleaseVideo = document.querySelector('#project-release-video');
if (projectReleaseVideo && typeof IntersectionObserver !== 'undefined') {
  const projectReleasePreview = document.querySelector('#project-release-preview');
  let projectVideoIsVisible = false;
  let projectVideoHasEnded = false;
  const updateProjectVideoPlayback = () => {
    if (projectVideoIsVisible && document.visibilityState === 'visible' && !projectVideoHasEnded) {
      const playback = projectReleaseVideo.play();
      if (playback && typeof playback.catch === 'function') {
        playback.catch((error) => console.warn('Could not autoplay the project video:', error));
      }
    } else {
      projectReleaseVideo.pause();
    }
  };
  projectReleaseVideo.addEventListener('ended', () => {
    projectVideoHasEnded = true;
    projectReleaseVideo.hidden = true;
    projectReleasePreview.hidden = false;
  });
  const projectVideoObserver = new IntersectionObserver((entries) => {
    projectVideoIsVisible = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5);
    updateProjectVideoPlayback();
  }, { threshold: [0, 0.5] });
  projectVideoObserver.observe(projectReleaseVideo);
  document.addEventListener('visibilitychange', updateProjectVideoPlayback);
}

setLanguage("en");

const skillTags = document.querySelector('.skill-tags');
if (skillTags) {
  const skillChips = [...skillTags.querySelectorAll('span')];
  skillChips.forEach((chip, index) => chip.style.setProperty('--skill-tag-index', index));

  if ('IntersectionObserver' in window) {
    const skillTagsObserver = new IntersectionObserver((entries, observer) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        skillTags.classList.toggle('is-visible', true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    skillTagsObserver.observe(skillTags);
  } else {
    skillTags.classList.toggle('is-visible', true);
  }

  let activeSkillChip;
  let skillChipTimeout;
  skillTags.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'touch') return;
    const chip = event.target.closest('span');
    if (!chip || !skillTags.contains(chip)) return;

    clearTimeout(skillChipTimeout);
    activeSkillChip?.classList.remove('is-touch-active');
    activeSkillChip = chip;
    chip.classList.add('is-touch-active');
    skillChipTimeout = setTimeout(() => {
      chip.classList.remove('is-touch-active');
      if (activeSkillChip === chip) activeSkillChip = null;
    }, 700);
  });
}

// Visor de certificaciones
const certModal = document.getElementById("certModal");
const certModalImage = certModal?.querySelector("img");
const certModalClose = certModal?.querySelector(".cert-modal-close");

if (certModal && certModalImage && certModalClose) {
  document.querySelectorAll(".cert img").forEach((image) => {
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${translations[currentLanguage].certExpand} ${image.alt}`);

    const openCertificate = () => {
      document.querySelectorAll('.cert img[data-active-certificate]').forEach((item) => item.removeAttribute('data-active-certificate'));
      image.setAttribute('data-active-certificate', '');
      certModalImage.src = image.currentSrc || image.src;
      certModalImage.alt = image.alt;

      certModal.showModal();
    };

    image.addEventListener("click", openCertificate);

    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCertificate();
      }
    });
  });

  certModalClose.addEventListener("click", () => {
    certModal.close();
  });

  certModal.addEventListener("click", (event) => {
    if (event.target === certModal) {
      certModal.close();
    }
  });
}
