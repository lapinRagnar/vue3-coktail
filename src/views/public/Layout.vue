<template>
  <div class="conteneur">
    <PublicNav />
    <div class="la-page">
      <div class="haut">
        Bienvenu à tous!
        <p>{{getMavariable}}</p>
      </div>
      <div class="bas">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import PublicNav from '@/components/PublicNav.vue';

import { mapGetters } from 'vuex';

export default {
    name: "PublicLayout",
    components: { PublicNav },
    computed: {
      ...mapGetters(['getMavariable'])
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