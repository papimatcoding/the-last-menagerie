window.MENAGERIE_DATA=(()=>{
const sigils={
swift:{mark:"I",name:"Preludio",text:"Ataca antes de la resolución normal."},
venom:{mark:"V",name:"Vitriolo",text:"Si inflige daño a una presencia, esta muere al final del turno."},
guardian:{mark:"G",name:"Custodia",text:"El primer daño recibido cada turno se reduce en 2."},
brood:{mark:"O",name:"Reparto",text:"Al salir de escena deja un Figurante 0/2 en su carril."},
hunger:{mark:"H",name:"Hambre",text:"Al eliminar una presencia gana +1 Ataque durante la run."},
echo:{mark:"E",name:"Bis",text:"Al entrar en escena roba una Presencia."},
thorns:{mark:"T",name:"Espinas",text:"Devuelve 1 de daño al atacante."},
leech:{mark:"S",name:"Ovación",text:"Cada impacto directo genera +1 Foco ese turno."},
ward:{mark:"W",name:"Amparo",text:"Si estaba a vida completa, no puede morir de un solo golpe."},
requiem:{mark:"R",name:"Réquiem",text:"Al abandonar la escena empuja 1 Presión a tu favor."},
duet:{mark:"D",name:"Dúo",text:"Si tiene un aliado adyacente, gana +1 Ataque."},
precise:{mark:"IV",name:"Compás IV",text:"Si realiza el cuarto impacto de la Cadencia, añade +1 Presión."}
};
const beasts=[
["ashwing","Manto de Humo",1,"focus",2,4,["echo"],"Veladura","Una máscara sin cuerpo. El humo recuerda mejor que la carne."],
["iron_cub","Custodio Remachado",1,"focus",2,4,["guardian"],"Bastidor","Un actor construido para permanecer cuando todos los demás abandonan la escena."],
["glass_adder","Filamento Vítreo",2,"focus",1,4,["venom"],"Veladura","Se mueve como una grieta que hubiese aprendido a escoger dónde terminar."],
["red_hare","Destello Carmesí",1,"focus",3,3,["swift"],"Instinto","Solo existe durante el instante en que todos miran al mismo lugar."],
["moss_boar","Tramoya Verde",2,"focus",3,5,["thorns"],"Instinto","Cuerda, madera y hoja falsa: un decorado que olvidó que debía quedarse quieto."],
["hollow_crow","Oráculo Hueco",3,"echo",4,4,["hunger"],"Veladura","No pronuncia el futuro: lo deja caer de su máscara en pequeños fragmentos."],
["saint_shell","Nácar Litúrgico",4,"echo",1,7,["ward"],"Bastidor","Un relicario articulado que confunde protección con permanencia."],
["marrow_wolf","Sabueso Medular",2,"focus",4,4,["leech"],"Instinto","Persigue el eco de las salidas de escena, no el olor de la sangre."],
["blind_weaver","Costurera Ciega",3,"echo",2,4,["brood"],"Veladura","Cose suplentes en los lugares donde una presencia dejó un hueco."],
["threshold_stag","Heraldo del Umbral",3,"focus",5,6,["guardian"],"Instinto","Una figura de asta y terciopelo encargada de abrir puertas que no deberían existir."],
["bell_golem","Campanario Vivo",5,"echo",4,8,["thorns"],"Bastidor","Cada golpe hace vibrar una arquitectura que no cabe sobre el escenario."],
["ink_owl","Escriba de Tinta",3,"focus",3,5,["echo","swift"],"Veladura","Lee el gesto siguiente en las manchas que deja el anterior."],
["solar_hyena","Risa Solar",4,"echo",3,4,["hunger","duet"],"Instinto","Una máscara sonriente que solo se ilumina cuando el reparto empieza a romperse."],
["rune_crab","Peana Rúnica",1,"focus",1,5,["guardian"],"Bastidor","Un pequeño bastidor defensivo que reescribe sus marcas tras cada impacto."],
["black_ram","Ariete Negro",3,"focus",6,4,["leech"],"Instinto","Una pieza de tramoya diseñada para convertir una línea recta en desastre."],
["veil_lynx","Acechante de Velo",2,"focus",3,3,["swift","precise"],"Veladura","Aparece cuando la obra necesita una ejecución limpia y desaparece antes del aplauso."],
["choir_eel","Cuerda del Coro",3,"echo",2,5,["duet","echo"],"Veladura","Vibra con las presencias cercanas hasta que el escenario entero parece cantar."],
["ivory_mantis","Bisturí de Marfil",2,"focus",4,2,["swift","venom"],"Bastidor","Un instrumento demasiado preciso para seguir fingiendo que es utilería."],
["lantern_fox","Farol Errante",2,"focus",3,5,["requiem"],"Veladura","Un depredador de escena que lleva su propia luz y decide dónde debe continuar la función."],
["salt_hound","Perro de Cal",3,"focus",4,5,["duet"],"Instinto","Sigue el rastro pálido de las heridas viejas pintadas sobre el suelo."],
["mirror_swan","Reflejo Blanco",4,"echo",3,6,["ward","echo"],"Veladura","No imita lo que ve. Ensaya una versión más perfecta y más cruel."],
["ash_beetle","Escarabajo de Telón",2,"echo",1,6,["requiem","guardian"],"Bastidor","Recoge restos de escena hasta convertirse en parte del decorado."],
["thorn_elk","Arquitecto de Espinas",3,"focus",4,7,["thorns","duet"],"Instinto","Levanta una geometría hostil en torno a cualquier aliado que permanezca cerca."],
["mourning_bat","Luto Alado",2,"echo",3,3,["swift","requiem"],"Veladura","Cada descenso parece una reverencia demasiado profunda."],
["pale_seraph","Serafín Pálido",5,"echo",5,7,["ward","precise"],"Veladura","Una presencia que nadie recuerda haber visto entrar al teatro."],
["grave_mole","Tramoyista Sepulcral",2,"echo",2,6,["guardian","brood"],"Bastidor","Desaparece bajo las tablas y regresa acompañado de algo que no figuraba en el reparto."],
["cinder_viper","Ascua de Bambalina",2,"focus",3,3,["venom","requiem"],"Instinto","Una brasa con máscara que convierte el último gesto en el primero de otra escena."],
["porcelain_ape","Actor de Porcelana",4,"echo",5,5,["hunger","guardian"],"Bastidor","Un intérprete articulado; cada grieta demuestra que sobrevivió a otra representación."]
].map(([id,name,cost,costType,atk,hp,sigilsList,tribe,lore])=>({id,name,cost,costType,atk,hp,sigils:sigilsList,tribe,lore}));
const oaths=[
{id:"collector",name:"La Conservadora",mark:"C",text:"La primera incorporación repetida de cada Acto provoca dos Despertares en una presencia existente.",flavor:"Favorece un reparto corto de intérpretes irrepetibles."},
{id:"butcher",name:"El Tramoyista",mark:"T",text:"La primera Retirada de cada turno genera +1 Foco adicional.",flavor:"Convierte el movimiento del reparto en economía y recompensa reposicionar la escena."},
{id:"scribe",name:"El Dramaturgo",mark:"D",text:"Tus presencias necesitan una memoria menos para Despertar.",flavor:"Hace que cada intérprete acumule identidad con mayor rapidez."}
];
const relics=[
{id:"ivory_tooth",mark:"◇",name:"Diente de Marfil",text:"El primer impacto directo de cada turno genera +1 Presión adicional."},
{id:"broken_bell",mark:"◌",name:"Campana Hendida",text:"La primera presencia de coste 1 que entra cada turno recibe +1 Ataque."},
{id:"empty_cage",mark:"▥",name:"Jaula Vacía",text:"El límite de mano aumenta de 6 a 7."},
{id:"borrowed_heart",mark:"♥",name:"Corazón Prestado",text:"Comienzas cada combate con un Figurante adicional."},
{id:"bone_needle",mark:"†",name:"Aguja de Tramoya",text:"Los Injertos también conceden +1 Vida al huésped."},
{id:"black_ash",mark:"✦",name:"Ceniza Negra",text:"Después de una Función Alfa, una presencia aleatoria obtiene 1 memoria."},
{id:"half_moon",mark:"☾",name:"Media Luna",text:"Cada tercera carta jugada cuesta 1 recurso menos."},
{id:"ancient_jaw",mark:"⌁",name:"Caja de Resonancia",text:"Comienzas cada combate con 2 Eco."},
{id:"fourth_string",mark:"IV",name:"Cuarta Cuerda",text:"La Cadenza añade +3 Presión en lugar de +2."},
{id:"silver_mirror",mark:"□",name:"Espejo de Plata",text:"La primera presencia que Despierta en un combate recupera toda su Vida."},
{id:"red_thread",mark:"—",name:"Hilo Carmesí",text:"La primera presencia con Dúo que entra obtiene además +1 Vida."},
{id:"sealed_program",mark:"§",name:"Programa Sellado",text:"Tras un Maestro de Acto, puedes rechazar la Reliquia y Despertar dos cartas distintas."}
];
const bosses=[
{id:"taxidermist",name:"EL ESCENÓGRAFO",rule:"La primera presencia enemiga que sale de cada carril regresa una vez como copia 1/1.",quote:"«Un decorado perfecto no distingue entre utilería y cadáver.»",pool:["threshold_stag","hollow_crow","saint_shell"]},
{id:"silk_mother",name:"LA COSTURERA MAYOR",rule:"Cada dos turnos coloca una Cría en una intención vacía.",quote:"«Ningún espacio permanece vacío si se espera el tiempo suficiente.»",pool:["blind_weaver","glass_adder","ashwing"]},
{id:"bell_man",name:"EL CAMPANERO CIEGO",rule:"Al final del turno, el carril central recibe 1 de daño en ambos lados.",quote:"«Incluso el dolor puede obedecer a un compás.»",pool:["bell_golem","iron_cub","rune_crab"]},
{id:"hungry_one",name:"EL PRIMER ACTOR",rule:"Cada salida de escena fortalece en +1 Ataque a su presencia viva más fuerte.",quote:"«Toda interpretación perfecta acaba devorando a su intérprete.»",pool:["marrow_wolf","solar_hyena","black_ram"]},
{id:"mirror_choir",name:"EL CORO SIN ROSTRO",rule:"Las presencias laterales copian el Ataque actual del centro al entrar.",quote:"«La simetría no es belleza. Es obediencia.»",pool:["mirror_swan","choir_eel","ink_owl"]},
{id:"pale_director",name:"EL DIRECTOR PÁLIDO",rule:"Cada cuarto impacto directo del enemigo activa su propia Cadenza.",quote:"«No eres el único que escucha cuándo debe caer el cuarto golpe.»",pool:["pale_seraph","veil_lynx","ivory_mantis"]}
];
const nodeTypes={
hunt:{name:"Ensayo",mark:"I",desc:"Escena de combate estándar.",reward:"Incorporación · Fragmentos"},
alpha:{name:"Función Alfa",mark:"A",desc:"La compañía rival entra con mejor posición y presencias curtidas.",reward:"Incorporación Alfa"},
graft:{name:"Taller de Máscaras",mark:"†",desc:"Transfiere un Sigilo de una presencia a otra.",reward:"Injerto permanente"},
camp:{name:"Camerino",mark:"C",desc:"Trata una Herida, acelera un Despertar o depura el reparto.",reward:"Recuperación"},
archive:{name:"Archivo",mark:"§",desc:"Mejora la memoria de una presencia.",reward:"Memoria"},
merchant:{name:"Taquilla Negra",mark:"M",desc:"Gasta Fragmentos en nuevas presencias o restauraciones.",reward:"Compra selectiva"},
altar:{name:"Foso de Orquesta",mark:"V",desc:"Acepta una cláusula que altera las reglas de la run.",reward:"Pacto"},
omen:{name:"Presagio",mark:"?",desc:"Una escena narrativa de consecuencias inciertas.",reward:"Variable"},
reliquary:{name:"Atrezzo Sellado",mark:"R",desc:"Elige una regla temporal para este Acto.",reward:"Atrezzo"},
boss:{name:"Maestro de Acto",mark:"IV",desc:"Cierra el Acto con una regla propia.",reward:"Reliquia mayor"}
};
const actNames=[
["LA GALERÍA VACÍA","Los marcos han sido preparados para presencias que aún no existen."],
["EL AVIARIO CARMESÍ","Cada jaula contiene una sombra distinta del mismo pájaro."],
["LA CAPILLA DE SAL","Las heridas no cicatrizan aquí; adquieren forma."],
["EL TEATRO SUMERGIDO","El telón abre hacia un lugar que no debería tener profundidad."],
["LA SALA SIN PÚBLICO","La obra continúa aunque ya no quede nadie a quien convencer."],
["EL CUARTO ESCENARIO","No figura en ningún plano. Sin embargo, siempre estuvo reservado."]
];
const curatorLines=[
"Una baraja excelente no contiene respuestas. Contiene intenciones.",
"La presencia que sobreviva suficiente tiempo terminará escribiendo su propio nombre.",
"Retirar no consiste en perder una pieza. Consiste en decidir cuándo debe abandonar el foco.",
"La simetría es útil. La ruptura de la simetría es memorable.",
"Una carta repetida es una oportunidad para profundizar, no para acumular.",
"La Presión no mide daño. Mide quién está dictando el ritmo de la escena.",
"Toda run debería producir al menos una presencia que no pudiera haber existido al principio."
];
return{sigils,beasts,oaths,relics,bosses,nodeTypes,actNames,curatorLines};
})();