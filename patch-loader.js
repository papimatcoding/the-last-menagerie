(async()=>{
  const src=await fetch('game.js',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('game.js '+r.status);return r.text()});
  let s=src;
  const R=(a,b)=>{if(!s.includes(a))console.warn('Menagerie patch missing:',a.slice(0,55));else s=s.replace(a,b)};
  R('const SAVE = "menagerie_directors_cut_v1";','const SAVE = "menagerie_directors_cut_v3";');
  R('function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1000)}',`function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1100)}
  function creatureArt(c){if(c?.isCandle)return MENAGERIE_ART.dataUrl("ashwing","Ofrenda","Vela Votiva");const q=beastById[c?.species];return MENAGERIE_ART.dataUrl(c?.species||"ashwing",c?.tribe||q?.tribe||"Velo",c?.name||q?.name||"")}
  function syncRunCard(c){if(!run||!c||c.isCandle)return;const r=run.deck.find(x=>x.uid===c.uid);if(!r)return;r.kills=c.kills||0;r.wake=c.wake||0;r.atk=c.atk;r.maxHp=c.maxHp;r.hp=r.maxHp;r.sigils=[...c.sigils];r.scar=c.scar||0}
  function showAwaken(c,lane){const o=$("#awakenOverlay");if(o){o.innerHTML=\`<div class="awaken-sheet"><div class="eyebrow">Despertar</div><h2>\${c.name}</h2><p>ACTO \${roman(c.wake||1)} · La criatura conserva esta transformación durante la run.</p><div class="awaken-art"><img src="\${creatureArt(c)}"></div></div>\`;o.classList.remove("hidden","show");void o.offsetWidth;o.classList.add("show");setTimeout(()=>o.classList.add("hidden"),1180)}const el=$("#playerSide")?.children?.[lane]?.querySelector?.(".unit-card");if(el){el.classList.add("awakened");const p=center(el);burst(p.x,p.y,"#d7b37a",24);setTimeout(()=>el.classList.remove("awakened"),900)}sfx("chime")}`);
  R('const count=isBoss?10:7+Math.min(6,Math.floor(run.depth/4));','const count=isBoss?8:(alpha?7:6)+Math.min(4,Math.floor(run.depth/5));');
  R('const c=cardFrom(rand(pool)),boost=Math.floor(run.depth/8)+(alpha?1:0);','const c=cardFrom(rand(pool)),boost=Math.floor(Math.max(0,run.depth-1)/10)+(isBoss&&run.act>=4?1:0);');
  R('if((alpha||run.depth>10)&&Math.random()<.25)awaken(c);','if(((alpha&&run.depth>3)||run.depth>13)&&Math.random()<.18)awaken(c);');
  R('type,turn:1,pressure:alpha?(run.cadencePact?-2:-1):0,blood:0,','type,turn:1,pressure:isBoss?0:(alpha?(run.cadencePact?-2:-1):1),blood:0,');
  R('for(let i=0;i<3;i++)if(battle.enemyDeck.length&&(isBoss||Math.random()<.72))battle.enemy[i]=battle.enemyDeck.pop();','for(let i=0;i<3;i++){const chance=isBoss ? .82 : (alpha ? .66 : .58);if(battle.enemyDeck.length&&Math.random()<chance)battle.enemy[i]=battle.enemyDeck.pop()}');
  R('const art=c.isCandle?"assets/creatures/candle.svg":beastById[c.species].art;','const art=creatureArt(c);');
  R('const art=beastById[battle.queue[i].species]?.art||"assets/creatures/candle.svg";','const art=creatureArt(battle.queue[i]);');
  R('const cost=effectiveCost(c),pay=canPay(c),art=c.isCandle?"assets/creatures/candle.svg":beastById[c.species].art,d=document.createElement("div");','const cost=effectiveCost(c),pay=canPay(c),art=creatureArt(c),d=document.createElement("div");');
  R('battle.player[i]=null;battle.blood+=gain;battle.bones++;toast(`+${gain} Sangre · +1 Hueso`);','battle.player[i]=null;if(!c.isCandle)battle.discard.push(c);battle.blood+=gain;battle.bones++;toast(`+${gain} Sangre · +1 Hueso`);');
  R('if(killer.kills>=wakeNeed(killer)){awaken(killer);toast(`${killer.name} ha Despertado.`);if(hasRelic("silver_mirror"))killer.hp=killer.maxHp}','if(killer.kills>=wakeNeed(killer)){awaken(killer);toast(`${killer.name} ha Despertado.`);if(hasRelic("silver_mirror"))killer.hp=killer.maxHp;showAwaken(killer,i)}syncRunCard(killer)');
  R('battle.bones++;\n        if(c.sigils.includes("requiem"))','if(!enemy&&!c.isCandle){syncRunCard(c);battle.discard.push(c)}\n        battle.bones++;\n        if(c.sigils.includes("requiem"))');
  R('for(let i=0;i<3;i++)if(!battle.queue[i]&&battle.enemyDeck.length&&Math.random()<(battle.type==="boss"?.82:.56+Math.min(.22,run.depth*.01)))battle.queue[i]=battle.enemyDeck.pop()','for(let i=0;i<3;i++){const chance=(battle.type==="boss" ? .72 : (battle.type==="alpha" ? .52 : .40))+Math.min(.16,run.depth*.008);if(!battle.queue[i]&&battle.enemyDeck.length&&Math.random()<chance)battle.queue[i]=battle.enemyDeck.pop()}');
  R('shiftPressure(2);renderBattle();if(battle.pressure>=7)','shiftPressure(3);renderBattle();if(battle.pressure>=7)');
  R('function victory(){\n    run.fragments+=battle.type==="alpha"?5:battle.type==="boss"?8:3;','function victory(){\n    [...battle.player,...battle.hand,...battle.draw,...battle.discard].filter(Boolean).forEach(syncRunCard);\n    run.fragments+=battle.type==="alpha"?6:battle.type==="boss"?10:4;');
  R('const cost=5+s.cost*2,d=document.createElement("div")','const cost=4+s.cost*2,d=document.createElement("div")');
  eval(s+'\n//# sourceURL=menagerie-runtime.js');
})().catch(err=>{console.error(err);document.body.insertAdjacentHTML('beforeend',`<pre style="position:fixed;inset:10px;z-index:999;background:#130b0c;color:#ffd8d8;padding:15px;white-space:pre-wrap">No se pudo iniciar The Last Menagerie:\n${err.message}</pre>`)});
