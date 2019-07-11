<template>
  <div class="header">
    <div class="welcome">
      <el-button type="text" icon="el-icon-s-fold" @click="collapsedSideBar"></el-button>
      您好，a491810145, 欢迎登录花生小店运营系统
    </div>
    <el-dropdown class="top-dropdown">
      <span class="el-dropdown-link">
        管理员<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
  .welcome {
    float: left
  }

  .top-dropdown {
    float: right
  }
</style>
