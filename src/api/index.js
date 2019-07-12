import axios from './axios'

const api = {
  // 登录接口，验证码可选
  doLogin: params => axios.post('/api/manage/auth/doLogin', params),
  // 登出
  doLoginOut: params => axios.post('/api/manage/auth/doLoginOut', params),
  // 返回用户菜单,需要先登录
  findMenus: params => axios.post('/api/manage/auth/findMenus', params),
  // 是否拥有权限
  isPermitted: params => axios.post('/api/manage/auth/isPermitted', params),

  /* ---------- 用户模块 ---------- */
  // 查找用户
  getUserList: params => axios.post('/api/manage/user/list', params),
  // 根据ID获取用户
  getUser: params => axios.post('/api/manage/user/get', params),
  // 新增用户
  addUser: params => axios.post('/api/manage/user/add', params),
  // 删除用户
  delUser: params => axios.post('/api/manage/user/del', params),
  // 修改用户
  updateUser: params => axios.post('/api/manage/user/updateUser', params),
  // 修改密码
  modifyUserPwd: params => axios.post('/api/manage/user/modifyPwd', params),

  /* ---------- 资源模块 ---------- */
  // 新增资源
  addResource: params => axios.post('/api/manage/auth/addResource', params),
  // 删除资源
  delResource: params => axios.post('/api/manage/auth/delResource', params),
  // 获取用户所有权限
  getResourceByUserId: params => axios.post('/api/manage/auth/findResourceByUserId', params),
  // 资源列表
  getRoleResource: params => axios.post('/api/manage/auth/getRoleResource', params),
  // 编辑资源
  updateResource: params => axios.post('/api/manage/auth/updateResource', params)
}

export {api}
