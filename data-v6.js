(()=>{
 const D=window.MENAGERIE_DATA;if(!D)return;
 const tiers={
  ashwing:1,iron_cub:1,red_hare:1,rune_crab:1,
  glass_adder:1,moss_boar:1,lantern_fox:1,
  marrow_wolf:2,hollow_crow:2,blind_weaver:2,veil_lynx:2,ash_beetle:2,cinder_viper:2,
  salt_hound:3,ink_owl:3,grave_mole:3,choir_eel:3,ivory_mantis:3,solar_hyena:3,
  saint_shell:4,threshold_stag:4,black_ram:4,mirror_swan:4,thorn_elk:4,mourning_bat:4,
  bell_golem:5,pale_seraph:5,porcelain_ape:5
 };
 const sigilWeight={swift:.9,venom:1.2,guardian:.85,brood:.95,hunger:1.05,echo:.75,thorns:.75,leech:.95,ward:1.1,requiem:.7,duet:.75,precise:.8};
 const fixed={ashwing:1,iron_cub:1,red_hare:1,rune_crab:1};
 const starterTune={ashwing:[1,3],iron_cub:[1,4],red_hare:[2,2],rune_crab:[1,4]};
 for(const b of D.beasts){
   b.unlockTier=tiers[b.id]||3;
   if(starterTune[b.id]){b.atk=starterTune[b.id][0];b.hp=starterTune[b.id][1]}
   b.power=+(b.atk*1.15+b.hp*.68+b.sigils.reduce((s,x)=>s+(sigilWeight[x]||.7),0)).toFixed(2);
   let c=b.costType==='echo'?Math.round(b.power/2.45):Math.round((b.power-1)/2.5);
   c=Math.max(b.costType==='echo'?2:1,Math.min(b.costType==='echo'?7:5,c));
   if(fixed[b.id])c=fixed[b.id];
   b.cost=c;
 }
 const names={
   taxidermist:['EL REGIDOR','Cada dos turnos gira tu reparto un carril. El próximo movimiento siempre se anuncia.','«Una marca en el suelo es una orden, no una sugerencia.»'],
   silk_mother:['LA PRIMA DONNA DE CERA','Cada dos turnos proyecta una copia de cera de su intérprete más fuerte.','«Una gran voz merece un eco que pueda derretirse.»'],
   bell_man:['EL MAESTRO DE BASTIDORES','Bloquea un carril distinto cada turno. No puedes dar entrada allí hasta el siguiente cambio.','«El escenario pertenece a quien decide dónde puede pisarse.»'],
   hungry_one:['EL CORIFEO','Al final del turno, su intérprete más fuerte copia el mayor ATQ visible en tu reparto.','«Una sola voz basta si las demás aprenden a obedecerla.»'],
   mirror_choir:['EL PÚBLICO VACÍO','Cada carril vacío de tu lado cede 1 Presión al final del turno.','«Nada juzga con tanta severidad como una butaca vacía.»'],
   pale_director:['EL DIRECTOR PÁLIDO','Completa su propia Cadenza. En el cuarto turno comienza el Acto Final.','«Cuando llegue el cuarto compás ya no estarás dirigiendo.»']
 };
 for(const b of D.bosses){let n=names[b.id];if(n){b.name=n[0];b.rule=n[1];b.quote=n[2]}}
 D.nodeTypes.hunt.name='Escena';
 D.nodeTypes.hunt.desc='Combate de repertorio. Una ruta nunca puede evitar todas las escenas.';
 D.nodeTypes.alpha.name='Función de Riesgo';
 D.nodeTypes.merchant.name='Taquilla de Autor';
 D.nodeTypes.archive.name='Archivo de Papeles';
 D.nodeTypes.graft.name='Taller de Máscaras';
 D.nodeTypes.reliquary.name='Atrezzo Prohibido';
 D.nodeTypes.hunt.mark='⚔';D.nodeTypes.alpha.mark='✦';D.nodeTypes.camp.mark='⌂';D.nodeTypes.archive.mark='§';D.nodeTypes.graft.mark='†';D.nodeTypes.merchant.mark='◇';D.nodeTypes.altar.mark='♢';D.nodeTypes.omen.mark='◉';D.nodeTypes.reliquary.mark='◆';D.nodeTypes.boss.mark='♛';
 D.curatorLines.push(
  'Una ruta sin conflicto no es una obra: es un pasillo.',
  'El coste correcto no premia estadísticas; premia decisiones difíciles.',
  'Cuatro intérpretes bastan para levantar el telón. El resto debe ganarse su lugar.',
  'El Foco se agota. El Eco se acumula. El director debe saber cuál de los dos está gastando de verdad.'
 );
 window.MENAGERIE_V6={focusBase:4,focusCap:7,echoCap:9,starter:['ashwing','iron_cub','red_hare','rune_crab']};
})();
