<template>
  <div>
    <form class="box-shadow bg-white p-4" @submit.prevent="doUpdate()">
      <h3 class="text-center mb-4">Update Profile</h3>
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.payload.name" placeholder="Name..">
        <span class="text-danger" v-if="error.name">{{error.name[0]}}</span>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.payload.email" placeholder="Email..">
        <span class="text-danger" v-if="error.email">{{error.email[0]}}</span>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.payload.phone_number" placeholder="Phone..">
        <span class="text-danger" v-if="error.phone_number">{{error.phone_number[0]}}</span>
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
      await AuthService.update(this.form).then(res => {
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