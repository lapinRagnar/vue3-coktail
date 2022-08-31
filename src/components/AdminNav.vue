<template>
  <div class="groupe">
    <h3 class="titre">Admin dashbord</h3>
    <ul>
        <li>utilisateur</li>
        <li>
          <router-link to="/admin/users/index">liste des users</router-link>
        </li>
        <li>
          <router-link to="/admin/user/add">Ajouter users</router-link>
        </li>

        <li>
          <router-link to="/login">login</router-link>
        </li>
        <li>
          <router-link to="/logout">logout</router-link>
        </li>

        <li>cocktail</li>
        <li>
          <router-link to="/admin/cocktails/index">list cocktail</router-link>
        </li>
        <li>
          <router-link to="/admin/cocktail/edit">ajouter cocktail</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminNav'

}
</script>

<style lang="scss" scoped>
  .groupe {

    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    .titre{
      font-size: 20px;
      text-transform: uppercase;
      border-bottom: 12px solid slategray;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    ul {
      padding: 20px 20px;
      li {
        padding: 20px;
        a{
          color: white;
          font-size: 20px;

          &:hover {
            background-color: darkolivegreen;
          }
        }
      }
    }
  }


</style>