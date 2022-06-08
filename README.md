# Jetpac

## RESUMEN
En Jetpac tomamos el control del astronauta Jetman, quien debe conseguir escapar del planeta en el que se ha estrellado. Para ello, debe llenar su cohete de combustible, para así poder despegar hacia un nuevo planeta. Todo esto debe realizarse bajo el continuo ataque de enemigos que aparecen desde ambos lados de la pantalla. Jetman puede defenderse mediante un arma láser que le permite disparar.

- Géneros: 
  - Disparos
  - Plataformas
- Plataformas: 
  - PC (Navegador web)
- Público Objetivo: 
  - Edad: Todos los públicos
  - Sexo: Cualquiera
  - Región: Europa
  - Idioma: Español

## DESCRIPCION
Juego de plataformas donde se deberá recolectar recolectar todos los botes de combustible necesarios para poder escapar del planeta sin ser golpeado por los enemigos, pudiendo hacer uso de un arma láser y del jetpac que posee el jugador. El juego acaba al completar los tres niveles, con un tipo diferente de enemigo en cada uno. En caso de ser golpeado por alguno, la partida habrá terminado.

![game](https://user-images.githubusercontent.com/82326232/172577968-919dfcf5-c5b4-4b6b-8598-2e038b513d0f.png)
1. Jugador
2. Nave
3. Combustible
4. Enemigo

## ASPECTOS GENERALES
### RELATO BREVE Y PARCIAL DE UNA PARTIDA TÍPICA
El juego comienza con Jetman situado en la zona inferior de la pantalla, a la izquierda del cohete. Deberá recolectar el combustible necesario para abandonar el planeta, que se encuentra en las distintas plataformas, y llevarlo a donde se encuentra el cohete. Mientras tanto, Jetman será atacado por asteroides, los cuales deberá esquivar o destruir utilizando su arma láser. Si al recargar combustible la nave no está recargada al completo, aparecerá una nueva unidad de combustible en una posición aleatoria de la escena. Una vez recargado el cohete por completo, despegará hacia un nuevo planeta.

## JUGABILIDAD
### MECANICA
#### MECANICAS DE JUGADOR
- Jetpac: El jugador puede utilizarlo sin ningún límite de uso para sobrevolar la escena, esquivar a los enemigos y poder alcanzar las distintas plataformas.
- Disparo: El personaje posee un arma láser que puede usar para eliminar a los diferentes enemigos que aparecen en cada nivel.
  
#### MECANICAS DE ENEMIGO
Todos los enemigos aparecen en una posición aleatoria en la parte superior de la pantalla y son destruidos al recibir un disparo. Además, no interactúan entre ellos ni se cortan el paso. Si el jugador entra en contacto con uno, la partida habrá terminado. Hay tres tipos de enemigos:
- Asteroide: Posee un movimiento constante en una dirección aleatoria. Se destruye cuando colisiona con el suelo o alguna plataforma.
- Burbuja: Inicialmente se mueve también en alguna dirección aleatoria pero rebota al tocar el suelo o las plataformas, cambiando así su dirección.
- Follower: Persigue al jugador de forma constante y no interactúa con los demás elementos de la escena.

#### MECANICAS DE ESCENARIO
El escenario estará compuesto de tiles y constará del suelo y tres plataformas.
- Movimiento toroidal: Tanto el jugador como los asteroides y las burbujas cuando salen de la pantalla por el lado derecho o izquierdo, reaparecen en el lado contrario de la pantalla. En la parte superior no existe ningún límite.

#### CONTROLES
- El movimiento del jugador de izquierda a derecha se realiza utilizando las flechas correspondientes de los cursores. 
- Al pulsar el cursor de la flecha arriba, el jugador se propulsa en vertical. Cuando se deja de pulsar, cae por gravedad. 
- Con la tecla espacio se dispara en la dirección que apunta el jugador.

#### CAMARA
Se trata de una cámara side-scroller estática que enfoca todo el nivel al completo. Al ser estática no se mueve junto al jugador.

#### MUSICA Y SONIDO
Habrá música constante durante todo el juego. Además, las diferentes acciones que sucedan tendrán también efectos de sonido.

### DINAMICA
El objetivo principal es escapar de todos los planetas con vida, los cuales se suceden en orden, en cuyo caso se ha ganado. El jugador pierde cuando colisiona con cualquier enemigo.
- Combustible: Para poder ganar se ha de recoger el número de botes de combustible que se indique en cada nivel, esquivando todo tipo de peligros, pudiendo transportarlos hasta la nave, en cuya parte superior aparecerán los botes recogidos hasta el momento y los necesarios.

### ESTETICA
El estilo utilizado en Jetpac es Pixel Art, apostando por colores en blanco y negro en su totalidad para conseguir un minimalismo y estilo clásico que agrade al jugador. El fondo será de color negro en todo momento.

## MENUS
- Menú principal: Menú que se muestra al comienzo y desde donde podremos acceder los diferentes niveles del juego, las opciones o volver a salir. Contará con estos tres botones en la zona inferior, de izquierda a derecha. Sobre ellos se encontrará una breve historia del desastre sucedido.

![menu](https://user-images.githubusercontent.com/82326232/172588291-bbdb576e-4802-4d1f-8f42-df946f213906.png)

- Menú de victoria y derrota: Menú que se muestra cuando se ha llegado al final de la partida. Dependiendo de si se ha logrado escapar de todos los planetas o no se mostrará uno u otro. En cualquiera se ofrece la posibilidad de volver al menú principal.

## HISTORIA
La historia se desarrolla tras el trágico accidente sufrido por Jetman, quien tenía la misión de encontrar vida inteligente en otro planeta. Un fallo en los motores de propulsión ha ocasionado un colapso en toda la nave y propiciado que esta se precipitara hacia un planeta desconocido. Ahora la misión de Jetman consiste en escapar de todos los peligros que se esconden con vida y regresar a casa.

## REFERENCIAS
- Jetpac (Wikipedia)
- Sprites: Pinterest
- Música: Looperman
- Diseño de mapa: Tiled
