<template>
  <div>log out</div>
</template>

<script>

  import { accountService } from '@/_services/account.service'
  import router from '@/router'

export default {
  name: 'LogoutComponent',
  methods: {
    logout() {
      accountService.logout()
      router.push('/login')
    }
  }

}
</script>

<style>

</style>