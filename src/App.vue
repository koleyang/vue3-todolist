<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <el-button type="text" @click="gotoAppointRouter">测试路由</el-button>
    <el-button type="text" @click="gotoCustomEvent">测试自定义事件</el-button>
  </nav> -->
  <router-view/>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

let obj = ref({
  name: 'testName',
  age: 18
});
const gotoAppointRouter = () => {
  console.log('gotoAppointRouter');
  // 跳转到指定路由
  // $router.push('/test');
  // $router.push({ name: 'test', params: { id: 123 } }); // 带参数跳转只能用name形式，要以path: '/test/:id'形式定义路由才能接收到参数id
  $router.push({ name: 'test', params: { name: 'testName', obj: JSON.stringify(obj) } }); // 带参数跳转只能用name形式
};
const gotoCustomEvent = () => {
  console.log('gotoCustomEvent');
  $router.push({ name: 'customEvent' });
};
</script>
<style lang="scss">
/* 设置html、body或*边距补白为0 */
html, body, * {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
