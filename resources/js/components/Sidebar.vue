<template>
  <div>
    <div class="list-group">
      <router-link :to="{name: 'Dashboard'}" class="list-group-item list-group-item-action" v-bind:class="{'active' : $route.name == 'Dashboard'}">Dashboard</router-link>
      <router-link :to="{name: 'UpdateProfile'}" class="list-group-item list-group-item-action" v-bind:class="{'active' : $route.name == 'UpdateProfile'}">Update Profile</router-link>
      <router-link :to="{name: 'UpdatePassword'}" class="list-group-item list-group-item-action" v-bind:class="{'active' : $route.name == 'UpdatePassword'}">Change Password</router-link>
      <button v-on:click="logout()" class="list-group-item list-group-item-action">Logout</button>
    </div>
  </div>
</template>
<script>
import {revokeToken} from './../utils/Auth'
export default {
  methods: {
    logout () {
      revokeToken()
      window.location.href = '/login'
    }
  }
}
</script>