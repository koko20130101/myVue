<template>
  <div class="header">
    <el-button type="text" icon="el-icon-s-fold" @click="collapsedSideBar"></el-button>
    您好，a491810145, 欢迎登录花生小店运营系统
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    collapsedSideBar: function () {
      this.$emit('change-collapse')
    }
  }
}
</script>

<style lang="scss">

</style>
