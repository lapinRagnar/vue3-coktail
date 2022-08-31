<template>
  <nav class="conteneur">
    <router-link to="/">accueil</router-link> |
    <router-link to="/cocktails">cocktails</router-link> |
    <router-link to="/contact">contact</router-link> |
    <router-link to="/admin/dashboard">admin</router-link>
  </nav>
</template>

<script>
export default {
  name: 'PublicNav'
}
</script>

<style lang="scss">
  .conteneur {
    width: 100%;

    a{
      font-size: 30px;
      color: white;
      text-decoration: none;
    }
  }
</style>