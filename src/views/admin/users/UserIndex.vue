<template>
  <div>
    user index
    
  </div>
</template>

<script>

  import { userService } from '@/_services'
export default {
  name: 'UserIndex',
  mounted(){
    userService.getAllUsers()
     .then(res => console.log(res.data.data))
     .then(err => console.log(err))
  }
}
</script>

<style>

</style>