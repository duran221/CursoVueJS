<template>
    <div class="user-div">

        <h1>Users Component</h1>

        <!--Usando un for para imprimir los elementos existentes en el arreglo definido previamente
            Por javascript, podríamos quizá usar un array de por ejemplo un servicio consultado por una API:
        -->
        <ul>
            <li v-for="user in users" :key="user.name">
                {{user.name}} &nbsp;&nbsp;  {{user.email}}

                <!--Vamos a crear un botón que nos permita eliminar el usuario, veamos-->
                <button type="button" v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>

        {{actualizeData}}

        <!--Un sencillo formulario que me permite enviar datos, por ejemplo a un servidor
            el evento 'prevent' es una abreviatura de e.preventDefault que me permite prevenir
            el comportamiento que trae por defecto la página y que la refresca cuando se envía datos al servidor
        -->
        <form v-on:submit.prevent="addUser">
            
            <input type="text" name="user" id="nameUser" v-model="newUser.name" placeholder="Nombre...">
            <input type="email" name="email" id="email" v-model="newUser.email" placeholder="Email...">
            <input type="submit" value="Enviar Datos">
        </form>

        <!--Aquí se están mostrando los datos que estamos solicitando a una API externa:-->
        <div class="datos-API">
            <h4>Mostrando datos desde una API</h4>

            <ul>
            <li class="" v-for="userApi in userAPI" :key="userApi.name">
                {{userApi.name}} &nbsp;&nbsp; {{userApi.email}}
            </li>
        </ul>
        </div>
        
    </div>
</template>

<script>
    export default {

        data(){
            return {
                users : [
                    {
                        name: 'Juan',
                        email: 'juan@correo.com',
                        contacted: false
                    },
                    {
                        name: 'Carlos',
                        email: 'carlos@correo.com',
                        contacted: true
                    },
                    {
                        name: 'Cristian',
                        email: 'cristian@correo.com',
                        contacted: true
                    }
                ],
                newUser:{

                },
                //Este arreglo guardará los usuarios que vamos a traernos desde la API:
                userAPI:[

                ]

                

            }
            
        },
        methods: {
            //Este método se ejecutará cuando se precione en botón 'Enviar Datos' del formulario
            addUser(){
                console.log('soy un nuevo usuario',this.newUser);
                //Agregando el objeto que se ha creado al array de usuarios:
                this.users.push(this.newUser);
                //Limpiando el objeto, con esto, como por arte de magia se limpian los campos:
                this.newUser={};

            },
            //Esta función me permitirá eliminar un usuario:
            deleteUser(user){
                alert("hey!! El elemento será eliminado");
                
                //Eliminando el objeto de la lista específica que nos han pasado:
                this.users.splice(this.users.indexOf(user),1);
            }
        },
        //Una simple propiedad computada.
        computed:{
            actualizeData(){
                return `Nombre Ingresado: ${this.newUser.name}  ${this.newUser.email}`;
            }
        },
        //Mediante esta propiedad le indico a Vue que cuando el componente sea cargado, ejecuta una acción:
        //En este caso le vamos a indicar que reciba datos desde una dirección:
        created(){
            console.log("Componente creado!");

            //Estamos haciendo uso del paquete vue-resource, que nos permite obtener datos desde una api:
            this.$http.get("https://jsonplaceholder.typicode.com/users").then((result) => {

                console.log(result.body);
                //Estamos guardando el objeto que hemos recibido en un Array que nos permitirá mostrar dichos
                //Usuarios en la interfaz de la plataforma:
                this.userAPI= result.body;

            }).catch((err) => {

                console.log(err)
            });
        }


    }
</script>

<style media="screen">

    .user-div {
        background-color: orange;
        color: white;
        padding: 2%;
    }

    .datos-API{
        background-color: blue;
        color: white;
        border: 2px solid black;
        padding: 2%;
        margin: 2%;
        text-align: center;
    }

</style>
