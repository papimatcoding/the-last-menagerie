(async()=>{
  async function fetchChunk(i){
    const path=`bundle-v3-${i}.txt`;
    const res=await fetch(`${path}?rev=echo-stage-3-2`,{cache:'no-store'});
    if(!res.ok)throw new Error(`${path}: GitHub Pages respondió ${res.status}. Espera unos segundos y recarga.`);
    const text=(await res.text()).replace(/\s+/g,'').replace(/[^A-Za-z0-9+/=]/g,'');
    if(!text)throw new Error(`${path}: el fragmento publicado está vacío.`);
    return text;
  }

  const parts=await Promise.all(Array.from({length:8},(_,i)=>fetchChunk(i)));
  let text=parts.join('');
  if(!text.startsWith('H4sI'))throw new Error('El bundle reconstruido no tiene una cabecera gzip válida.');
  while(text.length%4)text+='=';

  let raw;
  try{raw=atob(text)}catch(e){throw new Error('Los fragmentos publicados no forman un Base64 válido. Recarga en unos segundos.');}
  const bytes=new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
  if(!('DecompressionStream' in window))throw new Error('Necesitas un navegador moderno. Usa Chrome, Edge o Firefox actualizado.');

  let bundle;
  try{
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    bundle=await new Response(stream).text();
  }catch(e){
    throw new Error('Los fragmentos llegaron completos, pero el gzip no pudo descomprimirse. Recarga una vez más.');
  }

  (0,eval)(bundle+'\n//# sourceURL=menagerie-v3.js');
})().catch(err=>{
  console.error(err);
  document.body.insertAdjacentHTML('beforeend',`<pre style="position:fixed;inset:12px;z-index:9999;overflow:auto;background:#130b0c;color:#ffd8d8;border:1px solid #633;padding:16px;white-space:pre-wrap;font:13px/1.5 monospace">THE LAST MENAGERIE no pudo iniciar.\n\n${err.message}</pre>`);
});
