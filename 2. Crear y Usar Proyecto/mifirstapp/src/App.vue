<template>
<div id="app">

    <h1>Hola mundo</h1>

    <!--La etiqueta está señalando que estamos usando este componente aquí-->
    <Test message="Vengo de afuera"></Test>

    <!--Voy a usar otro componente, veámos cómo se comporta:-->
    <User/>
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
