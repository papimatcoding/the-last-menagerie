(()=>{
  const D=window.MENAGERIE_DATA;if(!D)return;
  const buffs={ashwing:[2,3],glass_adder:[1,4],red_hare:[3,2],hollow_crow:[4,3],marrow_wolf:[4,4],lantern_fox:[3,5],mourning_bat:[3,3]};
  for(const b of D.beasts){if(buffs[b.id]){b.atk=buffs[b.id][0];b.hp=buffs[b.id][1]}b.art=b.id}
})();
