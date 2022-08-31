<template>
  <div class="content">
    <h1 class="titre">Liste des utilisateurs </h1>
    <p>total - ({{comptage}})</p>
    <table class="tableau">
      <thead class="entete">
        <tr>
          <th></th>
          <th>id</th>
          <th>nom</th>
          <th>prenom</th>
          <th>email</th>
          <th>date de création</th>
        </tr>
      </thead>
      <tbody class="corp">
        <tr v-for="(user, index) in users" :key="user.id">
          <td><span class="del_btn" @click="del(index)">x</span></td>
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
    },
    del(index){
      console.log(index)

      userService.delUser(this.users[index].id)
        .then(res => {
          console.log(res)
          this.users.splice(index, 1)
        })
        .catch(err => console.log(err))

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

<style scoped lang="scss">

  .content{

    font-family: Georgia, 'Times New Roman', Times, serif;

    .titre {
      font-size: 30px;
      border-bottom: 1px solid red;
      width: 300px;
      margin-bottom: 30px;
    }

    .tableau{

      margin-top: 50px;

      width: 100%;
      .del_btn{
        color: darkred;
        cursor: pointer;
      }

      .entete {
        font-size: 20px;
        text-align: left;
        border-bottom: 1px dashed darkmagenta;
        height: 40px;
        
        tr{
          
        }
      }

      .corp {
        margin: 20px;
        color: rgb(48, 29, 110);
        font-size: 18px;
        height: 100%;
        width: 100%;
        
        tr{
          padding-top: 30px;

          td{
            padding-top: 15px;
          }
        }
      }
    }

    .edit {
      cursor: pointer;
    }
    .edit:hover{
      font-weight: bold;
      color: brown;
    }


  }


</style>