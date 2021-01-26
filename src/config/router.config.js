// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: 'menu.dashboard', keepAlive: true, icon: "home", permission: ['dashboard'] },
      },
     
      //checkData
      {
        path: '/checkData/list',
        component: RouteView,
        redirect: '/checkData/list',
        name: 'checkData',
        meta: { title: 'menu.account.checkData', icon: 'file-search', keepAlive: true, permission: ['user'] },
        hideChildrenInMenu: true,
        children:[
          {
            path:"/checkData/list",
            name:"checkDataList",
            component:()=>import('@/views/checkData/checkDataList'),
            },
            // {
            // path:"/checkData/detail",
            // name:"checkDataDetail",
            // component:()=>import('@/views/checkData/checkDataDetail')
            // },

        ]
      },
 
      //reportprocessing
      {
        path: '/report',
        component: RouteView,
        name: 'reportProcessing',
        redirect: '/report/list',
        meta: { title: 'export.common-report.title', icon: 'audit', hidden: true, permission: ['user'] },
        hideChildrenInMenu: true,
        children:[
          {
          path: '/report/list',
          name: 'reportList',
          component: () => import('@/views/reportProcessing/reportList'),
          meta: { title: 'export.common-report-list.title', hidden: true, permission: ['user'] },
          },
          {
            path:'/report/basicEdit',
            name:'reportBaiscedit',
            component:()=>import('@/views/reportProcessing/reportBasicEdit'),
            meta: { title: 'export.common-report-basic-edit.title',  hidden: true, permission: ['user'] },
          },
          {
            path:'/report/edit',
            name:'reportEdit',
            component:()=>import('@/views/reportProcessing/reportEdit'),
            meta: { title: 'export.common-report-edit.title',  hidden: true, permission: ['user'] },
          },
        ]
      
      },
      
       // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: 'menu.account.settings', hideHeader: true, permission: ['user'] },
            redirect: '/account/settings/basic',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/basic',
                name: 'BasicSettings',
                component: () => import('@/views/account/settings/BasicSetting'),
                meta: { title: 'account.settings.menuMap.basic', hidden: true, permission: ['user'] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: {
                  title: 'account.settings.menuMap.security',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: 'account.settings.menuMap.binding', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: {
                  title: 'account.settings.menuMap.notification',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },

  {
    path:'/reload',
    component: () => import(/* webpackChunkName: "fail" */ '@/components/Reload/Reload')
  }
]
