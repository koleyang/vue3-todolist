<template>
  <div>
    我是TestView
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const $router = useRouter();
const $route = useRoute();
// 接收父组件传递的 props对象
const props = defineProps({
    name: {
        type: String,
        required: true // 声明 name 属性为必需
    },
    num: {
        type: Number,
        required: true
    },
});

// 得到当前实例
const instance = getCurrentInstance();
console.log('instance', instance);

// 响应式状态
const count = ref(0);

// 计算属性 对象
const doubledCount = computed(() => count.value * props.num);

// 方法
function increment() {
  count.value++;
}

// 计算属性 对象
let store = useStore();
// const doubledCount = computed(() => count.value * props.num);
let list = computed(() => store.state.list);

// 方法
function deleteHandler(item) {
    console.log('deleteHandler');
    // list.value = list.value.filter(item => !item.completed); // 过滤掉已完成的任务
    store.commit('deleteTodo', item.id);
}

function goTest() {
    $router.push({ name: 'test', params: { id: 123 } });
    // $router.push('/test'); path路径跳转方式简写
    // $router.push({ path: '/test' }); // 注意：path路径方式不能带参数params,query查询参数是可以的，name形式的跳转路由可以带参数params
    // 使用当前实例，发射一个事件
    instance.emit('test', '我是TestView组件发射的事件');
}
// 注意：路由参数的变化，可以通过watch监听$route对象的变化，也可以通过watch监听$route对象的params属性的变化
watch($router.currentRoute, (to, from) => {
    console.log('路由变化', to, from);
});
// 生命周期
onMounted(() => {
    console.log('mounted');
    // 接收路由参数
    console.log('Test组件接收路由参数1', $router.currentRoute.value.params);
    console.log('Test组件接收路由参数2', $router.currentRoute.value.params.name);
    console.log('Test组件接收路由参数3', JSON.parse($router.currentRoute.value.params.obj));
    console.log('Test组件接收路由参数4 -- $route.params', $route.params); // $route其实是$router.currentRoute.value的引用
    console.log('Test组件接收路由参数5 -- JSON.parse($route.params.obj)', $route.params.obj);
    console.log('Test组件接收路由参数6 -- JSON.parse($route.params.obj)._value', JSON.parse($route.params.obj)._value); // 如果传参是地址栏反序列化后的对象，则需要通过._value获取对象
    console.log('Test组件接收路由参数7 -- JSON.parse($route.params.obj).name', JSON.parse($route.params.obj)._value.name);
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});

// 路由要接收params参数，需要在路由配置中配置path: '/user/:id'才能有效接收params参数
// const routes = [
//   {
//     path: '/user/:id',
//     component: User,
//     name: 'user'
//   }
// ];

</script>
