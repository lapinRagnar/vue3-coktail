<template>
  <div class="formulaire">
    <h1>connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <input type="text" placeholder="nom utilisateur" v-model="user.login">
      </div>
      <div class="formGroup">
        <input type="password" placeholder="mot de passe" v-model="user.password">
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
export default {
  name: 'Login',
  data(){
    return {
      user: {
        login: '',
        password: '',
      }
    }
  },
  methods: {
    login(){
      console.log('la fonction login marche')
      console.log(this.user)
    }
  }

}
</script>

<style lang="scss">
  .formulaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      .formGroup{
        padding-bottom: 20px;
      }
    }

  }
</style>