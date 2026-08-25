(()=>{
  const V=window.MENAGERIE_V7;
  if(!V) return;
  const sprite=V.sprite;
  const pctX=x=>x*25;
  const pctY=y=>y*50;
  const schoolClass=s=>'school-'+String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');

  function setSprite(el,v){
    if(!el||!v) return;
    el.classList.add('v7-illustrated');
    el.style.setProperty('--v7-sprite',`url("${sprite}")`);
    el.style.setProperty('--v7-x',pctX(v.x)+'%');
    el.style.setProperty('--v7-y',pctY(v.y)+'%');
    const img=el.querySelector('img');
    if(img) img.classList.add('v7-hide-procedural');
  }
  function visualByName(name){return V.visuals[String(name||'').trim()]}

  function decorateCard(card){
    if(!card||card.dataset.v7==='1') return;
    const nameEl=card.querySelector('.hand-name,.unit-name,h2,h3');
    if(!nameEl) return;
    const name=nameEl.textContent.trim();
    const v=visualByName(name);
    if(v){
      const art=card.querySelector('.hand-art,.unit-art,.reward-art,.art');
      setSprite(art,v);
      card.classList.add('v7-card',schoolClass(v.school));
      card.dataset.act=v.act||'';
    }
    const desc=card.querySelector('.hand-desc,.unit-meta');
    if(desc){
      desc.textContent=desc.textContent.replace(/^(Veladura|Bastidor|Instinto|Figurante)\s*·\s*/i,'');
    }
    card.dataset.v7='1';
    card.classList.add('v7-enter');
    setTimeout(()=>card.classList.remove('v7-enter'),520);
  }

  function decorateBoss(){
    const bp=document.querySelector('#bossPortrait');
    if(!bp||bp.classList.contains('hidden')) return;
    const name=bp.querySelector('b')?.textContent?.trim();
    const v=visualByName(name);
    if(!v) return;
    bp.classList.add('v7-boss-portrait');
    bp.style.setProperty('--v7-sprite',`url("${sprite}")`);
    bp.style.setProperty('--v7-x',pctX(v.x)+'%');
    bp.style.setProperty('--v7-y',pctY(v.y)+'%');
    const img=bp.querySelector('img'); if(img) img.style.opacity='0';
  }

  function decorateAwaken(){
    const o=document.querySelector('#awakenOverlay');
    if(!o||o.classList.contains('hidden')) return;
    const name=o.querySelector('h2')?.textContent?.trim();
    const v=visualByName(name);
    if(v) setSprite(o.querySelector('.awaken-art'),v);
  }

  function decorateModal(){
    document.querySelectorAll('.reward,.card-detail,.choice.reward').forEach(x=>{
      const n=x.querySelector('h2,h3,.unit-name,.hand-name')?.textContent?.trim();
      const v=visualByName(n);
      if(v) setSprite(x.querySelector('.reward-art,.art'),v);
    });
  }

  function ensureMapLegend(){
    const card=document.querySelector('.map-card');
    if(!card||card.querySelector('.v7-map-legend')) return;
    const legend=document.createElement('div');
    legend.className='v7-map-legend';
    legend.innerHTML=`
      <span><i class="hunt">⚔</i>Escena</span><span><i class="event">◈</i>Interludio</span>
      <span><i class="archive">§</i>Archivo</span><span><i class="camp">⌂</i>Camerino</span>
      <span><i class="relic">◆</i>Atrezzo</span><span><i class="boss">♛</i>Maestro</span>`;
    card.appendChild(legend);
  }

  function pass(){
    document.querySelectorAll('.hand-card,.unit-card,.reward,.card-detail').forEach(decorateCard);
    decorateBoss(); decorateAwaken(); decorateModal(); ensureMapLegend();
  }
  const obs=new MutationObserver(()=>requestAnimationFrame(pass));
  obs.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
  window.addEventListener('load',pass); setTimeout(pass,300); setTimeout(pass,1200);
})();