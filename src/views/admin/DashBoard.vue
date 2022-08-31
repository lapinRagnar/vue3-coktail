<template>
  <div class="dashboard">
    <div class="titre">
      Dashboard
    </div>

    <div class="texte">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum nihil tempora obcaecati, numquam similique aspernatur excepturi beatae quo harum vel soluta rem ex ab perferendis, deserunt expedita suscipit dignissimos.</p>
    </div>
    <div class="texte">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum nihil tempora obcaecati, numquam similique aspernatur excepturi beatae quo harum vel soluta rem ex ab perferendis, deserunt expedita suscipit dignissimos.</p>
    </div>
    <div class="texte">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, earum nihil tempora obcaecati, numquam similique aspernatur excepturi beatae quo harum vel soluta rem ex ab perferendis, deserunt expedita suscipit dignissimos.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style lang="scss" scoped>
  .dashboard {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    .titre{
      font-size: 30px;
      border-bottom: 1px solid darkred;
      
    }

    .texte{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
    }
  }
</style>