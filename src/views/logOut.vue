<template>
    <div> cerrando su sesion..
        </div>
</template>

<script>
export default {
 created(){
      this.$store.dispatch('auth/logOut');
      this.$router.push('/login');
    }
  }
</script>