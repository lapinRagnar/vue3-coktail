<template>
  <div class="conteneur">
    <PublicNav />
    <div class="la-page">
      <div class="haut">
        Bienvenu à tous!
        <p>{{getMavariable}}</p>
        <p>mon nom est : {{getUsers}}</p>
        <p>user avec parametre : {{getUserAvecParametre(1)}}</p>
        <button @click="change">changer ragnar</button>
        <button @click="monAction">mon action</button>
      </div>
      <div class="bas">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import PublicNav from '@/components/PublicNav.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: "PublicLayout",
    components: { PublicNav },
    computed: {
      ...mapGetters(['getMavariable', 'getUsers', 'getUserAvecParametre']),
      
    },
    methods: {
      ...mapMutations(['changerUserRagnar']),
      ...mapActions(['modify']),
      change(){
        // this.$store.commit('changerUserRagnar', {name: 'kary'})
        this.changerUserRagnar({name: 'kary'})
      },
      monAction(){
        // this.$store.dispatch('modify')
        this.modify({name: 'on envoie un data du layout'})
      } 
    }

}
</script>

<style lang="scss">

  .conteneur {
    margin: 50px 10rem;

    .la-page{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .haut{
        min-height: 100px;
        width: 100%;
      }

      .bas{
        min-height: 100px;
        width: 100%;
      }
    }
  }

</style>