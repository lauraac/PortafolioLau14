// Defensive HTTP fixtures only; these are not observations of the live recipient.
const http = require('node:http');
http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/ajax/lauraac140231@gmail.com') {
    res.writeHead(501); res.end('Endpoint not modeled'); return;
  }
  let raw = '';
  req.on('data', chunk => raw += chunk);
  req.on('end', () => {
    let body;
    try { body = JSON.parse(raw); } catch { res.writeHead(400); res.end(); return; }
    const valid = req.headers['content-type'] === 'application/json' &&
      req.headers.accept === 'application/json' && body.name && body.email && body.message &&
      body._replyto === body.email && body._captcha === 'false' && body._url.startsWith('https://');
    if (!valid) { res.writeHead(400); res.end('Request does not match the caller contract'); return; }
    const send = (status, value, type = 'application/json') => {
      res.writeHead(status, { 'Content-Type': type });
      res.end(type === 'application/json' ? JSON.stringify(value) : value);
    };
    switch (req.headers['x-test-case']) {
      case 'accepted-string': return send(200, { success: 'true', message: 'The form was submitted successfully.' });
      case 'accepted-boolean': return send(200, { success: true });
      case 'activation': return send(200, { success: 'false', message: 'This form needs Activation. Check your email.' });
      case 'activation-with-true': return send(200, { success: true, message: 'Please check your email to activate this form.' });
      case 'false-string': return send(200, { success: 'false', message: 'Unable to submit form.' });
      case 'false-boolean': return send(200, { success: false });
      case 'missing-success': return send(200, { message: 'OK' });
      case 'unexpected-success': return send(200, { success: 1 });
      case 'conflicting-error': return send(200, { success: true, error: 'Rejected' });
      case 'conflicting-errors': return send(200, { success: true, errors: ['Rejected'] });
      case 'http-500': return send(500, { success: true });
      case 'rate-limit': return send(429, { success: false });
      case 'html-activation': return send(200, '<h1>Check Your Email</h1>', 'text/html');
      case 'invalid-json': return send(200, '{bad json', 'application/json; charset=utf-8');
      case 'null-json': return send(200, null);
      case 'array-json': return send(200, [{ success: true }]);
      case 'redirect': res.writeHead(302, { Location: 'https://formsubmit.co/' }); return res.end();
      case 'disconnect': return req.socket.destroy();
      case 'timeout': return;
      case 'slow': return setTimeout(() => send(200, { success: 'true' }), 200);
      default: return send(501, { message: 'Unknown test fixture' });
    }
  });
}).listen(process.env.PORT || 4500);
