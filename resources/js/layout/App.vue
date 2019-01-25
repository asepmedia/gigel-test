<template>
  <div>
    <loading :active.sync="$store.state.loading" 
        :can-cancel="false" 
        loader="bars"
        :is-full-page="true"></loading>
    <div class="container" v-if="this.$store.state.isLogin">
      <div class="row mt-3">
        <div class="col-md-3">
          <sidebar-menu/>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>  
    <div v-else>
      <router-view></router-view>
    </div>  
  </div>
</template>
<script>
import Sidebar from './../components/Sidebar'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  components: {
    Loading,
    'sidebar-menu':Sidebar
  }
}
</script>