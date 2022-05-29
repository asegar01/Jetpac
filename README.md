# Jetpac

## RESUMEN
El juego consiste en manejar al astronauta Jetman, el cual tiene que ensamblar las partes de su cohete y luego llenarlo de combustible para poder despegar hacia un nuevo planeta. Todo esto debe realizarse bajo el ataque de enemigos que aparecen desde la izquierda y derecha de la pantalla. Jetman puede defenderse mediante un arma láser que puede disparar.

- Géneros: 
  - Disparos
- Plataformas: 
  - PC (Navegador web)
- Público Objetivo: 
  - Edad: Todos los públicos
  - Sexo: Cualquiera
  - Región: Europa
  - Idioma: Español

## ASPECTOS GENERALES
### RELATO BREVE Y PARCIAL DE UNA PARTIDA TÍPICA
El juego comienza con Jetman situado en la zona inferior de la pantalla, a la izquierda del cohete. Deberá recolectar el combustible necesario para abandonar el planeta, que se encuentra en las distintas plataformas, y llevarlo a donde se encuentra el cohete. Mientras tanto, Jetman será atacado por asteroides, los cuales deberá esquivar o destruir utilizando su arma láser. Si al recargar combustible la nave no está recargada al completo, aparecerá una nueva unidad de combustible en una posición aleatoria de la escena. Una vez recargado el cohete por completo, despegará hacia un nuevo planeta.

## JUGABILIDAD
### IMPLEMENTACIONES
- Menú principal cuando empieza la partida, pudiendo elegir el nivel deseado.
- Escena con tiles y movimiento toroidal.
- Movimiento, incluido vertical con el propulsor, y animaciones tanto del jugador como de los enemigos.
- Recoger los botes de combustible, pudiendo transportarlos.
- Tres tipos de enemigo: uno con movimiento constante y aleatorio, uno que persigue al jugador y otro que rebota con el suelo y las plataformas.
- Tres niveles con un tipo de enemigo diferente en cada uno.
- Mecánica de disparo, pudiendo eliminar así a los enemigos.
- HUD que indica toda la información del nivel, incluyendo el número de botes de combustible que se necesitan.
- Menú de victoria o derrota.
- Sonidos y colisiones entre las entidades correspondientes.

### CONTROLES
- El movimiento del jugador de izquierda a derecha se realiza utilizando las flechas correspondientes de los cursores. 
- Al pulsar el cursor de la flecha arriba, el jugador se propulsa en vertical. Cuando se deja de pulsar, cae por gravedad. 
- Con la tecla espacio se dispara en la dirección que apunta el jugador.
