// Runs the actual submit handler against local HTTP fixtures, never the real email service.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync('script.js', 'utf8');
const base = process.env.CONTACT_TEST_BASE || 'http://127.0.0.1:4010/formsubmit';
function setup(scenario, { valid = true, protocol = 'https:', honey = '' } = {}) {
  const nodes = new Map();
  function element() {
    return { textContent: '', dataset: {}, attributes: {}, disabled: true, events: {},
      classList: { toggle() { return true; }, remove() {} },
      setAttribute(k,v) { this.attributes[k] = v; }, getAttribute(k) { return this.attributes[k]; },
      addEventListener(k,v) { this.events[k] = v; }, querySelectorAll() { return []; },
      querySelector(selector) { return select('form ' + selector); } };
  }
  const select = key => { if (!nodes.has(key)) nodes.set(key, element()); return nodes.get(key); };
  const form = select('#contact-form');
  form.action = 'https://formsubmit.co/ajax/lauraac140231@gmail.com';
  form.reportValidity = () => valid;
  form.resetCount = 0;
  form.reset = () => form.resetCount++;
  const data = { name: 'Local QA only', email: 'qa@example.com', message: 'HTTP fixture test, never delivered.', _subject: 'Test', _template: 'table', _captcha: 'false', _honey: honey };
  const requests = [];
  const context = {
    document: { documentElement: { lang: 'es' }, querySelector(selector) { return selector.includes('data-active-certificate') ? null : select(selector); }, querySelectorAll() { return []; }, getElementById() { return null; } },
    window: { location: { protocol, href: 'https://example.github.io/portfolio/#contacto' } },
    FormData: function() { return Object.entries(data); },
    AbortController,
    setTimeout: (callback, ms) => setTimeout(callback, scenario === 'timeout' ? 60 : ms), clearTimeout,
    fetch: async (url, options) => {
      requests.push({ url, options });
      // Only this test transport points to localhost; production keeps the real endpoint.
      return fetch(base + new URL(url).pathname, { ...options, headers: { ...options.headers, 'x-test-case': scenario } });
    },
  };
  vm.createContext(context); vm.runInContext(source,context);
  const button = select('form button[type="submit"]');
  const status = select('#form-status');
  let prevented = 0;
  const submit = () => form.events.submit({ preventDefault() { prevented++; } });
  const language = lang => vm.runInContext(`setLanguage('${lang}')`,context);
  const key = () => vm.runInContext('contactStatusKey',context);
  return { form, button, status, requests, submit, language, key, prevented: () => prevented };
}
(async () => {
  for (const scenario of ['accepted-string','accepted-boolean','activation','activation-with-true','false-string','false-boolean','missing-success','unexpected-success','conflicting-error','conflicting-errors','http-500','rate-limit','html-activation','invalid-json','null-json','array-json','redirect','disconnect','timeout']) {
    const env = setup(scenario);
    assert.equal(env.button.disabled,false);
    const pending = env.submit();
    assert.equal(env.button.disabled,true);
    assert.equal(env.form.attributes['aria-busy'],'true');
    assert.equal(env.key(),'formPending');
    assert.equal(env.status.dataset.state,'pending');
    env.language('en'); assert.equal(env.button.textContent,'Sending…');
    await env.submit(); assert.equal(env.requests.length,1,'No concurrent duplicate requests');
    await pending;
    const accepted = scenario.startsWith('accepted-');
    const expected = accepted ? 'formSuccess' : scenario.startsWith('activation') ? 'formActivation' : scenario === 'timeout' ? 'formTimeout' : 'formError';
    assert.equal(env.key(),expected,scenario);
    assert.equal(env.status.dataset.state,accepted ? 'success' : 'error',scenario);
    assert.equal(env.form.resetCount,accepted ? 1 : 0,'Keep the draft unless acceptance is explicit');
    assert.equal(env.button.disabled,false);
    assert.equal(env.form.attributes['aria-busy'],'false');
    assert.equal(env.prevented(),2,'Every submit stays on the portfolio');
    assert.equal(env.requests[0].options.redirect,'error');
    assert.equal(env.requests[0].options.mode,'cors');
    assert.equal(env.requests[0].url,'https://formsubmit.co/ajax/lauraac140231@gmail.com');
    const english = env.status.textContent;
    env.language('es'); assert.notEqual(env.status.textContent,english);
    env.language('en'); assert.equal(env.status.textContent,english);
    console.log('PASS', scenario);
  }
  for (const options of [{valid:false},{protocol:'file:'},{honey:'bot'}]) {
    const env=setup('accepted-string',options); await env.submit();
    assert.equal(env.requests.length,0); assert.equal(env.form.resetCount,0); assert.equal(env.button.disabled,false);
  }
  const slow=setup('slow'); const pending=slow.submit(); await slow.submit(); await pending;
  assert.equal(slow.requests.length,1); assert.equal(slow.key(),'formSuccess');
  console.log('PASS invalid fields, file:// protection, honeypot rejection, delayed response and duplicate guard.');
  console.log('Local fixtures verify the handler and HTTP serialization only. They do not verify browser CORS, GitHub Pages, recipient activation, or inbox delivery.');
})().catch(error => { console.error(error); process.exitCode=1; });
