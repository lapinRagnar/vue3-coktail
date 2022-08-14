<template>
  <div class="admin">
    
    <AdminHeader />
    
    <div class="contain" >
        <div class="left">
          <AdminNav />
        </div>

        <div class="right">
          <router-view />
        </div>
    </div>

    
  </div>
</template>

<script>

import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue';

export default {
  name: 'AdminLayout',
  components: { AdminHeader, AdminNav },
}
</script>

<style lang="scss">
  .admin {
    background-color: rgb(204, 204, 159);
    .contain {
      display: flex;
      flex-direction: row;

      .left {
        width: 100%;
        height: 100%;
        background-color: greenyellow;
      } 

      .right {
        width: 100%;
        height: 100%;
        background-color: rgb(92, 92, 229);
      }
    }
  }
</style>