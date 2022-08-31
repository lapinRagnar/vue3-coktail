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
    // background-color: rgb(204, 204, 159);
    border-radius: 5px;

    .contain {
      display: flex;
      flex-direction: row;

      .left {
        width: 25%;
        height: 100%;
        min-width: 250px;
        max-width: 200px;
        border-right: 30px solid salmon;
        transition: border-right 2s .5s;

        &:hover{
          border-right: 30px solid rgb(61, 130, 65);
        }

      } 

      .right {
        width: 80%;
        height: 100%;
        background-color: rgba(86, 86, 103, 0.797);
        margin-left: 20px;
      }
    }
  }
</style>