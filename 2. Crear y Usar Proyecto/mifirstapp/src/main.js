// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//Importando el módulo que hemos descargado desde npm:
import VueResource from 'vue-resource';
//Indicandole a vue, que vamos a usar dicho módulo:
Vue.use(VueResource);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})