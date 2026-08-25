(async()=>{
  async function gunzipText(path){
    const url=`${path}?rev=echo-stage-3-1`;
    const res=await fetch(url,{cache:'no-store'});
    if(!res.ok)throw new Error(`${path}: GitHub Pages respondió ${res.status}. Recarga en unos segundos.`);
    let text=(await res.text()).trim();

    // GitHub Pages/CDN can briefly serve cached or decorated responses after a deploy.
    // Extract only the gzip base64 payload and ignore whitespace/foreign characters.
    const start=text.indexOf('H4sI');
    if(start<0){
      const preview=text.slice(0,80).replace(/\s+/g,' ');
      throw new Error(`${path}: Pages no está sirviendo el bundle todavía. Inicio recibido: ${preview}`);
    }
    text=text.slice(start).replace(/\s+/g,'');
    const padding=text.indexOf('=');
    if(padding>=0)text=text.slice(0,padding+1);
    text=text.replace(/[^A-Za-z0-9+/=]/g,'');
    while(text.length%4)text+='=';

    let raw;
    try{raw=atob(text)}catch(e){throw new Error(`${path}: el bundle publicado está corrupto o incompleto. Fuerza una recarga de la página.`)}
    const bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
    if(!('DecompressionStream' in window))throw new Error('Necesitas un navegador moderno. Usa Chrome, Edge o Firefox actualizado.');
    try{
      const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
      return await new Response(stream).text();
    }catch(e){
      throw new Error(`${path}: el archivo llegó incompleto desde GitHub Pages. Recarga la página para obtener el despliegue nuevo.`)
    }
  }

  const bundle=await gunzipText('bundle-v3.gz.b64');
  (0,eval)(bundle+'\n//# sourceURL=menagerie-v3.js');
})().catch(err=>{
  console.error(err);
  document.body.insertAdjacentHTML('beforeend',`<pre style="position:fixed;inset:12px;z-index:9999;overflow:auto;background:#130b0c;color:#ffd8d8;border:1px solid #633;padding:16px;white-space:pre-wrap;font:13px/1.5 monospace">THE LAST MENAGERIE no pudo iniciar.\n\n${err.message}</pre>`);
});
