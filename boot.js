(async()=>{
  const nativeFetch=window.fetch.bind(window);
  async function gunzipText(path){
    const b64=(await nativeFetch(path,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`${path}: ${r.status}`);return r.text()})).trim();
    const raw=atob(b64),bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
    if(!('DecompressionStream' in window))throw new Error('Este navegador no soporta DecompressionStream. Usa Chrome/Edge/Firefox reciente.');
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).text();
  }
  const dataSource=await gunzipText('data.gz.b64');
  (0,eval)(dataSource+'\n//# sourceURL=menagerie-data.js');
  const balanceSource=await nativeFetch('balance.js',{cache:'no-store'}).then(r=>r.text());
  (0,eval)(balanceSource+'\n//# sourceURL=menagerie-balance.js');
  const gameSource=await gunzipText('game.gz.b64');
  window.fetch=(input,init)=>{
    const url=typeof input==='string'?input:(input?.url||'');
    if(url==='game.js'||url.endsWith('/game.js'))return Promise.resolve(new Response(gameSource,{status:200,headers:{'Content-Type':'application/javascript'}}));
    return nativeFetch(input,init);
  };
  const patchSource=await nativeFetch('patch-loader.js',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`patch-loader.js: ${r.status}`);return r.text()});
  (0,eval)(patchSource+'\n//# sourceURL=menagerie-loader.js');
})().catch(err=>{
  console.error(err);
  document.body.insertAdjacentHTML('beforeend',`<pre style="position:fixed;inset:12px;z-index:9999;overflow:auto;background:#130b0c;color:#ffd8d8;border:1px solid #633;padding:16px;white-space:pre-wrap;font:13px/1.5 monospace">THE LAST MENAGERIE no pudo iniciar.\n\n${err.message}</pre>`);
});
