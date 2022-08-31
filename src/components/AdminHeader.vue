<template>
  <div class="adminHeader">
    <div class="titre">
        Bienvenue, admin header! 
      </div>
    </div>
    <div>      
      <p>{{ getMavariable }} </p>
      <div @click="logout">logout</div>
    </div>
</template>

<script>

  import { accountService } from '@/_services';
  import { mapGetters } from 'vuex';

export default {
  name: 'AdminHeader',
  methods: {
    logout(){
      accountService.logout()
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['getMavariable'])
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