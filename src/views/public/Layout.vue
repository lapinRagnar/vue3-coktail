<template>
  <div>
    <PublicNav />
    layout public marche
    <router-view />
  </div>
</template>

<script>

import PublicNav from '@/components/PublicNav.vue';

export default {
    name: "PublicLayout",
    component: {
        PublicNav
    },
    components: { PublicNav }
}
</script>

<style>

</style>