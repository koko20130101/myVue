<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    ...mapGetters('footerStatus', {
      isShow: 'isShow'
    })
  },
  created () {
    // 进入入口时判断是否登录
    if (this.$store.getters['app/isLogin']) {
      this.$store.dispatch('app/fetchMenus')
      this.$store.dispatch('permission/fetchResourceByUserId')
    }
  }
}
</script>

<style lang="scss">
  @import "./styles/public.scss";

  #app {
    width: 100%;
    height: 100%;
  }
</style>
