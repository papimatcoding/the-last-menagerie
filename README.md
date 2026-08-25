# The Last Menagerie — Grand Revision

Roguelike de cartas ritualista diseñado para móvil. Una derrota termina la run. Cada Acto genera un mapa ramificado nuevo y las criaturas pueden acumular memoria, Despertares e Injertos durante esa run.

## Grand Revision

- nuevo bestiario vectorial generado en tiempo real: ya no depende de los SVG geométricos antiguos;
- dirección visual unificada para criaturas Feral, Velo, Hierro y Ofrendas;
- animación dedicada de **Despertar**;
- las bajas y Despertares se sincronizan con la carta real de la run;
- las criaturas aliadas muertas o sacrificadas entran ahora en el descarte de combate y pueden volver al mazo al barajar;
- curva inicial de dificultad suavizada;
- escalado enemigo más gradual;
- aparición de refuerzos menos agresiva;
- recompensas de Fragmentos aumentadas y precios de tienda reajustados;
- varias criaturas iniciales frágiles han recibido pequeños ajustes de Vida;
- interfaz, tablero, mano, mapa e intenciones enemigas pulidos.

## Archivos activos

- `index.html` — estructura
- `game.css` — estilos base
- `grand.css` — revisión visual
- `art.js` — sistema de ilustraciones
- `boot.js` — arranque del juego
- `balance.js` — ajustes de criaturas
- `patch-loader.js` — correcciones de lógica y balance
- `data.gz.b64` / `game.gz.b64` — fuentes del juego empaquetadas para el despliegue estático

Los SVG antiguos que puedan seguir apareciendo en el historial/repositorio son legado de la versión anterior y ya no son necesarios para renderizar las criaturas.

## Jugar desde GitHub Pages

1. Abre **Settings → Pages**.
2. En **Source**, selecciona **Deploy from a branch**.
3. Selecciona la rama **main** y la carpeta **/ (root)**.
4. Guarda.
5. GitHub publicará el juego en:

`https://papimatcoding.github.io/the-last-menagerie/`

Cuando hagamos cambios en `main`, GitHub Pages actualizará esa misma URL automáticamente después del despliegue.
