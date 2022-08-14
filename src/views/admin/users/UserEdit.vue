<template>
  <div>
    user edit
    <p>tu as l'id {{ test }} </p>
    
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  data() {
    return {
      test: ''
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    this.test = this.$route.params.id
  }
}
</script>

<style>

</style>