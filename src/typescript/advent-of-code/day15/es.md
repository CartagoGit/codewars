// https://adventofcode.com/2023/day/15

--- Día 15: Biblioteca de lentes ---
El plato reflector parabólico recién enfocado envía toda la luz recolectada a un punto en la ladera de otra montaña: la montaña más grande de la isla Lava. A medida que te acercas a la montaña, descubres que la luz es recogida por la pared de una gran instalación incrustada en la ladera de la montaña.

Encontrará una puerta debajo de un letrero grande que dice "Instalación de producción de lava" y al lado de un letrero más pequeño que dice "Peligro: se requiere equipo de protección personal más allá de este punto".

Al entrar, eres inmediatamente recibido por un reno algo asustado que lleva gafas protectoras y un casco holgado. El reno te lleva a un estante de gafas y cascos (rápidamente encuentras algunos que te quedan bien) y luego más adentro de las instalaciones. En un momento, pasas un botón con una leve marca en el hocico y la etiqueta "PULSE PARA AYUDA". ¡No es de extrañar que te cargaran en esa catapulta tan rápido!

Pasas por un último conjunto de puertas rodeadas de aún más señales de advertencia y entras en lo que debe ser la habitación que recoge toda la luz del exterior. Mientras admiras la gran variedad de lentes disponibles para enfocar aún más la luz, el reno te trae un libro titulado "Manual de inicialización".

"¡Hola!", comienza alegremente el libro, aparentemente sin darse cuenta del preocupado reno que lee por encima del hombro. "Este procedimiento le permitirá poner en línea la instalación de producción de lava, ¡todo sin quemar ni derretir nada involuntario!"

"Antes de comenzar, prepárese para utilizar el algoritmo Holiday ASCII String Helper (apéndice 1A)". Vaya al apéndice 1A. El reno se acerca con interés.

El algoritmo HASH es una forma de convertir cualquier cadena de caracteres en un único número en el rango de 0 a 255. Para ejecutar el algoritmo HASH en una cadena, comience con un valor actual de 0. Luego, para cada carácter de la cadena a partir de el principio:

Determine el código ASCII para el carácter actual de la cadena.
Aumente el valor actual por el código ASCII que acaba de determinar.
Establezca el valor actual en sí mismo multiplicado por 17.
Establezca el valor actual al resto de dividirse por 256.
Después de seguir estos pasos para cada carácter de la cadena en orden, el valor actual es la salida del algoritmo HASH.

Entonces, para encontrar el resultado de ejecutar el algoritmo HASH en la cadena HASH:

El valor actual comienza en 0.
El primer carácter es H; su código ASCII es 72.
El valor actual aumenta a 72.
El valor actual se multiplica por 17 para convertirse en 1224.
El valor actual pasa a ser 200 (el resto de 1224 dividido por 256).
El siguiente carácter es A; su código ASCII es 65.
El valor actual aumenta a 265.
El valor actual se multiplica por 17 para convertirse en 4505.
El valor actual pasa a ser 153 (el resto de 4505 dividido por 256).
El siguiente carácter es S; su código ASCII es 83.
El valor actual aumenta a 236.
El valor actual se multiplica por 17 para convertirse en 4012.
El valor actual pasa a ser 172 (el resto de 4012 dividido por 256).
El siguiente carácter es H; su código ASCII es 72.
El valor actual aumenta a 244.
El valor actual se multiplica por 17 para convertirse en 4148.
El valor actual pasa a ser 52 (el resto de 4148 dividido por 256).
Entonces, el resultado de ejecutar el algoritmo HASH en la cadena HASH es 52.

La secuencia de inicialización (la entrada de su rompecabezas) es una lista de pasos separados por comas para iniciar la instalación de producción de lava. Ignore los caracteres de nueva línea al analizar la secuencia de inicialización. Para verificar que su algoritmo HASH esté funcionando, el libro ofrece la suma del resultado de ejecutar el algoritmo HASH en cada paso de la secuencia de inicialización.

Por ejemplo:

rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7
Esta secuencia de inicialización especifica 11 pasos individuales; El resultado de ejecutar el algoritmo HASH en cada uno de los pasos es el siguiente:

rn=1 se convierte en 30.
cm- se convierte en 253.
qp=3 se convierte en 97.
cm=2 se convierte en 47.
qp- se convierte en 14.
pc=4 se convierte en 180.
ot=9 se convierte en 9.
ab=5 se convierte en 197.
pc- se convierte en 48.
pc=6 se convierte en 214.
ot=7 se convierte en 231.
En este ejemplo, la suma de estos resultados es 1320. Desafortunadamente, el reno robó la página que contiene el número de verificación esperado y actualmente corre emocionado por las instalaciones con ella.

Ejecute el algoritmo HASH en cada paso de la secuencia de inicialización. ¿Cuál es la suma de los resultados? (La secuencia de inicialización es una línea larga; tenga cuidado al copiarla).

Para comenzar, obtenga su opinión sobre el rompecabezas.