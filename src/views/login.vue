<template>
  <div>
    pasword :
    <input type="password" v-model="password" />
    <br />
    <button @click="login()">login</button>
    <div>
      es segura?
      <span v-if="esSegura"> si</span>

      <span v-else> no</span>
    </div>
    {{$store.state.auth.isLogged}}
  </div>
</template>
<script>
export default {
  name: "login",
  data: () => ({
    hasError: false,
    password: "",
    esSegura:false, //comentar si usamos computed
  }),
 // computed: {
  //  esSegura() {
   //   return (this.password.length > 2);
   // }
//  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.password).then(estaLogeado => {
        if (estaLogeado) {
          this.$router.push("/");
        } else {
          console.log("error! No estas logeado!");
          this.hasError = true;
          this.password = "";
        }
      });
    }
  },
  watch:{
    password(){
      console.log('el password a cambiado');
      this.esSegura=(this.password.length >2);
    },
    
  },
  created() {
    // si estoy logueado vamos al home

    if (this.$store.state.auth.isLogged == true) {
      this.$router.push("/");
    } else {
      console.log("no estas logeado");
    }
  }
};
</script>