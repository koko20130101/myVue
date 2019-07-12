<template>
  <el-container class="container">
    <el-aside width="200px" class="side-bar">
      <my-side-bar :collapse="collapse"></my-side-bar>
    </el-aside>
    <el-container>
      <el-header height="40px" class="main-nav-top">
        <my-header @change-collapse="changeCollapse"></my-header>
      </el-header>
      <el-main class="main-content">
        <my-breadcrumb></my-breadcrumb>
        <div class="content">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myHeader from '@/components/header/'
import mySideBar from '@/components/side-bar/'
import myBreadcrumb from '@/components/breadcrumb/'

export default {
  name: 'Home',
  components: {
    myHeader,
    mySideBar,
    myBreadcrumb
  },
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    changeCollapse () {
      this.collapse = !this.collapse
    }
  },
  created () {

  }
}
</script>

<style scoped>
  .container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .main-content {
    padding:15px;
  }

  .content {
    padding: 10px;
    background: #fff;
    border:1px solid #e9e8e8;
  }

  .side-bar {
    background: #fff;
  }

  .side-bar::-webkit-scrollbar {
    display: none;
  }
</style>
