(()=>{
  const V=window.MENAGERIE_V7;if(!V)return;
  const root=document.documentElement,img=new Image();let settled=false;
  function ready(){if(settled)return;settled=true;root.classList.remove('v7-sprite-error');root.classList.add('v7-sprite-ready')}
  function fail(){if(settled)return;settled=true;root.classList.remove('v7-sprite-ready');root.classList.add('v7-sprite-error');console.warn('[Menagerie v7.1] sprite unavailable; procedural fallback kept visible.')}
  img.onload=ready;img.onerror=fail;img.src=V.sprite+'?rev=7.0.1';
  setTimeout(()=>{if(!settled&&img.complete&&img.naturalWidth>0)ready()},700);setTimeout(()=>{if(!settled)fail()},4500);
  function repairDock(){const hand=document.getElementById('hand'),ctx=document.getElementById('contextBar');if(hand){hand.style.removeProperty('top');hand.style.removeProperty('position')}if(ctx){ctx.style.removeProperty('top');ctx.style.removeProperty('position')}}
  window.addEventListener('load',repairDock,{once:true});window.addEventListener('resize',repairDock);setTimeout(repairDock,250);
})();
