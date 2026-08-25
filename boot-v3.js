(async()=>{
  async function gunzipText(path){
    const text=(await fetch(path,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`${path}: ${r.status}`);return r.text()})).trim();
    const raw=atob(text),bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
    if(!('DecompressionStream' in window))throw new Error('Necesitas un navegador moderno. Usa Chrome, Edge o Firefox actualizado.');
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).text();
  }
  const bundle=await gunzipText('bundle-v3.gz.b64');
  (0,eval)(bundle+'\n//# sourceURL=menagerie-v3.js');
})().catch(err=>{
  console.error(err);
  document.body.insertAdjacentHTML('beforeend',`<pre style="position:fixed;inset:12px;z-index:9999;overflow:auto;background:#130b0c;color:#ffd8d8;border:1px solid #633;padding:16px;white-space:pre-wrap;font:13px/1.5 monospace">THE LAST MENAGERIE no pudo iniciar.\n\n${err.message}</pre>`);
});
