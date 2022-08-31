<template>
  <div class="adminHeader">
    <div class="titre">
        Bienvenue, admin header! 
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminHeader'
}
</script>

<style scoped lang="scss">

  .adminHeader {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100px;

    .titre {
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 20px;
      font-weight: 900;
    }
  }


</style>