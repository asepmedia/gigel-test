<template>
  <div>
  <div class="container h-100 mt-5">
    <div class="row h-100 justify-content-center align-items-center">
      <form class="col-5 box-shadow bg-white p-4" @submit.prevent="doRegister()">
        <h3 class="text-center mb-2">Register</h3>
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
          <input type="password" class="form-control" v-model="form.payload.password" placeholder="Password..">
          <span class="text-danger" v-if="error.password">{{error.password[0]}}</span>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="form.payload.c_password" placeholder="Confirm Password..">
          <span class="text-danger" v-if="error.c_password">{{error.c_password[0]}}</span>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Register</button>
        </div>
        <p>
          <span>Anda sudah memiliki akun?</span> <router-link :to="{name: 'Login'}">Login</router-link>
        </p>
      </form>   
    </div>
  </div>
  </div>
</template>
<script>
import AuthService from './../service/AuthService'
import {setLogin} from './../utils/Auth'
export default {
  data () {
    return {
      error: {},
      form: {
        payload: {
          name: '',
          email: '',
          password: '',
          c_password: '',
          phone_number: ''
        }
      }
    }
  },
  methods: {
    async doRegister () {
      await AuthService.register(this.form).then(res => {
        const {status} = res
        console.log(res)
        if(!status) {
          this.error = res.error
          return false;
        }
        setLogin(res.token)
        window.location.href = '/'
      })      
    }
  }
}
</script>