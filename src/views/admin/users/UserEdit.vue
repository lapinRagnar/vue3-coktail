<template>
  <div>

    <h1>edition utilisateur</h1>

    <form @submit.prevent="edit">     
      
      <input hidden type="text" v-model="user.id">

      <div class="fromGroup">
        <input type="text" placeholder="name" v-model="user.nom">
      </div>

      <div class="fromGroup">
        <input type="text" placeholder="prenom" v-model="user.prenom">
      </div>

      <div class="formGroup">
        <input type="text" placeholder="pseudo" v-model="user.pseudo">
      </div>

      <div class="formGroup">
        <input type="email" placeholder="email" v-model="user.email">
      </div>

      <div class="formGroup">
        <button type="submit">editer</button>
      </div>

    </form>

    
  </div>
</template>

<script>

  import { userService } from '@/_services'

export default {
  name: 'UserEdit',
  props: ['id'],
  data(){
    return {
      user: {}
    }
  },
  methods: {
    edit(){
      console.log("donnée du formulaire",this.user)
      userService.updateUser(this.user)
        .then(res => {
          console.log("resultat update", res)
          this.$router.push({name: 'uList'})
        })
        .catch(err => console.log(err))
    }
  },
  mounted(){
    userService.getUser(this.id)
     .then(res => {
      console.log(res)
      this.user = res.data.data
     })
     .then(err => console.log(err))
  },

}
</script>

<style>

</style>