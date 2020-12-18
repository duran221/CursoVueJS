"use strict";

//Estamos declarando un objeto con VUE que nos permite agregar la lógica que necesitamos aquí:
const app = new Vue({
    //El elemento donde vamos a montar Vue:
    el: '#app',
    //Los datos que deseamos transmitir al HTML:
    data: {
        titulo: "hola mundo con Vue",
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        personas: [{
                nombre: 'Cristian',
                apellido: 'Duran'
            },
            {
                nombre: 'Carolina',
                apellido: 'Perez'
            },
            {
                nombre: 'Oscar',
                apellido: 'Duarte'
            },
        ],
        frutas: [{
                nombre: 'Manzana',
                cantidad: 4,

            },
            {
                nombre: 'Pera',
                cantidad: 3
            }
        ],
        nuevaFruta: ''

    },
    //Propiedad que almacena la lógica de Vue (Métodos):
    methods: {
        //De esta manera especificamos una función en Javascript Moderno: IMPORTANTE:
        agregarFruta() {
            console.log("Agregaste una fruta");
            //Agregando una fruta al array de frutas existente, algo interesante es que el resultado se actualiza
            //En el HTML automaticamente:
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
        }
    },
});