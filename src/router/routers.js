
export default [ // 配置路由，这里是个数组
  { // 每一个链接都是一个对象
    path: '/', // 链接路径
    name: 'Home', // 路由名称
    redirect: to => { // 重定向
      return {
        name: 'ReferrerList'
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
        path: 'system/user',
        name: 'User',
        meta: {
          requireAuth: true,
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "user" */'@/views/user/')
      },
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
        path: 'channel/number_history/list',
        name: 'ChannelChangeNumberHistoryList',
        meta: {
          requireAuth: true,
          keepAlive: true
        },
        component: () => import(/* webpackChunkName: "channelChangeNumberHistoryList" */'@/views/test/')
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
