export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
          {
            name:'register',
            path:'/user/register',
            component:'./user/Register'
          }
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理员模块',
    icon: 'crown',
    access: 'canAdmin',
    component: './admin/Admin',
    routes: [
      {
        path:'/admin/posters',
        name:'电影海报管理',
        icon:'crown',
        // component:'./admin/posters/PostersList.jsx',
        routes:[
          {
            path: '/admin/posters/add',
            name: '新建电影海报',
            icon: 'smile',
            component: './admin/posters/AddPosters.jsx',
          },
          {
            path: '/admin/posters/management',
            name: '分类列表',
            icon: 'smile',
            component: './admin/posters/PostersList.jsx',
          },
        ]
      },
      {
        path:'/admin/account',
        name:'管理员账号管理',
        icon:'crown',
        routes:[
          {
            path:'/admin/account/add',
            name:'添加管理员',
            component:'./admin/account/AddAdmin'
          },
          {
            path:'/admin/account/list',
            name:'管理员List',
            component:'./admin/account/AdminList'
          }
        ]
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name:'测试',
    path:'/test',
    component:'./test',
    routes:[
      {
        name:'测试下的二级目录1',
        path:'/test/sub-page1',
        component:'./test'
      },
      {
        name:'测试下的二级目录2',
        path:'/test/sub-page2',
        component:'./test'
      },
    ]
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
