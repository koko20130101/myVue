<template>
  <div>
    <el-form :inline="true" ref="form" :model="form" label-width="85px" class="demo-form-inline">
      <el-form-item size="small" label="账号：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item size="small" label="用户名：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="创建日期：">
        <el-date-picker type="date" placeholder="选择创建日期" v-model="form.date1"></el-date-picker>
      </el-form-item>
      <el-form-item label="修改日期：">
        <el-date-picker type="date" placeholder="选择修改日期" v-model="form.date1"></el-date-picker>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column prop="name" label="角色名"></el-table-column>
      <el-table-column prop="describe" label="描述"></el-table-column>
      <el-table-column prop="date" label="添加时间"></el-table-column>
      <el-table-column width="220" label="操作">
        <template slot-scope="scope">
          <el-button size="mini">权限</el-button>
          <el-button
            size="mini"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RoleList',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        name: '王二',
        describe: '描述',
        date: '2019-07-09 00:51:55'
      }, {
        name: '王二',
        describe: '描述',
        date: '2019-07-09 00:51:55'
      }, {
        name: '王二',
        describe: '描述',
        date: '2019-07-09 00:51:55'
      }, {
        name: '王二',
        describe: '描述',
        date: '2019-07-09 00:51:55'
      }]
    }
  }
}
</script>

<style scoped>
.demo-form-inline{

}
</style>
