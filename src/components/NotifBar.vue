<template>
  <div class="notification" v-if="getNotif">
    <p id="notification_text">{{ getNotifMessage }}</p>
    <span id="notification_close" @click="close">x</span>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'NotifBar',
  computed: {
    ...mapGetters(['getNotif', 'getNotifMessage'])
  },
  methods: {
    ...mapMutations(['displayNotif']),
    close(){
      this.displayNotif(false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification{
    width: 230px;
    height: 60px;
    background-color: red;
    position: absolute;
    top: 150px;
    right: 15px;
    color: #ffffff;
    
    #notification_text{
      text-align: left;
      background-color: red;
      padding-left: 10px;
      position: relative;
      top: 20px;
      
    }
    
    #notification_close{
      position: absolute;
      top: 25px;
      right: 25px;
      font-size: 8px;
      height: 10px;
      width: 10px;
      border: solid 2px white;
      border-radius: 10px;
      line-height: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>