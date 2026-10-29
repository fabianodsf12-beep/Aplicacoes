// Guarda o app no celular para abrir sem sinal. Mude VERSAO a cada publicação.
const VERSAO='v4';
const CACHE='agenda-campo-'+VERSAO;
// A base de design Nadiana vem do endereço publicado e também fica guardada aqui.
const BASE=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "https://fabianodsf12-beep.github.io/nadiana-design/v1/tokens.css", "https://fabianodsf12-beep.github.io/nadiana-design/v1/componentes.css", "https://fabianodsf12-beep.github.io/nadiana-design/v1/icones.js", "https://fabianodsf12-beep.github.io/nadiana-design/v1/nadiana.js", "https://fabianodsf12-beep.github.io/nadiana-design/v1/logos/nadiana-simbolo.svg", "https://fabianodsf12-beep.github.io/nadiana-design/v1/logos/nadiana-logo-vertical.svg", "https://fabianodsf12-beep.github.io/nadiana-design/v1/fonts/Barlow-400.woff2", "https://fabianodsf12-beep.github.io/nadiana-design/v1/fonts/Barlow-500.woff2", "https://fabianodsf12-beep.github.io/nadiana-design/v1/fonts/Barlow-600.woff2", "https://fabianodsf12-beep.github.io/nadiana-design/v1/fonts/BarlowCondensed-500.woff2", "https://fabianodsf12-beep.github.io/nadiana-design/v1/fonts/BarlowCondensed-600.woff2", "https://fabianodsf12-beep.github.io/nadiana-design/v1/fonts/BarlowCondensed-700.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>
  // o app precisa entrar inteiro; a base de design entra arquivo por arquivo (se um falhar, é guardado no primeiro uso)
  c.addAll(BASE.filter(u=>u.startsWith('./'))).then(()=>Promise.all(BASE.filter(u=>!u.startsWith('./')).map(u=>c.add(u).catch(()=>{}))))
).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('agenda-campo-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const comPrazo=(p,ms)=>Promise.race([p,new Promise((_,r)=>setTimeout(()=>r(new Error('prazo')),ms))]);
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET')return;
  if(u.hostname.endsWith('script.google.com')||u.hostname.endsWith('googleusercontent.com')||u.hostname==='drive.google.com')return;
  if(r.mode==='navigate'){
    // página: tenta a versão nova por 4 s; sem sinal, abre a guardada
    e.respondWith(comPrazo(fetch(r),4000).then(res=>{const c=res.clone();caches.open(CACHE).then(k=>k.put('./index.html',c));return res})
      .catch(()=>caches.match('./index.html',{ignoreSearch:true})));
    return;
  }
  // demais arquivos (ícones, fontes): guardado primeiro, atualiza em segundo plano
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){const c=res.clone();caches.open(CACHE).then(k=>k.put(r,c))}return res});
    return hit||net;
  }));
});
