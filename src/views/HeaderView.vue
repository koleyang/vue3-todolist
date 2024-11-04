<template>
  <div>
    <el-menu
        :default-active="activeIndex.name"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0">
            <img
                width="35"
                height="35"
                :src="imgpath"
                alt="logo"
            />
        </el-menu-item>
        <el-menu-item :index="item.name" v-for="item in menus" :key="item.name">{{ item.meta.title }}</el-menu-item>
        <!-- <el-menu-item :index="item.name" v-for="item in menuItems" :key="item.name">{{ item.meta.title }}</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

let store = useStore();
// 使用defineProps()函数定义props属性menus
const { menus } = defineProps({
    menus: {
        type: Array,
        required: true // 声明 menus 属性为必需
    },
});
// const props = defineProps({
//     menus: {
//         type: Array,
//         required: true // 声明 menus 属性为必需
//     },
// });

// 得到当前实例
const instance = getCurrentInstance();

console.log('[全局路由对象] => router', router)
console.log('[当前路由对象] => route', route)

// 声明menuItems根据全局路由对象router的options.routes属性来生成, 通过ref()函数创建响应式对象，注意去掉name:'home'的根路由元素
// const menuItems = ref(router.options.routes[0].children.filter(item => item.name !== 'home').map(item => item));
// const menuItems = ref(router.options.routes.filter(item => item.name !== 'home').map(item => item));
// console.log('[当前路由对象] => menuItems', menuItems)

const imgpath = require('@/assets/imgs/logo.png');

// 从props中解构menus属性
// const { menus } = props;

const activeIndex = ref(menus[0]); // 默认选中第一个

// const activeIndex = ref(menuItems.value[0].name); // 默认选中第一个

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
    const rawMenus = toRaw(menus);
    rawMenus.forEach(item => {
        if (item.name === key) {
            console.log(item)
            instance.emit('routerChildrenEvent', item.children)  
            router.push({ name: key });
        }
    });
}
const findMenuItem = (name) => {
    let currentItem = null;
    
    const rawMenus = toRaw(menus);
    // instance.emit('routerChildrenEvent', activeIndex.value.children); // 传出第一个菜单的children给父组件处理
    // 遍历toRaw(menus)再遍历其元素内的children子集，从中找到跟当前路由toRaw(route)中的name匹配的菜单项，然后赋值给activeIndex
    rawMenus.forEach(item => {
        if (item.children) {
            item.children.forEach(child => {
                if (child.name === name) {
                    currentItem = item;
                }
            });
        }
    });
    return currentItem;
}
// 生命周期
onMounted(() => {
    console.log('mounted HeaderView 当前路由route', toRaw(route));
    console.log('mounted HeaderView 路由菜单menus', toRaw(menus));
    const rawRoute = toRaw(route);
    activeIndex.value = findMenuItem(rawRoute.name);
    // const rawRoute = toRaw(route);
    // const rawMenus = toRaw(menus);
    // // instance.emit('routerChildrenEvent', activeIndex.value.children); // 传出第一个菜单的children给父组件处理
    // // 遍历toRaw(menus)再遍历其元素内的children子集，从中找到跟当前路由toRaw(route)中的name匹配的菜单项，然后赋值给activeIndex
    // rawMenus.forEach(item => {
    //     if (item.children) {
    //         item.children.forEach(child => {
    //             if (child.name === rawRoute.name) {
    //                 activeIndex.value = item;
    //             }
    //         });
    //     }
    // });
    instance.emit('routerChildrenEvent', activeIndex.value.children); // 传出刷新后对应菜单的children给父组件处理
    
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});




</script>
<style lang="scss">
.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}
</style>