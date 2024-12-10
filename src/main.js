import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mitt from 'mitt'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css';

const app = createApp(App).use(store).use(router)
app.use(ElementPlus)
const eventBus = mitt(); // 创建 mitt 实例
console.log('main.js print eventBus', eventBus)
app.config.globalProperties.$eventBus = eventBus; // 提供为全局属性
console.log('main.js print app.config.globalProperties', app.config.globalProperties)

// 注册 ElementPlusIconsVue 组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
