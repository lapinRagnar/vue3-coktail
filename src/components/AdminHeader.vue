<template>
  <div class="adminHeader">
    <div class="titre">
        Bienvenue, admin header! 
      </div>
    </div>
    <div>      
      <p>{{ aff }} </p>
      <div @click="logout">logout</div>
    </div>
</template>

<script>

  import { accountService } from '@/_services';

export default {
  name: 'AdminHeader',
  data(){
    return {
      aff: this.$store.state.maVariable
    }
  },
  methods: {
    logout(){
      accountService.logout()
      this.$router.push('/')
    }
  }
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