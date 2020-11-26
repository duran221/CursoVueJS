<template>

<!--IMPORTANTE!!! Este div va a ser reemplazado por el div que listamos más abajo, para ver su
    Funcionamiento, favor comentar el div 'app' y renombrar este en su defecto:
-->


<!--<div id="app">

    <h1>Hola mundo</h1>

    <!--La etiqueta está señalando que estamos usando este componente aquí-->
<!-- <Test message="Vengo de afuera"></Test>

    <!--Voy a usar otro componente, veámos cómo se comporta:-->
<!--    <User/>
</div>
-->

<div id="app">
    <!--Una simple barra de navegación que se mostrará por toda la aplicación:-->
    <nav>
        <ul>
            <li>
                <!--Me permite crear enlaces y enrutarlos hacia nuestros componentes, para que se muestre
                    Uno u otro-->
                <router-link to="/test">
                    Test
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    User
                </router-link>
            </li>

        </ul>
    </nav>

    <!--Aquí visualizo un componente en específico, si por ejemplo, cargo la sección de usuarios, esa
        Se mostrará aquí:
    -->
    <router-view>

    </router-view>

</div>


</template>

<script>
//Importamos el componente que hemos creado
import Test from './components/Test'
import User from './components/User'


export default {
    name: 'App',
    components: {

        Test,
        User
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
