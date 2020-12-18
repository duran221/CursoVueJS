<template>
  <div class="hello">
    <div class="card">
      <div class="card-header">
        <h3>Agregar un Link</h3>
      </div>

      <!--Esta es la nueva forma de crear tarjetas en Bootstrap 4-->
      <div class="card-body">

        <!---El formulario hace uso del  método 'addLink para insertar un nuevo Enlace en bd'
            '.prevent' Evita que la página se vuelva a recargar
        -->
        <form v-on:submit.prevent="addLink">
          <input type="text" placeholder="Tilulo">
        </form>
      </div>

      <div class="card-footer">
        
      </div>

    </div>
    
  </div>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js"></script>

<script>

  import Firebase from 'firebase';

 

  /**
   * Defino el objeto que contiene la configuración de la base de datos FireBase, la información allí obtenida
   * Fué generada por la página Firebase console al generar un nuevo proyecto firebase.
   */


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAfQk2a6x8F5n5iCSXyI6c_HyzPYhxTzS4",
    authDomain: "fir-fistproject.firebaseapp.com",
    projectId: "fir-fistproject",
    storageBucket: "fir-fistproject.appspot.com",
    messagingSenderId: "432724587079",
    appId: "1:432724587079:web:67a69a28493021339ff762",
    measurementId: "G-FYT597XKQ9"
  };
  // Initialize Firebase
  let conection= Firebase.initializeApp(firebaseConfig);
  Firebase.analytics();

  //Obtengo una referencia al establecer la conexión con la base de datos remota:
  //let conection =  Firebase.initializeApp(firebaseConfig);

  //Obtengo una referencia a la colección de base de datos que me trae Firebase:
  let db= conection.database();

  //Obtengo o CREO una colección dentro de la base de datos no relacional a la cual denomino 'LINKS'
  let linksRef = db.ref('links');


  //El objeto que utiliza por defecto este componente:
  export default {
    name: 'HelloWorld',
    //Este método que me proporciona VueFire me permite convertir en modelo la colección que trae la base de
    //datos, con esto tengo un modelo listo para usar en la vista del cliente:
    firebase: {
      links: linksRef
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App OK'
      }
    },
    methods: {
      addLink: function(){
        console.log('Oe Llave');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
