
export default [ // 配置路由，这里是个数组
  { // 每一个链接都是一个对象
    path: '/', // 链接路径
    name: 'Home', // 路由名称
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home'), // 对应的组件模板
    // 子路由
    children: [
      {
        path: 'system/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */'@/views/user')
      }
    ]
  }
]
