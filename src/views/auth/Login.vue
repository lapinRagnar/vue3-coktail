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


  button {
    text-decoration: none;
    border: 3px solid yellow;
    color: transparent;
    padding: 15px 80px;
    font-size: 28px;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 0.5s;
    position: relative;
    cursor: pointer;
  }

  button:before {
    content: "valider";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 28px;
    top: 0;
    left: 100%;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(0) rotatey(0);
    opacity: 0;
  }

  button:hover:before {
    transform: scale(1) rotatey(360deg);
    left: 0;
    opacity: 1;
  }

  button:after {
    content: "ok";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 28px;
    top: 0;
    left: 0;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(1) rotatey(0);
    opacity: 1;
  }
  button:hover:after {
    transform: scale(0) rotatey(360deg);
    left: -100%;
    opacity: 0;
  }

</style>
