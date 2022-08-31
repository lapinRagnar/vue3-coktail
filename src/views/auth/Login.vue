<template>
  <div class="formulaire">
    <h1 class="titre">connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <input type="text" placeholder="nom utilisateur" v-model="user.email" />
      </div>
      <div class="formGroup">
        <input
          type="password"
          placeholder="mot de passe"
          v-model="user.password"
        />
      </div>
      <div class="formGroup">
        <button type="submit" class="button">connexion</button>
      </div>
    </form>

    <div>
      <p>
        tu as tapé - {{ user }}
      </p>
    </div>
  </div>
</template>

<script>

import { accountService } from '@/_services'
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    console.log('je suis dans login')
  },
  methods: {

    login() {

      accountService.login(this.user)
        .then(res => {
          console.log(res)
          console.log(res.data)
          accountService.saveToken(res.data.access_token)
          this.$router.push('/admin/dashboard')
        }) 
        .catch(err => console.log(err))

    },

  },
};
</script>

<style lang="scss" scoped>
  
  .formulaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .titre{
      font-size: 50px;
      margin-top: 150px;
      margin-bottom: 50px;
    }
  }

</style>
