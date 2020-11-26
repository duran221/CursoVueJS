// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//Importando el módulo que hemos descargado desde npm:
import VueResource from 'vue-resource';
//Indicandole a vue, que vamos a usar dicho módulo:
Vue.use(VueResource);

//Importando el módulo vue-router que nos permitirá enrutar páginas dentro de la aplicación:
import VueRouter from 'vue-router';
//Usando el módulo que importamos anteriormente:
Vue.use(VueRouter)

//Importando los componentes que vamos a enrutar en la aplicación:
import Test from './components/Test';
import User from './components/User';

///////////////////////////////////////////////////////////////////////////////////////////

const router = new VueRouter({
    //MODE: Permite que el navegador conserve la dirección url siguiendo el patrón indicado abajo:
    mode: 'history',
    //Constante que me indica la raíz del directorio:
    base: __dirname,
    //ROUTES: Lista de las rutas que seguirá la URL contenida dentro del proyecto VueJS:
    routes: [{
            //Esta ruta me indica qué componente se cargará al iniciar la aplicación:
            path: '/',
            //Nombre del componente:
            component: User
        },
        {
            path: '/test',
            component: Test
        }
    ]
});

///////////////////////////////////////////////////////////////////////////////////////////


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    //Con esta propiedad indico que voy a enrutar los componentes que hemos creado:
    router,

    //Como vamos a enrutar diferentes pestañas, el siguiente atributo no se usará:
    // el: '#app',

    //Aquí indicamos el componente principal que va a contener a los demás:
    components: { App },
    template: '<App/>'

    //Indicamos más abajo cuál será el template en el cual vamos a montar este recurso:    
}).$mount('#app');