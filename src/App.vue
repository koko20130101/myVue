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
