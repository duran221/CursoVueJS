<!--Un componente tiene básicamente tres principales características:
    1. Template: Donde ubicaremos nuestro código HTML
-->

<template>

    <div id="titulo">
        <h1>Hola, soy un componente</h1>

        <!--Esta es una etiqueta que me permite insertar código Javascript dentro de mi código HTML-->
        {{tittle}}

        <!--Leyendo la propiedad Color del código Javascript:-->
        <h4>{{color}}</h4>
        <p>
            {{userData.name}} , 
            {{userData.document}}
        </p>

        <br>
        <!--                 Directivas:                -->
        <!-- Las directivas son una manera de yo decirle a mi código html si voy por ejemplo a renderizar un 
            HTML, o simplemente mostrar texto plano, veámos:
        -->

        <!--Esta directiva me permite renderizar html que viene adjunto con una cadena de javascript-->
        <div v-html="tittle">

        </div>

        <!--Esta directiva me permite implantar el texto plano tal cual como viene desde javascript-->
        <div v-text="userData">

        </div>

        <!--Directiva 'v-if': Con esta directiva podemos anidar lógica de condicionales en nuestro html
            Podemos usar desde if, else y else if
        -->
        <div v-if="condicion">
            <p>Usted tiene permisos para acceder</p>

        </div>

        <!--Directiva v-else: Para completar el condicional que hemos hecho al principio-->
        <div v-else-if="!condicion">
            <p>Lo sentimos, no tiene permisos para acceder a la información</p>

        </div>

        <div v-else>
            <p>Tú tranquilo</p>
        </div>

        <hr>

        <!--Imprimiendo un solo elemento de el arreglo definido previamente en Javascript-->
        <div >

            {{colection[0].tittle}}

        </div>

        <hr>
        <br>
        <h3 style="text-align:center;">Imprimiendo los objetos de un array definido en javascript usando la directiva</h3>

        <!--directiva v-for: Esta directiva permite recorrer colecciones de objetos lo cual es muy útil a la hora
            de imprimir en pantalla colecciones de objetos, veámos-->
        
        <ul>
            <li v-for="elemento in colection" :key="elemento.tittle">
                {{elemento.tittle}}
            </li>
        </ul>

        <!--Imprimiendo el objeto entero de un arreglo declarado previamente en javascript-->
        <ul>
            <li v-for="elemento2 in colection" :key="elemento2.name">
                {{elemento2}}
            </li>
        </ul>

        <hr>
        <br>
        <h4>Funciones en VueJS</h4>

        <!--Este sencillo input me permite modificar u obtener parámetros del modelo que tengo en Javascript-->
        <input type="text" v-model="userData.name">


        <!--Las funciones permiten añadir funcionalidad a nuestras aplicaciones escritas en Vue,
            veámos:

            Estamos llamando una función con el botón creado que permita ejecutar código javascript    
        -->

        <button type="button" v-on:click="saludar(userData.name)">
            Click Me
        </button>


        <h4>Eventos:</h4>
        <!--Ejecutando un evento que me permita escuchar cuando se preciona cualquier tecla: -->

        <input type="text" v-on:keyup="typedKey">

        <hr>
        <br>
        <!--Un evento específico que me indique cuando se precione la tecla enter:-->
        <input type="text" id="searchBox" v-on:keyup.enter="typedEnter">

        <hr>
        <br>
        <h4>Propiedades computadas:</h4>
        <!--Invocando una propiedad computada, la cual no es más que una función que se actualiza
            Cada que ocurre un cambio, ya vamos a ver 
        -->
        {{actualizarName}}

        <h4>Props: o variables transferidas desde afuera:</h4>
        <hr>
        <br>
        <!--Aquí estoy usando la propiedad que me llegó desde otro componente distinto -->
        {{message}}

    </div>

</template>


<!--Un scrip, donde ubicaremos toda la lógica que encierra nuestro componente-->

<script>
export default {
    
    //Este método me permite retornar un objeto de Javascript, el cual podemos usar en nuestro HTML más arriba
    //En el Template, entonces, podemos retornar desde datos primitivos, hasta datos complejos como objetos:
    data() {
        //Estamos retornando datos a nuestro html:
        return{
            color: 'rojo',
            userData : {
                name: 'Cristian Duran',
                document: 1098310693,

            },
            tittle: '<h3>Hola, bienvenidos a mi página</h3>',
            condicion: false,
            colection : [
                {tittle: 'rojo'},
                {tittle: 'azul'},
                {tittle: 'verde'},
                {tittle: 'amarillo'},
                {tittle: 'etc'},

            ]
        }
    },
    methods: {
        saludar(nombre){
            
            alert(`¡Hola ${nombre}!`)
        },
        //También se puede escribir funciones en el formato clásico de EcmaScript 5
        typedKey: function(event){
            console.log(event.target.value);
            
        },
        typedEnter(){
            console.log("Has precionado ENTER");
            //Limpiando los datos ingresados en consola:
            let searchBox= document.querySelector("#searchBox");
            searchBox.value="";
        }
    },
    //Las propiedades computadas me permiten ejecutar funciones que se refrescan automaticamente cuando
    //Se producen cambios sobre las variables o elementos que tenemos en la función, esto lo vamos a ver
    //A continuación con un ejemplo:
    computed: {
        actualizarName (){
            //Para acceder a los datos del componente que están fuera de el usamos la palabra reservada 'this'
            return `Me acabo de actualizar ${this.userData.name}`;
        }

    },
    //Los 'props' o propiedades me permiten transferir datos desde componentes externos, en este caso, si
    //Miramos al detalle vemos que el componente Test está contenido dentro del componente 'App.vue', entonces
    //Si queremos por ejemplo mandar un mensaje desde afuera, acá lo recibiremos, veámos:
    props: {
        //Esta propiedad enviada desde afuera la estamos recibiendo aquí:
        message: {
            //Defino el tipo de dato de mi variable:
            type: String,
            //Si no me transfieren nada qué valor debo establecer por defecto:
            default: 'No me pasaron ningún texto'
        }

    }

}
</script>


<!--Por último pero no menos importante, los estilos, los estilos de nuestro componente,
    Nota: esto sólo afecta a este componente en específico:
-->
<style media="screen">

    #titulo{
        background-color: gray;
        width: 50%;
        margin: auto;
        height: 1350px;
        margin-top: 10%;
        padding: 2%;
        color: #ffffff;
        border: solid 2px black;
        border-radius: 10%;
    }

</style>