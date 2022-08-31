<template>

  <div class="centrer">

    <h1>création d'un utilisateur</h1>

    <form @submit.prevent="ajout">    
      
      <p v-if="errors.length">
        <b>merci de corriger les erreurs :</b>
        <ul>
          <li v-for="(error, i) in errors" :key="i">
            {{ error}}
          </li>
        </ul>
      </p>

      <div class="formGroup">
        <input type="text" placeholder="name" v-model="user.nom">
      </div>

      <div class="formGroup">
        <input type="text" placeholder="prenom" v-model="user.prenom">
      </div>

      <div class="formGroup">
        <input type="text" placeholder="pseudo" v-model="user.pseudo">
      </div>

      <div class="formGroup">
        <input type="email" placeholder="email" v-model="user.email">
      </div>

      <div class="formGroup">
        <input type="password" placeholder="mot de passe" v-model="user.password">
      </div>

      <div class="formGroup">
        <input type="password" placeholder="verification" v-model="confirme">
      </div>

      <div class="formGroup">
        <button type="submit">creer</button>
      </div>

    </form>
    
  </div>
</template>

<script>

  import { userService } from '@/_services'

export default {
  name: 'UserAdd',
  data(){
    return {
      user: {
        nom: '',
        prenom: '',
        pseudo: '',
        email: '',
        password: '',
      },
      confirme: '',
      errors: []
    }
  },
  methods: {
    ajout(){

      console.log(this.user, this.confirme)

      this.errors = []

      if (this.user.password != this.confirme ) {
        this.errors.push('Password incorrect')
      }

      if (this.user.password.length < 3) {
        this.errors.push('Password too short')
      }

      if (this.user.password.length == 0) {

        userService.createUser(this.user)
          .then(res => {
            console.log(res)
            this.$router.push({name: 'uList'})
          })
          .catch(err => console.log(err))
      
      }

    }
  }
}
</script>

<style>
  .centrer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .formGroup{
    margin: 10px;
  }

  

</style>