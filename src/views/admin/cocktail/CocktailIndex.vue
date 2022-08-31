<template>

  <div class="content">
    <h1 class="titre">Liste des cocktails </h1>
    <p>total - ({{comptage}})</p>
    <table class="tableau">
      <thead class="entete">
        <tr>
          <th></th>
          <th>id</th>
          <th>nom</th>
          <th>description</th>
          <th>recette</th>
          <th>date de création</th>
        </tr>
      </thead>
      <tbody class="corp">
        <tr v-for="(cocktail, index) in cocktails" :key="cocktail.id">
          <td><span class="del_btn" @click="del(index)">x</span></td>
          <td>{{cocktail.id}}</td>
          <td class="edit" @click="goEdit(cocktail.id)">{{cocktail.nom}}</td>
          <td>{{cocktail.description}}</td>
          <td>{{cocktail.recette}}</td>
          <td>{{dateFormat[index]}}</td>
        </tr>
      </tbody>
    </table>
    
  </div>

</template>

<script>

import { cocktailService } from '@/_services'

export default {
  name: 'CocktailIndex',
  data(){
    return {
      cocktails: []
    }
  },
  mounted(){
    cocktailService.getAllCocktails()
     .then(res => {
      console.log(res.data.data)
      this.cocktails = res.data.data
     })
     .then(err => console.log(err))
  },
  methods: {
    goEdit(cid){
      console.log(cid)
      this.$router.push({name: 'cEdit', params: {id: cid}})
    },

    del(index){
      console.log(index)

      cocktailService.delCocktail(this.cocktails[index].id)
        .then(res => {
          console.log(res)
          this.cocktails.splice(index, 1)
        })
        .catch(err => console.log(err))

    }

  },

  computed: {
    comptage(){
      return (this.cocktails.length == 0) ? 'aucun cocktail' : `il y en a ${this.cocktails.length} `
    },
    dateFormat(){
      return this.cocktails.map(c => c.createdAt.split('T')[0].split('-').reverse().join('/'))
    }
  }


}
</script>

<style lang="scss" scoped>

  
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