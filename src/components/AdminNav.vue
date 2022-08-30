<template>
  <div>Admin nav marche
    <ul>
        <li>
          <router-link to="/admin/users/index">liste des users</router-link>
        </li>
        <li>
          <router-link to="/admin/user/add">Ajouter users</router-link>
        </li>
        <li>
          <router-link to="/admin/user/edit/125">editer user 125</router-link>
        </li>
        <li>
          <router-link to="/login">login</router-link>
        </li>
        <li>
          <router-link to="/logout">logout</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminNav'

}
</script>

<style>

</style>