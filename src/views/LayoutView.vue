<template>
  <div>
    <el-container>
        <el-header>
            <header-view :menus="menus" @routerChildrenEvent="routerChildrenEvent"></header-view>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <left-sider-bar :leftItems="leftItems"></left-sider-bar>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
// 导入头部组件
import HeaderView from '@/views/HeaderView';
// 导入左侧边栏组件
import LeftSiderBar from '@/views/LeftSiderBarView';

const router = useRouter();
const route = useRoute();
let store = useStore();
// 得到当前实例
const instance = getCurrentInstance();

// 声明menuItems根据全局路由对象router的options.routes属性来生成, 通过ref()函数创建响应式对象，注意去掉name:'home'的根路由元素
const menus = ref(router.options.routes[0].children.filter(item => item.name !== 'home').map(item => item));
let leftItems = ref([]);
const routerChildrenEvent = (children) => {
    console.log('layout children', children);
    const rawRouters = toRaw(children);
    console.log('[] => rawRouters', rawRouters)
    leftItems.value = rawRouters;
    console.log('[] => leftItems.value', leftItems.value)
}

// 生命周期
onMounted(() => {
    console.log('mounted');
    
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});
</script>
<style lang="scss">
.el-header {
    padding: 0!important;
}
</style>