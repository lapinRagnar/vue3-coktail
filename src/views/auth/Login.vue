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
  methods: {
    login() {
      // console.log('la fonction login marche')
      // console.log(this.user)
      // fetch('http://localhost:8888/auth/login')
      //   .then(res => res.json())
      //   .then(data => console.log(data))
      //   .then(err => console.log(err))

      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
      })
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          localStorage.setItem('token', data.token)
          this.$router.push('/admin/dashboard')
        })
        .then(err => console.log(err))
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
