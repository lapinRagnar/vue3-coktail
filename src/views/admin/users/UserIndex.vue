<template>
  <div>
    <h1>Liste des utilisateurs </h1>
    <p>total - ({{comptage}})</p>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nom</th>
          <th>prenom</th>
          <th>email</th>
          <th>date de création</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{user.id}}</td>
          <td class="edit" @click="goEdit(user.id)">{{user.nom}}</td>
          <td>{{user.prenom}}</td>
          <td>{{user.email}}</td>
          <td>{{dateFormat[index]}}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>

  import { userService } from '@/_services'
export default {
  name: 'UserIndex',
  data() {
    return {
      users: []
    }
  },
  mounted(){
    userService.getAllUsers()
     .then(res => {
      console.log(res.data.data)
      this.users = res.data.data
     })
     .then(err => console.log(err))
  },
  methods: {
    goEdit(uid){
      console.log(uid)
      // this.$router.push('/admin/user/edit/' + id)
      this.$router.push({name: 'uEdit', params: {id: uid}})
    }
  },
  computed: {
    comptage(){
      return (this.users.length == 0) ? 'aucun utilisateur' : `il y en a ${this.users.length} `
    },
    dateFormat(){
      return this.users.map(u => u.createdAt.split('T')[0].split('-').reverse().join('/'))
    }
  }
}
</script>

<style>
  .edit {
    cursor: pointer;
  }
  .edit:hover{
    font-weight: bold;
    color: brown;
  }
</style>