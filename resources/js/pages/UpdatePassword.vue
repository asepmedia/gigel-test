<template>
  <div>
    <form class="box-shadow bg-white p-4" @submit.prevent="doUpdate()">
      <h3 class="text-center mb-4">Change Password</h3>
      <div class="form-group">
        <input type="password" class="form-control" v-model="form.payload.old_password" placeholder="Old Password..">
        <span class="text-danger" v-if="error.old_password">{{error.old_password[0]}}</span>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="form.payload.password" placeholder="Password..">
        <span class="text-danger" v-if="error.password">{{error.password[0]}}</span>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="form.payload.c_password" placeholder="Confirm Password..">
        <span class="text-danger" v-if="error.c_password">{{error.c_password[0]}}</span>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block">Update</button>
      </div>
    </form>   
  </div>
</template>
<script>
import AuthService from './../service/AuthService'
import {setLogin} from './../utils/Auth'
export default {
  async created() {
    this.getProfile()
  },
  data () {
    return {
      error: {},
      form: {
        payload: {}
      }
    }
  },
  methods: {
    async doUpdate () {
      await AuthService.password(this.form).then(res => {
        const {status} = res
        console.log(res)
        if(!status) {
          this.error = res.error
          return false;
        }
        this.error = {}
      })      
    },
    async getProfile () {
      await AuthService.profile().then(res => {
        if(res.status) {
          this.form.payload = res.data
        }
    })      
    }
  }
}
</script>