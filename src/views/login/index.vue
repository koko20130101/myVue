<template>
  <div class="login-container">
    <div class="login-main">
      <div class="box">
        <el-form ref="form" label-position="left" :rules="rules" :model="loginInfo" label-width="80px">
          <el-form-item label="用户名：" prop="username">
            <el-input placeholder="请输入用户名" v-model="loginInfo.username" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pwd">
            <el-input placeholder="请输入密码" v-model="loginInfo.pwd" show-password clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">登 录</el-button>
            <el-button @click="resetForm('form')">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import MD5 from 'crypto-js/md5'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      loginInfo: {
        username: '',
        pwd: '',
        code: ''
      },
      rules: { // 表单验证规则
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '验证码不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    ...mapState({}),
    ...mapGetters({})
  },
  methods: {
    ...mapActions({
      login: 'app/login'
    }),
    submitForm (formName) {
      // 表单验证
      this.$refs[formName].validate(/* 异步 */ async valid => {
        if (valid) {
          // 等待登录成功
          await this.login({
            username: this.loginInfo.username,
            pwd: MD5(this.loginInfo.pwd).toString()
          })
          // 等待获取左侧导航和用户资源访问权限
          await Promise.all([this.$store.dispatch('app/fetchMenus'), this.$store.dispatch('permission/fetchResourceByUserId')]).then(res => {
            let menusRes = res[0]
            let { data: { data: { index: { routerName } } } } = menusRes
            if (routerName) {
              this.$router.push({
                name: routerName
              })
            } else {
              //
            }
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss">
  @import '../../styles/login.scss';
</style>
