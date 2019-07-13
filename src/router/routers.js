
export default [ // 配置路由，这里是个数组
  { // 每一个链接都是一个对象
    path: '/', // 链接路径
    name: 'Home', // 路由名称
    redirect: to => { // 重定向
      return {
        name: 'User'
      }
    },
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home/'), // 对应的组件模板
    meta: {
      requireAuth: true,
      keepAlive: true
    },
    // 子路由
    children: [
      {
        path: 'referrer/list',
        name: 'ReferrerList',
        meta: {
          requireAuth: true,
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "referrerList" */'@/views/referrer/')
      },
      {
        path: 'account/user/list',
        name: 'User',
        meta: {
          requireAuth: true,
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "user" */'@/views/account/UserList')
      },
      {
        path: 'account/role/list',
        name: 'RoleList',
        meta: {
          requireAuth: true,
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "roleList" */'@/views/account/RoleList')
      },
      {
        path: 'account/resource/list',
        name: 'ResourceList',
        meta: {
          requireAuth: true,
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "resourceList" */'@/views/account/ResourceList')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      requireAuth: false,
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login')
  }
]
