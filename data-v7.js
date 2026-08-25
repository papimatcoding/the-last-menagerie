(()=>{
  const D=window.MENAGERIE_DATA;
  if(!D) return;
  const byId=Object.fromEntries(D.beasts.map(b=>[b.id,b]));
  const set=(id,p)=>Object.assign(byId[id]||{},p);

  // SUBLIME REPERTOIRE — first illustrated set. Values intentionally form a clean curve.
  set('ashwing',{name:'Susurradora de Veladura',cost:1,costType:'focus',atk:1,hp:3,sigils:['duet'],tribe:'Veladura',unlockTier:1,lore:'Toda voz deja un eco en la tramoya.'});
  set('iron_cub',{name:'Custodio Remachado',cost:1,costType:'focus',atk:1,hp:4,sigils:['guardian'],tribe:'Bastidor',unlockTier:1,lore:'Toda bisagra aprendió a resistir.'});
  set('red_hare',{name:'Bailarina de Hilo',cost:1,costType:'focus',atk:2,hp:2,sigils:['swift'],tribe:'Bastidor',unlockTier:1,lore:'Nadie pisa la tabla con tanta ligereza.'});
  set('rune_crab',{name:'Figurante de Cera',cost:0,costType:'focus',atk:0,hp:2,sigils:[],tribe:'Figurante',unlockTier:1,lore:'Siempre sale a escena para caer primero.'});

  set('hollow_crow',{name:'Oráculo Hueco',cost:2,costType:'echo',atk:1,hp:4,sigils:['echo'],tribe:'Veladura',unlockTier:2,lore:'Ve primero aquello que nadie desea escuchar.'});
  set('marrow_wolf',{name:'Sabueso Medular',cost:2,costType:'focus',atk:4,hp:2,sigils:['hunger'],tribe:'Instinto',unlockTier:2,lore:'Huele el miedo antes de que la escena lo admita.'});
  set('saint_shell',{name:'Guarda Bambalina',cost:3,costType:'focus',atk:3,hp:4,sigils:['guardian'],tribe:'Bastidor',unlockTier:2,lore:'Protege el telón incluso cuando nadie aplaude.'});
  set('choir_eel',{name:'Coro Desfigurado',cost:3,costType:'echo',atk:2,hp:5,sigils:['duet','echo'],tribe:'Veladura',unlockTier:2,lore:'Cantan con muchas gargantas y una sola pena.'});

  set('threshold_stag',{name:'Ciervo del Telón',cost:5,costType:'focus',atk:5,hp:4,sigils:['thorns','precise'],tribe:'Instinto',unlockTier:3,lore:'Cuando embiste, hasta la tramoya recuerda el golpe.'});
  set('pale_seraph',{name:'Serafín de Ensayo',cost:5,costType:'echo',atk:4,hp:6,sigils:['ward','precise'],tribe:'Veladura',unlockTier:3,lore:'Nadie cae mientras sus alas cubran la escena.'});

  // Semantic glyphs: every sign now has one mechanical meaning.
  const marks={swift:'»',venom:'†',guardian:'⛨',brood:'♟',hunger:'✦',echo:'◉',thorns:'✣',leech:'✧',ward:'◇',requiem:'◒',duet:'Ⅱ',precise:'Ⅳ'};
  for(const [id,mark] of Object.entries(marks)) if(D.sigils[id]) D.sigils[id].mark=mark;

  // Five illustrated Masters of Act. The Publico Vacio remains the sixth, hidden master.
  const bosses=Object.fromEntries(D.bosses.map(b=>[b.id,b]));
  if(bosses.taxidermist) Object.assign(bosses.taxidermist,{name:'EL REGIDOR',quote:'«Nadie conserva el sitio que él le asignó.»'});
  if(bosses.silk_mother) Object.assign(bosses.silk_mother,{name:'LA PRIMA DONNA DE CERA',quote:'«Cada aplauso le regala un rostro nuevo.»'});
  if(bosses.bell_man) Object.assign(bosses.bell_man,{name:'EL MAESTRO DE BASTIDORES',quote:'«Hace del espacio una amenaza.»'});
  if(bosses.hungry_one) Object.assign(bosses.hungry_one,{name:'EL CORO SIN ROSTRO',quote:'«Canta con tu voz antes de dejarla vacía.»'});
  if(bosses.pale_director) Object.assign(bosses.pale_director,{name:'EL DIRECTOR PÁLIDO',quote:'«Solo él conoce cómo termina la obra.»'});

  const visuals={
    'Susurradora de Veladura':{x:0,y:0,school:'Veladura',act:1},
    'Custodio Remachado':{x:1,y:0,school:'Bastidor',act:1},
    'Bailarina de Hilo':{x:2,y:0,school:'Bastidor',act:1},
    'Figurante de Cera':{x:3,y:0,school:'Figurante',act:1},
    'Oráculo Hueco':{x:4,y:0,school:'Veladura',act:2},
    'Sabueso Medular':{x:0,y:1,school:'Instinto',act:2},
    'Guarda Bambalina':{x:1,y:1,school:'Bastidor',act:2},
    'Coro Desfigurado':{x:2,y:1,school:'Veladura',act:2},
    'Ciervo del Telón':{x:3,y:1,school:'Instinto',act:3},
    'Serafín de Ensayo':{x:4,y:1,school:'Veladura',act:3},
    'EL REGIDOR':{x:0,y:2,boss:true},
    'LA PRIMA DONNA DE CERA':{x:1,y:2,boss:true},
    'EL MAESTRO DE BASTIDORES':{x:2,y:2,boss:true},
    'EL CORO SIN ROSTRO':{x:3,y:2,boss:true},
    'EL DIRECTOR PÁLIDO':{x:4,y:2,boss:true}
  };

  window.MENAGERIE_V7={version:'7.0.0',sprite:'assets/v7/sublime-sprite.webp',visuals};
})();