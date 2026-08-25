(()=>{
 const D=window.MENAGERIE_DATA;if(!D)return;
 const bossRules={
  taxidermist:'La primera presencia rival que cae en cada carril regresa una vez como Atrezzo 1/1. Cada carril solo puede reconstruirse una vez.',
  silk_mother:'Cada dos turnos cose una Cría. Cada tercer turno debilita en −1 ATQ a un intérprete tuyo durante esa escena.',
  bell_man:'El tañido recorre los carriles 1→2→3. Al final del turno, todo lo que esté en el carril señalado recibe 1 de daño.',
  hungry_one:'Si el Eco aumenta durante el turno, su presencia viva más fuerte gana +1 ATQ y +1 VIDA.',
  mirror_choir:'Cada turno un carril distinto refleja tu ATQ: la presencia rival enfrentada copia el Ataque del intérprete que tiene delante.',
  pale_director:'Cada cuarto impacto directo rival activa una Cadenza enemiga. Tus Cadenzas pierden el Encore y ceden 1 Presión.'
 };
 for(const b of D.bosses)if(bossRules[b.id])b.rule=bossRules[b.id];
 const tuning={
  ashwing:[2,3],iron_cub:[2,4],red_hare:[3,2],moss_boar:[3,5],hollow_crow:[4,3],marrow_wolf:[4,4],lantern_fox:[3,4],rune_crab:[1,5],glass_adder:[1,4],ivory_mantis:[4,2]
 };
 for(const c of D.beasts)if(tuning[c.id]){c.atk=tuning[c.id][0];c.hp=tuning[c.id][1]}
})();