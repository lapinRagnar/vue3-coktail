<template>
  <div class="content">
    <h1>editer - ajouter cocktail</h1>
    
    <p>l'id du cocktail : {{ id }}</p>

    <form @submit.prevent="ajout">    
      
      <!-- <p v-if="errors.length">
        <b>merci de corriger les erreurs :</b>
        <ul>
          <li v-for="(error, i) in errors" :key="i">
            {{ error}}
          </li>
        </ul>
      </p> -->


      <div class="formGroup">
        <input type="text" placeholder="nom" v-model="cocktail.nom">
      </div>

      <div class="formGroup">
        <input type="text" placeholder="description" v-model="cocktail.description">
      </div>

      <div class="formGroup">
        <input type="text" placeholder="recette" v-model="cocktail.recette">
      </div>
    

      <div class="formGroup">
        <button type="submit">creer</button>
      </div>

    </form>


  </div>
</template>

<script>

  import { cocktailService } from '@/_services'
  import { watch } from 'vue'

export default {
  name: 'CocktailEdit',
  props: ['id'],
  data(){
    return {
      cocktail: {
        user_id: 2,
        nom: '',
        description: '',
        recette: ''
      }
    }
  },
  setup(props){
    console.log('dans setup', props)

    watch(props, (value, old) => {
      console.log('dans le watch', value, old)
    })
  },
  mounted(){
    console.log("dans le mounted",this.id)
    if(this.id){
      console.log('----edition-----')
    } else {
      console.log('----ajout-----')
    }
  }
  ,
  methods: {
    ajout(){
      console.log(this.cocktail)
      cocktailService.createCocktail(this.cocktail)
        .then(res => {
          console.log(res)
          this.$router.push({name: 'cList'})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>