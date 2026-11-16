const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html','utf8');
const js = fs.readFileSync('script.js','utf8');
const prefix = js.slice(0,js.indexOf('// Contact delivery'));
const t = vm.runInNewContext(prefix + '\ntranslations');
assert.deepEqual(Object.keys(t.es).sort(),Object.keys(t.en).sort());
for(const lang of ['es','en']) {
  const block = prefix.split(`"${lang}": {`)[1].split(/\n  }/)[0];
  const keys = [...block.matchAll(/^    "([^"]+)":/gm)].map(m=>m[1]);
  assert.equal(new Set(keys).size, keys.length);
}
function element(attributes={}) {
  return {attributes, dataset:{}, textContent:'', classList:{toggle(){return true;}, remove(){}},
    setAttribute(key,value){this.attributes[key]=value; if(key==='alt')this.alt=value;},
    getAttribute(key){return this.attributes[key];},addEventListener(type,callback){this[type]=callback;},
    querySelectorAll(){return [];},querySelector(){return element();}};
}
const nodes = [...html.matchAll(/<([a-z0-9]+)\b([^>]*\bdata-i18n(?:-[a-z-]+)?="[^"]+"[^>]*)>/g)].map(m=>{
  const attrs=Object.fromEntries([...m[2].matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));
  const el=element(attrs); el.dataset.i18n=attrs['data-i18n'];
  for(const [attr,key] of Object.entries(attrs)) if(attr.startsWith('data-i18n')) for(const lang of ['es','en'])assert.ok(t[lang][key],`${lang}: ${key}`);
  return el;
});
const mapped=new Map();
const document={documentElement:{lang:'es'},querySelector(selector){if(selector.includes('data-active-certificate'))return null;if(!mapped.has(selector))mapped.set(selector,element());return mapped.get(selector);},
  querySelectorAll(selector){if(selector==='[data-i18n]')return nodes.filter(n=>n.dataset.i18n); const match=selector.match(/^\[([^\]]+)\]$/);return match?nodes.filter(n=>n.attributes[match[1]]):[];},getElementById(){return null;},addEventListener(){}};
const context={document,Date,window:{matchMedia(){return {matches:false,addEventListener(){}};}}};vm.createContext(context);vm.runInContext(js,context);
for(const lang of ['es','en','es']){
  vm.runInContext(`setLanguage('${lang}')`,context);
  assert.equal(document.documentElement.lang,lang);assert.equal(document.title,t[lang].pageTitle);
  for(const node of nodes)for(const [attr,key]of Object.entries(node.attributes)){
    if(attr==='data-i18n')assert.equal(node.textContent,t[lang][key]);
    else if(attr.startsWith('data-i18n-'))assert.equal(node.attributes[attr.slice(10)],t[lang][key]);
  }
}
assert.ok(fs.existsSync('assets/images/mexico.png'));
assert.ok(html.includes('action="https://formsubmit.co/ajax/lauraac140231@gmail.com" method="POST"'));
assert.ok(!js.includes('preventDefault();\n  if (!form.reportValidity())'));
for (const href of ['mailto:lauraac140231@gmail.com','mailto:laura-a-c@hotmail.com','tel:+525534633490']) assert.ok(html.includes('href="' + href + '"'));
for (const name of ['name','email','message']) assert.ok(html.includes('name="' + name + '"'));
assert.ok(html.includes('name="_captcha" value="false"'));
assert.ok(html.includes('name="_honey"'));
assert.ok(html.includes('id="form-status"'));
assert.ok(!js.includes('FORM_ENDPOINT'));
assert.equal((html.match(/class="value-card"/g)||[]).length,4);
assert.equal((html.match(/class="cert"/g)||[]).length,14);
assert.equal((html.match(/\bdownload\b/g)||[]).length,2);
console.log('PASS: initialization; ES/EN/ES text, alt, aria-label, metadata, document title; AJAX form action and fields, email/phone links; dictionary parity and no duplicates; Mexico image; preserved certificates, cards and CV links.');
