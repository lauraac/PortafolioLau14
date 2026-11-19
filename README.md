# LAC.DEV — Portafolio

Sitio estático responsivo, bilingüe (ES/EN), sin dependencias ni build.

## Ejecutar

Abre `index.html` en el navegador o ejecuta desde esta carpeta:

```bash
python -m http.server 8000
```

Visita http://localhost:8000

## Archivos que debes agregar

- `assets/video/robot-lac.mp4`: video horizontal generado en Vidu (preferentemente sin marcas de agua, si tienes derecho a exportarlo así).
- `assets/images/robot-poster.jpg`: fotograma del video para mostrar mientras carga.
- `assets/images/knox-professional.jpg`
- `assets/images/knox-associate.jpg`
- `assets/images/android-enterprise-professional.jpg`
- `assets/images/android-enterprise-associate.jpg`
- `assets/cv/Laura_Alfonso_CV_ES.pdf`
- `assets/cv/Laura_Alfonso_CV_EN.pdf`

Los nombres deben coincidir exactamente. Si no tienes aún los archivos, sus espacios quedan reservados. No publiques datos privados ni materiales internos de empresas.

## Formulario de contacto

El envío se realiza directamente desde el navegador con FormSubmit; no requiere ni almacena contraseñas o claves privadas. Antes de recibir mensajes, confirma el correo de activación enviado por FormSubmit al buzón destinatario. El formulario valida nombre no vacío, formato de correo y un mensaje de al menos 10 caracteres significativos; la respuesta de aceptación del servicio no garantiza la entrega en la bandeja de entrada.

El formulario env?a JSON mediante fetch al endpoint AJAX de FormSubmit: https://formsubmit.co/ajax/lauraac140231@gmail.com. El destino sigue siendo Gmail; el correo alternativo y el tel?fono son enlaces directos. No requiere backend propio y utiliza el mecanismo cross-origin documentado para sitios est?ticos como GitHub Pages.

- El visitante permanece dentro del portafolio. Los estados de env?o, aceptaci?n, activaci?n pendiente, error y confirmaci?n incierta est?n en espa?ol e ingl?s.
- El bot?n se deshabilita mientras hay una solicitud pendiente y el manejador impide env?os simult?neos. No hay reintentos autom?ticos.
- Solo se muestra aceptaci?n si el HTTP es correcto, el cuerpo es JSON y success es exactamente true o la cadena "true", sin error ni aviso de activaci?n. HTTP 200 y la cadena "false" no bastan.
- El formulario se limpia solo tras aceptaci?n expl?cita. Ante error o falta de confirmaci?n conserva el texto. Aceptaci?n del servicio no prueba entrega en la bandeja de entrada.
- La espera m?xima es de 20 segundos. Si se agota o falla la comunicaci?n, un aviso amable explica que el mensaje pudo haberse enviado y pide esperar antes de reenviar para evitar duplicados; el texto se conserva.
- Para evitar la pantalla externa de reCAPTCHA se usa _captcha=false y un honeypot _honey. No equivale a conservar el desaf?o visual de reCAPTCHA.
- Requiere JavaScript y HTTP/HTTPS. Sin JavaScript el bot?n permanece deshabilitado y hay enlaces de correo disponibles.

### Activaci?n y comprobaci?n en GitHub Pages

1. Confirma el correo de activaci?n que FormSubmit ya envi? a Gmail; revisa Spam. La pantalla Check Your Email anterior no acreditaba entrega.
2. Publica index.html, script.js, styles.css y assets en GitHub Pages y abre su URL HTTPS. No uses file://.
3. Env?a un mensaje y comprueba que el navegador permanece en el portafolio. En Network debe verse POST al endpoint /ajax/ con los campos name, email y message.
4. Comprueba la respuesta JSON y el aviso dentro de la p?gina; si pide activaci?n, no debe aparecer ?xito.
5. Confirma la llegada a Gmail y que Responder utiliza el correo escrito por el visitante.
6. Cambia a ingl?s y repite; para probar errores, desactiva la red antes de enviar y comprueba que el texto se conserva y el bot?n se recupera.

Pendientes: no se proporcion? la URL publicada para validar GitHub Pages, ni se comprob? activaci?n o entrega real en esta revisi?n. El navegador automatizado no estuvo disponible. Las pruebas locales no acreditan CORS en navegador.

### Validaci?n local

Sintaxis y traducciones: node --check script.js y node verify-content.cjs.

Para probar el manejador real con respuestas HTTP controladas, sin enviar correos:

1. En una terminal: node postman/mocks/formsubmit/fixtures.js
2. En otra terminal PowerShell:

    $env:CONTACT_TEST_BASE = 'http://127.0.0.1:4500'
    node verify-contact.cjs

Alternativa Postman si los permisos locales lo permiten:

    postman simulation run postman/simulations/contact.sim.yaml --port 4010 --no-history --output ndjson

En otra terminal, ejecutar node verify-contact.cjs sin CONTACT_TEST_BASE, o con http://127.0.0.1:4010/formsubmit. El simulador est? descrito en postman/simulations/contact.context.yaml. En esta revisi?n Postman fall? por acceso a sus archivos locales de datasets; los mismos fixtures se ejecutaron directamente con Node. Sus respuestas son casos de prueba, no pruebas de recepci?n real.

Documentaci?n: https://formsubmit.co/ajax-documentation, https://formsubmit.co/documentation y https://formsubmit.co/help

## Publicar en GitHub Pages

Sube `index.html`, `styles.css`, `script.js` y `assets/` a tu repositorio. Configura Settings → Pages → Deploy from a branch. Todos los recursos usan rutas relativas.

## Personalización

- Colores: variables al inicio de `styles.css`.
- Textos ES/EN: objeto `translations` en `script.js`.
- Secciones y experiencia: `index.html`.
- Si agregas proyectos, usa solo información que puedas divulgar públicamente.

## Comprobaciones sugeridas

- Anchos 320, 375, 390, 430, 768, 1024 y 1440 px.
- Selector de idioma, menú móvil, links de CV y formulario.
- Navegación con teclado y modo de movimiento reducido.
- Prueba Lighthouse (rendimiento, accesibilidad y SEO).
