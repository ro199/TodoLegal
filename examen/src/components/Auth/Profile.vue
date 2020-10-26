<template>
  <div class="container">
      Bienvenido a tu perfil {{datauser}}
  </div>
</template>

<script>
export default {
    name: 'perfil',
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.isLoggedIn;
        }
    },
    data: () => ({
        datauser: localStorage.getItem('token'),      
    }),
}
</script>

<style>

</style>