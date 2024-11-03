<template>
    <div>
      <!-- 循环list，渲染任务列表 -->
      <ul>
          <li v-for="item in list" :key="item.id">
            <input type="checkbox" v-model="item.completed" />
            <span :style="{ textDecoration: item.completed ? 'line-through' : 'none' }">{{ item.title }}</span>
            <el-button type="text" class="del" @click="deleteHandler(item)">删除</el-button>
          </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue';
  
  // 导入useStore
  import { useStore } from 'vuex';
  // 接收父组件传递的 props对象
  const props = defineProps({
    name: {
        type: String,
        required: true // 声明 name 属性为必需
    },
  });
  
  // 响应式状态
  const count = ref(0);
  // let list = ref([
  //   { id: 1, title: 'play', completed: false },
  //   { id: 2, title: 'study', completed: false },
  //   { id: 3, title: 'basketball', completed: false },
  //   { id: 4, title: 'swimming', completed: false },
  // ]);
  // 计算属性 对象
  let store = useStore();
  // const doubledCount = computed(() => count.value * props.num);
  let list = computed(() => store.state.list);
  // 方法
  function increment() {
    count.value++;
  }
  function deleteHandler(item) {
    console.log('deleteHandler');
    // list.value = list.value.filter(item => !item.completed); // 过滤掉已完成的任务
    store.commit('deleteTodo', item.id);
  }
  </script>
  
  <style scoped>
  button {
    margin: 10px;
    padding: 5px 10px;
    font-size: 16px;
  }
  
  h1 {
    color: #007BFF;
  }
  
  p {
    color: #333;
  }
  .del {
    color: red;
  }

  </style>
