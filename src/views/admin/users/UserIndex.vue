<template>
  <div>
    <h1>Liste des utilisateurs</h1>
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
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.nom}}</td>
          <td>{{user.prenom}}</td>
          <td>{{user.email}}</td>
          <td>{{user.createdAt.split('T')[0].split('-').reverse().join('/')}}</td>
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
  }
}
</script>

<style>

</style>