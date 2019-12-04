<template>
  <div>
    <!--<otrComponenete :propiedad ="valor"/>-->
  </div>
</template>
<script>
import { METHODS } from 'http';
//import otr>Componente from @/componentes/ottroComponenete.vue
export default {
  name: "comonenteEjemplo", //  <--cambiame! !!
  components: {
    //otroComponente,
  },
  props: {
    propiedad: {
      type: String, //string, numbre,object, boolean, Array
      required: false,
      default: ""
    },
    //...

},

data: ()=>({
    variable:'valor por defecto de la propiedad',
    intervalo:null, // mirar la seccion created() y beforeDestroy()
    //...
}),
computed:{
    miComputada(){
        return 1+1;
    },
    methods(parametro) {
 consolelog('soy un metodo y mi parametro es', parametro);
 return true;
    },
},
    //wachers:{}
beforeCreate(){},
    created(){
        this.intervalo= setInterval(() => {
            consolo.log('jhan pasado 2 seg')
        }, 2000);
        console.log('componente creado con exito');
},
//beforeMount(){},
//mounted(){},
//beforeUpdate(){},
//update(){},
beforeDestroy(){
    this.intervalo= clearInterval(this.intervalo);
},
//destroyed(){}
  
}
</script>