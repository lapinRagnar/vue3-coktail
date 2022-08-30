<template>
  <div class="formulaire">
    <h1>connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <input type="text" placeholder="nom utilisateur" v-model="user.login" />
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
      tu as tapé
      <p>
        {{ user }}
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
        login: "",
        password: "",
      },
    };
  },
  mounted() {
    console.log('je suis dans login')
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8989/auth/login',
    //   data: {
    //     email: 'lapinragnar@gmail.com',
    //     password: 'lapinragnar'
    //   }
    // })
    //   .then( res => console.log(res))
    //   .catch( err => console.log(err))

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

<style lang="scss">
.formulaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    .formGroup {
      padding-bottom: 20px;
    }
  }
}
</style>
