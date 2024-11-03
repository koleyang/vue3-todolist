import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import LayoutView from "@/views/LayoutView";
import GlobalRoutes from "@/views/GlobalRoutesView";
import StateManagement from "@/views/StateManagementView";
import Lifecycle from "@/views/LifecycleView";
import ElementPlusControls from "@/views/ElementPlusControlsView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    children: [
      {
        path: '/global-routes',
        name: 'GlobalRoutes',
        meta: {
          title: "全局路由",
        },
        component: GlobalRoutes,
        children: [
          {
            path: '/global-routes/basic-route',
            name: 'BasicRoute',
            meta: {
              title: "基础路由",
            },
            component: () => import(/* webpackChunkName: "BasicEvent" */ '@/views/GlobalRoutes/BasicRoute'),
          },
        ]
      },
      {
        path: '/state-management',
        name: 'StateManagement',
        meta: {
          title: "全局状态管理",
        },
        component: StateManagement,
        children: [
          {
            path: '/state-management/state',
            name: 'State',
            meta: {
              title: "状态管理",
            },
            component: () => import(/* webpackChunkName: "BasicEvent" */ '@/views/StateManagement/State'),
          },
        ],
      },
      {
        path: '/lifecycle',
        name: 'Lifecycle',
        meta: {
          title: "生命周期",
        },
        component: Lifecycle,
        children: [
          {
            path: '/lifecycle/state',
            name: 'Life',
            meta: {
              title: "生命周期",
            },
            component: () => import(/* webpackChunkName: "BasicEvent" */ '@/views/Lifecycle/Life'),
          },
        ],
      },
      {
        path: '/event-bus',
        name: 'EventBus',
        meta: {
          title: "事件总线",
        },
        component: () => import(/* webpackChunkName: "customEventView" */ '@/views/CustomEventView'),
        // 设计EventBus组件包含：基础事件子路由菜单页面和动态组件子路由菜单页面
        children: [
          {
            path: 'basic-event',
            name: 'BasicEvent',
            meta: {
              title: "基础事件",
            },
            component: () => import(/* webpackChunkName: "BasicEvent" */ '@/views/EventBus/BasicEvent'),
          },
          {
            path: 'event-bus',
            name: 'EventBus',
            meta: {
              title: "事件总线",
            },
            component: () => import(/* webpackChunkName: "EventBus" */ '@/views/EventBus/EventBus'),
          },
          {
            path: 'dynamic-component',
            name: 'DynamicComponent',
            meta: {
              title: "动态组件",
            },
            component: () => import(/* webpackChunkName: "DynamicComponent" */ '@/views/EventBus/DynamicComponent'),
          },
        ]
      },
      {
        path: '/element-plus-controls',
        name: 'ElementPlusControls',
        meta: {
          title: "element-plus控件",
        },
        component: ElementPlusControls,
        children: [
          {
            path: '/element-plus-controls/table-list',
            name: 'TableList',
            meta: {
              title: "列表组件",
            },
            component: () => import(/* webpackChunkName: "TableList" */ '@/views/ElementPlusControls/TableList'),
          },
          {
            path: '/element-plus-controls/form-controls',
            name: 'FormControls',
            meta: {
              title: "表单控件",
            },
            component: () => import(/* webpackChunkName: "FormControls" */ '@/views/ElementPlusControls/FormControls'),
          },
        ]
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
