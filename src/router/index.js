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
            component: () => import(/* webpackChunkName: "BasicRoute" */ '@/views/GlobalRoutes/BasicRoute'),
          },
        ],
        redirect: '/global-routes/basic-route',
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
            component: () => import(/* webpackChunkName: "State" */ '@/views/StateManagement/State'),
          },
        ],
        redirect: '/state-management/state',
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
            component: () => import(/* webpackChunkName: "Life" */ '@/views/Lifecycle/Life'),
          },
        ],
        redirect: '/lifecycle/state',
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
        ],
        redirect: '/event-bus/basic-event',
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
          {
            path: 'tabs-controls',
            name: 'TabsControls',
            meta: {
              title: "Tabs控件动态组件",
            },
            component: () => import(/* webpackChunkName: "TabsControls" */ '@/views/ElementPlusControls/TabsControls'),
          },
          {
            path: 'time-line-controls',
            name: 'TimeLineControls',
            meta: {
              title: "TimeLine时间轴控件",
            },
            component: () => import(/* webpackChunkName: "TimeLineControls" */ '@/views/ElementPlusControls/TimeLineControls'),
          },
        ],
        redirect: '/element-plus-controls/table-list',
      },
      {
        path: '/component-management',
        name: 'ComponentManagement',
        meta: {
          title: "组件封装",
        },
        component: () => import(/* webpackChunkName: "ComponentManagement" */ '@/views/ComponentManagementView'),
        children: [
          {
            path: '/component-management/slot',
            name: 'Slot',
            meta: {
              title: "插槽",
            },
            component: () => import(/* webpackChunkName: "ComponentManagement" */ '@/views/ComponentManagement/Slot'),
          },
        ],
        redirect: '/component-management/slot',
      },
      {
        path: '/animate-management',
        name: 'AnimateManagement',
        meta: {
          title: "vue3动画",
        },
        component: () => import(/* webpackChunkName: "AnimateManagement" */ '@/views/AnimateManagementView'),
        children: [
          {
            path: '/animate-management/animate',
            name: 'animate',
            meta: {
              title: "关键帧和过渡",
            },
            component: () => import(/* webpackChunkName: "animate" */ '@/views/AnimateManagement/Animate'),
          },
          {
            path: '/animate-management/transition',
            name: 'transition',
            meta: {
              title: "transition标签类",
            },
            component: () => import(/* webpackChunkName: "transition" */ '@/views/AnimateManagement/Transition'),
          },
        ],
        redirect: '/animate-management/animate',
      },
      {
        path: '/advanced-management',
        name: 'AdvancedManagement',
        meta: {
          title: "vue3高级进阶",
        },
        component: () => import(/* webpackChunkName: "AdvancedManagement" */ '@/views/AdvancedManagementView'),
        children: [
          {
            path: '/advanced-management/dynamicbinding',
            name: 'dynamicbinding',
            meta: {
              title: "动态绑定属性名和方法",
            },
            component: () => import(/* webpackChunkName: "dynamic" */ '@/views/AdvancedManagement/dynamicbinding'),
          },
          {
            path: '/advanced-management/context',
            name: 'context',
            meta: {
              title: "context参数attrs、slots、emit参数研究",
            },
            component: () => import(/* webpackChunkName: "context" */ '@/views/AdvancedManagement/context'),
          },
        ],
        redirect: '/advanced-management/dynamicbinding',
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
