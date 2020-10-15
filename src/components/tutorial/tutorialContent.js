const contenido = [`
# Tutorial de Programación

## Introducción.

Decidí hacerlo en un formato interactivo para que puedan ver resultados a medida que se explican los conceptos.
El objetivo de este tutorial es entender en que consiste programar y como componer e interpretar un programa.

La programación hoy se conoce como parte de las ciencias de la computación o de la ingeniería de software, pero la vemos en cualquier dispositivo que tiene un proceso definido de manera automática.
La práctica de la programación en sí no tiene que ver tanto con la computación.

`,`
Una descripción muy buena sobre la programación la define como un **estudio de los procesos**.

Programar consiste principalmente en definir procesos que eventualmente pueden o no ser ejecutados por una computadora, y la programación consiste en definir estos procesos.
De la misma manera en que la matemática se preocupa por **lo que es**, la programación se preocupa por **cómo se hace**.

Para programar en primer lugar utilizamos un **lenguaje de programación** que es una manera de poder expresar un procedimiento y que sea entendible tanto por una computadora como por una persona.
En este caso vamos a estar usando un lenguaje hecho específicamente para este tutorial. Vamos a ir analizando paso a paso como componer, ejecutar y analizar un programa simple.

En la inferfaz de arriba a la izquierda hay un editor de texto, en el cual vamos a escribir el código que querramos ejecutar.

Si queremos ejecutar el código arriba a la derecha del editor hay un botón que dice Ejecutar.

A la derecha hay una imagen generada a partir del resultado de ejecutar el código.

A lo largo del tutorial vamos a explorar este lenguaje y es necesario que editen el código que aparece en el editor y lo ejecuten para poner en práctica los conceptos y realizar los programas.
`,`
## Datos y Procedimientos.

Un **procedimiento** es algo que ejecuta una acción, es decir, 'algo que hace'.

Para poder ejecutar o cumplir esta acción el procedimiento necesita **datos** que sería información que nosotros le facilitamos.

Esto es lo mismo que usar un microondas, en el cual elegimos la duración e iniciamos el dispositivo. Los datos son los segundos que va a tardar en calentar la comida, lo cual seleccionamos desde la botonera,  y el procedimiento de calentar lo iniciamos al apretar el boton de iniciar.

El lenguaje de programación en este caso, entiende ambos: datos y procedimientos. Los procedimientos en este lenguaje vemos que tienen un nombre y luego un conjunto de paréntesis.
En estos paréntesis es donde le pasamos lo que llamamos **Parámetros**, que pueden ser tanto procedimientos, como datos.
`,`
Para aclarar esto pensemos en una función matemática: **f(x) = x + 1**. Esta función recibe como dato una **x** y le suma 1.
Si nosotros aplicamos **f(1)** obtenemos como resultado **2**. Si aplicamos **f(2)** obtenemos **3**.
La función **f** tiene una similitud con un procedimiento, nosotros le pasamos nuestros datos como parámetro y **f** la procesa y obtiene un resultado en base a los datos que le pasemos como parámetro.

El único parámetro de **f(x)** es **x**, y el procedimiento calcula ese resultado en que sería aplicar **x + 1**. En los lenguajes de programación ocurre algo muy similar.

Para poder llamar a estos procedimientos usamos 'declaraciones', es decir acciones a ejecutar por el interprete de nuestro lenguaje de programación.
`,`

Como vemos tenemos el siguiente código:

\`\`\`
Ejecutar(
    Dibujar(
        Circulo
    )
)
\`\`\`

\`\`\`Ejecutar\`\`\` es un procedimiento, el cual lo que hace es recibir como parámetro cada declaración. En este caso tenemos una sola declaración pero puede recibir cuantas declaraciones quiera.

\`\`\`
Ejecutar(
    declaracion1
)

\`\`\`
`,`
Es importante también saber que si queremos ejecutar más declaraciones, cada declaración dentro de ejecutar tiene que estar separada por coma, y siempre entre parentesis.

\`\`\`
Ejecutar(
    Declaracion1,
    Declaracion2,
    Declaracion3
)
\`\`\`

\`\`\`Ejecutar solo funciona si lo escribimos con la primer letra en mayuscula y sin caracteres especiales como tildes.
`,`
Si nosotros lo escribimos como \`\`\`ejecutar(Declaración1)\`\`\` no va a funcionar porque pusimos un caracter especial (la tilde), y además la primera letra debe ir en mayuscula.

En este código la declaración que vamos a usar es la de llamar al procedimiento \`\`\`Dibujar\`\`\`. Este procedimiento también recibe los datos como parámetro.
En este caso el parámetro que le pasamos es \`\`\`Circulo\`\`\`.

\`\`\`Ejecutar\`\`\` lo que hace es llamar al procedimiento de \`\`\`Dibujar\`\`\`, el cual renderiza nuestro circulo en cada cuadrante de la grilla.

La grilla que vemos es una grilla de 10 x 10 cuadrantes, dibujar justamente renderiza la figura que le pasemos como parámetro en cada cuadrante de la grilla de 10x10. Ejemplo:

<blockquote>
    <p align="center">
        <img src="https://i.ibb.co/gmJrVhr/grilla-vacia.png" alt="grilla-vacia" border="0">
    </p>
</blockquote>

Acá podemos visualizar como es la división por cuadrantes de la grilla. Al ejecutar el código va a renderizar en cada cuadrante una figura que nosotros programemos y la va a repetir en cada cuadrante:

<blockquote>
    <p align="center">
        <img src="https://i.ibb.co/TRNtHsL/grilla-llena.png" alt="grilla-llena" border="0">
    </p>
</blockquote>
        
`,`
Probemos cambiando el código en el editor por el siguiente:

\`\`\`
Ejecutar(
    Dibujar(
        Cuadrado
    )
)
\`\`\`
`,`
Ahora probemos con un triangulo:

\`\`\`
Ejecutar(
    Dibujar(
        Triangulo
    )
)
\`\`\`

Como vemos los datos que pasamos como parámetro para poder dibujar es uno de los siguientes:

\`\`\`
- Cuadrado
- Triangulo
- Circulo
\`\`\`

Estos datos son lo que llamamos **Primitivos**. Los primitivos son los tipos de datos más elementales que nos aporta un lenguaje de programación, en el caso de este lenguaje son formas geométricas.

\`\`\`Dibujar\`\`\` es un procedimiento que recibe un solo parámetro, y tiene que ser si o si una forma, Más adelante vamos a ver como combinar más formas para poder pasarlas como parámetro de \`\`\`Dibujar\`\`\`.
`,`
Recuerden que en este lenguaje de programación no usamos caracteres especiales (tildes, etc) en los nombres de los procedimientos o en los nombres de los primitivos, y que los procedimientos y primitivos comienzan con mayuscula.
También recuerden que los procedimientos tienen un conjunto de paréntesis **()** luego del nombre, dentro del cual pasamos los datos como parámetros.

Vamos a ver otro procedimiento, en este caso uno llamado \`\`\`Colorear\`\`\`.

\`\`\`
Ejecutar(
    Dibujar(
        Colorear(Triangulo, Rojo)
    )
)
\`\`\`

Recordemos que \`\`\`Dibujar\`\`\` requiere que pasemos una sola Forma como parámetro.


En este procedimiento aparece otro primitivo, el Color. El primer parámetro de Colorear es una forma, y el segundo es un color. Si pasamos primero un color y luego una forma, el procedimiento no va a funcionar. Es importante respetar el orden de los parámetros.
`,`
Los colores disponibles son:

\`\`\`
- Rojo
- Verde
- Azul
- Blanco
- Negro
\`\`\`

El color negro sirve si queremos ocultar una forma, dado que es el mismo color que el fondo de la imágen.

Es importante entender que \`\`\`Colorear\`\`\` devuelve como resultado otra forma con el color cambiado, y por eso podemos pasarle esa forma como parámetro al procedimiento \`\`\`Dibujar\`\`\`.
`,`

Con esto vemos que por ahora tenemos los procedimientos

- \`\`\`Ejecutar(Declaracion1, Declaracion2, Declaracion3)\`\`\`: En el cual le pasamos la cantidad de declaraciones que querramos ejecutar. A este procedimiento solo lo usamos una sola vez, y lo usamos para definir dentro de el las distintas declaraciones.
- \`\`\`Dibujar(Forma)\`\`\`: El cual recibe como primer parámetro una forma (Circulo, Triangulo o Cuadrado).
- \`\`\`Colorear(Forma, Color)\`\`\`: El cual nos genera una forma de cierto color a partir de una Forma como primer parámetro \`\`\`(Circulo, Triangulo o Cuadrado)\`\`\`
y un color como segundo parámetro \`\`\`(Rojo, Verde, Azul, Blanco o Negro)\`\`\`.
`,`
## Medios de Combinación.

Ahora vamos a ver un procedimiento nuevo que extiende un poco el concepto de Colorear. Colorear lo que hace es combinar dos primitivos. Color y Forma.

Esto es otra base fundamental de cualquier lenguaje de programación: los **Medios de Combinación**, es decir, son procedimientos que nos permiten combinar primitivos.

Vamos a ver otro procedimiento que también es un medio de combinacion: \`\`\`Combinar\`\`\`.


Para avanzar con lo que sigue vamos a empezar a realizar un diagrama del código en la cual vamos a entender como se ejecuta el código en secuencia. Tomemos el siguiente código:


\`\`\`
Ejecutar(
    Dibujar(
        Combinar(Triangulo, Cuadrado)
    )
)
\`\`\`
`,`

Si realizamos un análisis gráfico de como se ejecuta este código obtenemos el siguiente diagrama:

<blockquote>
    <p align="center">
        <img src="https://i.ibb.co/BzSwD1r/diagrama-1.png" alt="diagrama-1" border="0">
    </p>
</blockquote>

En este diagrama vemos enumerado el paso a paso de la ejecución con números que lo indican:

- Primero se ejecuta el parámetro Triangulo.
- Luego se ejecutan los parámetros de Colorear: primero Cuadrado y luego Rojo.
- Luego de evaluar estos parámetros se ejecuta Colorear.
- Luego se ejecuta Combinar y tenemos un triangulo combinado con un cuadrado rojo.
- Luego se ejecuta el procedimiento Dibujar, que va a ejecutar nuestro renderizado.
- Y por último vemos como Ejecutar es lo último que ocurre en nuestro diagrama.

Este diagrama se lo conoce como **Modelo de Sustitución**. Es decir, vamos reemplazando paso a paso como fué la ejecución de cada procedimiento y en que orden se evaluan los datos. 

Recordemos que \`\`\`Dibujar\`\`\` requiere que pasemos una sola Forma como parámetro.

En este ejemplo, estamos combinando un Triangulo y un Cuadrado y este nos genera una forma nueva que es una combinación de los dos, luego se lo pasamos como parámetro a \`\`\`Ejecutar\`\`\`.

Al procedimiento \`\`\`Combinar\`\`\` le pasamos como parámetro 2 formas, y nos genera una nueva, Podemos pasarle las formas que querramos, pero siempre tenemos que pasar 2 parámetros para este procedimiento.

`,`
Para verlo de otra manera, imaginenlo como si tuviesemos una función **f(x) = x + 1** (la cual suma 1 a un valor x), y otra función **g(x) = x * 2** (la cual multiplica por 2 a un valor x).

Si combinamos el resultado de **f(x)** y ese resultado lo ponemos como el parámetro de **g(x)** estamos haciendo una composición.

De esa manera si ejecutamos las funciones asi: **g(f(2))**, obtenemos primero el resultado de **f(2)**, que como resultado nos devuelve **3**, y sobre ese **3** aplicamos **g(3)** obtenemos un 6 como resultado final.

Componer entre procedimientos es similar a componer entre funciones matemáticas, es una manera de componer procedimientos más complejos a partir de procedimientos más simples.

Esto parece complicado pero a medida que avancemos se vá a asimilar mejor el concepto.
`,`

Podemos combinar varios de estos procedimientos de combinación para generar programas más complejos, como por ejemplo colorear una forma y usarla como parámetro de Combinar:

\`\`\`
Ejecutar(
    Dibujar(
        Combinar(
            Triangulo,
            Colorear(Cuadrado, Rojo)
        )
    )
)
\`\`\`

Veamos el modelo de sustitución:

<blockquote>
    <p align="center">
        <img src="https://i.ibb.co/TcMKtZV/diagrama-2.png" alt="diagrama-2" border="0">
    </p>
</blockquote>
`,`

Si queremos generar una combinación de tres formas, podemos usar el resultado de Combinar como un parámetro de de otro llamado al procedimiento de Combinar: 

\`\`\`
Ejecutar(
    Dibujar(
        Combinar(
            Triangulo,
            Combinar(
                Cuadrado,
                Circulo
            )
        )
    )
)
\`\`\`

`,`
También podemos expandir este concepto usando el procedimiento de Colorear a uno de los parámetros:

\`\`\`
Ejecutar(
    Dibujar(
        Combinar(
            Triangulo,
            Combinar(
                Cuadrado,
                Colorear(Circulo, Verde)
            )
        )
    )
)
\`\`\`

Por último veamos el modelo de sustitución de este código:

<blockquote>
    <p align="center">
        <img src="https://i.ibb.co/w6SNwz8/diagrama-3.png" alt="diagrama-3" border="0">
    </p>
</blockquote>

`,`
## Contexto

Vamos a explorar el concepto de 'Contexto'. Hasta ahora vemos que tenemos ciertos procedimientos y primitivos definidos. ¿De donde salen?

Cada lenguaje de programación nos brinda un 'contexto', el cual nos aporta definiciones previas que usamos para componer nuestros programas.

En este caso el contexto es el que nos aporta Ejecutar, Combinar, Dibujar y al mismo tiempo nos aporta los primitivos como circulo o Verde.

¿Que pasaría si queremos usar el contexto para aportar nuestras propias definiciones dentro de nuestro programa?
`,`
## Medios de Abstracción.

Supongamos que yo defino una forma, y la quiero reutilizar más adelante en mi programa. Para eso tenemos un nuevo procedimiento llamado \`\`\`Definir\`\`\`
\`\`\`
Ejecutar(
    Definir("MiForma", Combinar(Circulo, Triangulo)),
    Dibujar(MiForma)
)
\`\`\`

En este programa estamos utilizando varios parámetros dentro de \`\`\`Ejecutar\`\`\`. Es importante recordar que cada parámetro que pasamos dentro de \`\`\`Ejecutar\`\`\` es una declaración.

Además estamos usando este nuevo procedimiento: \`\`\`Definir\`\`\`.
`,`
Este procedimiento recibe un parámetro con un primitivo nuevo que sería una 'cadena de texto', la cual va siempre entre comillas dobles "". 

Mediante una cadena de texto le asignamos un nombre a nuestra definición \`\`\`MiForma\`\`\`, y como segundo parámetro le pasamos el procedimiento \`\`\`Combinar\`\`\`.

Luego nosotros llamamos al procedimiento \`\`\`Dibujar\`\`\` y este hace referencia a \`\`\`MiForma\`\`\`, el cual es conocido por nuestro programa porque en la declaración anterior la definimos usando el procedimiento \`\`\`Definir\`\`\`.

Definir recibe siempre como primer parámetro una cadena de texto, y como segundo parámetro puede recibir cualquier otro primitivo.

Podemos usar \`\`\`Definir\`\`\` para abstraer ciertas formas y reutilizarlas en las declaraciones siguientes.

Definir es lo que se conoce como \`\`\`Medios de Abstracción\`\`\` Que son la última base fundamental de los lenguajes de programación que vamos a ver en este tutorial.
Los medios de abstracción nos permite generar una abstracción agregandola al contexto para poder reutilizar esa abstracción en las declaraciones siguientes del programa.
Si nosotros quisieramos llamar a \`\`\`MiForma\`\`\` antes de definirla, el programa fallaría, porque aún no es conocida por el contexto de este lenguaje, por eso es importante respetar el orden.
`,`

Por último, veamos como podemos utilizar muchas declaraciones en secuencia para generar patrones aún más complejos utilizando el procedimiento \`\`\`Definir\`\`\`.

\`\`\`
Ejecutar(
    Definir("TrianguloVerde", Colorear(Triangulo, Verde)),
    Definir("TrianguloRojo", Colorear(Triangulo, Rojo)),
    Definir("CuadradoAzul", Colorear(Cuadrado, Azul)),
    Definir("Forma1", Combinar(TrianguloVerde, TrianguloRojo)),
    Definir("Forma2", Combinar(CuadradoAzul, Triangulo)),
    Definir("FormaFinal", Combinar(Forma1, Forma2)),
    Dibujar(FormaFinal)
)
\`\`\`

En este código vemos:
- Cómo utilizar muchas declaraciones en secuencia dentro del procedimiento \`\`\`Ejecutar\`\`\`.
- Como vamos generando distintas formas en cada declaración mediante el procedimiento \`\`\`Definir\`\`\`.
- Como combinamos estas formas, en formas aún más complejas reutilizando las definiciones anteriores en cada declaración.
- Como renderizamos nuestra **FormaFinal** llamando al procedimiento \`\`\`Dibujar\`\`\`.
`,`

## Cierre
A modo repaso, comenzamos aprendiendo que es un procedimiento, que rol cumplen los datos en los procedimientos, y que es una declaración.
En el tutorial fuimos explorando el lenguaje y también aprendimos las 3 bases fundamentales de cualquier lenguaje de programación, que siempre tienen que resonar a la hora de aprender
cualquier otro lenguaje de programación:

- ¿Cuales son los primitivos?
- ¿Cuales son los medios de combinación?
- ¿Cuales son los medios de abstracción?

También es importante siempre pensar en el contexto de ejecución de cada programa, y entender el rol que cumple el orden de ejecución de cada declaración.

En algunos lenguajes estos conceptos pueden variar en su nombre, pero en si aparecen los mismos conceptos en cada lenguaje de programación.

Ahora prueben practicar y generar distintas imagenes en la grilla.

Si les copa compartan en sus comentarios en elsalon alguna selección de capturas de las imágenes generadas por ustedes con este lenguaje.
`];

export default contenido;