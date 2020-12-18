// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//---------------------IMPORTANTE!! -------------------------

/**
 * Aquí está la configuración inicial del proyecto, la vida de Vue, inicia por este archivo, como podemos
 * Detallar, más abajo se instancia un objeto Vue que es quien inicializa todo:
 */

import Vue from 'vue'
import App from './App'
import router from './router'

//Con este módulo estamos indicando a Vue que vamos a importar bootstrap para usarlo en nuestro proyecto
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//Importando los archivos CSS igual de importantes a el anterior módulo para los estilos de bootstrap:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * Este conector me permite conectar la base de datos FireBase con VueJS,
 * Fué instalado por nosotros usando el instalador de npm
 */
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false


// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Indicando que vamos a usar el conector Vuefire, con esto, ya tenemos una manera de conectarnos a FIREBASE
Vue.use(firestorePlugin)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})