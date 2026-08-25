# The Last Menagerie — Echo Stage v3

Roguelike de cartas ritualista diseñado para móvil. Una derrota termina la run. Cada Acto genera un mapa ramificado nuevo y las presencias del reparto pueden acumular memoria, Despertares e Injertos durante esa run.

## Identidad v3

La economía principal ya no usa Sangre/Huesos.

- **Foco**: energía temporal del turno. Se reinicia cada turno y puede aumentar mediante Retirada, Cadenza, reliquias y pactos.
- **Eco**: energía persistente del combate. Se genera cuando una presencia abandona la escena y paga a las entidades más extrañas del reparto.
- **Retirada**: una vez por turno puedes sacar una criatura aliada de escena. No muere: vuelve al descarte y produce Foco + Eco.
- **Cadenza**: cada cuarto impacto directo genera Presión adicional y concede un Encore de Foco para el siguiente turno.

## Progresión del mapa

- la primera fila de cada Acto siempre contiene encuentros, para que la run empiece con recursos y decisiones reales;
- los nodos de soporte aparecen después;
- el Intermediario no aparece como primera decisión y requiere que ya hayas podido ganar Fragmentos;
- Alfa, Contratos, Utilería y Presagios aparecen progresivamente en filas más profundas;
- cada Acto vuelve a generar conexiones y nodos.

## Dirección artística

- bestiario rediseñado como presencias teatrales originales, no como animales geométricos;
- tres escuelas visuales: **Instinto**, **Veladura** y **Bastidor**;
- retratos SVG generativos con niebla, grano, halos, ojos, fracturas y variaciones por personaje;
- el propio retrato cambia visualmente al Despertar;
- Foco y Eco tienen iconografía física propia;
- animaciones específicas para Entrada, Retirada, impactos, muerte, Cadenza y Despertar;
- escenas narrativas más largas y tocables para que puedas terminar de leerlas antes de continuar.

## Balance v3

- encuentros iniciales menos opresivos;
- menos enemigos y refuerzos en los primeros Actos;
- escalado de estadísticas más tardío;
- Presión inicial favorable en encuentros normales;
- sistema de margen: si tu mesa está vacía y no puedes pagar ninguna carta, la escena concede +1 Foco;
- más Fragmentos por victoria;
- tienda reajustada;
- los Guardianes siguen siendo peligrosos, pero la dificultad crece por reglas y composición, no solo por estadísticas.

## Archivos activos

- `index.html` — interfaz y estructura actual
- `game.css` — estilos base
- `boot-v3.js` — cargador de Echo Stage v3
- `bundle-v3.gz.b64` — arte, datos, lógica y estilos v3 empaquetados

Los archivos de revisiones anteriores permanecen en el historial del repositorio, pero `index.html` ya no los carga.

## Jugar desde GitHub Pages

1. Abre **Settings → Pages**.
2. En **Source**, selecciona **Deploy from a branch**.
3. Selecciona **main** y **/ (root)**.
4. Guarda.
5. El juego quedará en:

`https://papimatcoding.github.io/the-last-menagerie/`

Cada cambio futuro que hagamos directamente en `main` se desplegará en esa misma URL.
