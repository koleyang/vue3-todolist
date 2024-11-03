<template>
    <div>
      <h1>Hello, {{ name }}! You are {{ country }} {{ city }} people</h1> <!-- 显示传递的 name 属性 -->
      <!-- <button @click="increment">Count is: {{ count }}</button> -->
      <el-button @click="increment" type="primary">Count is: {{ count }}</el-button>
      <p>Doubled count: {{ doubledCount }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue';
  
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
    country: {
        type: String,
        required: true // 声明 name 属性为必需
    },
    city: {
        type: String,
        required: true // 声明 name 属性为必需
    },
  });
  
  // 响应式状态
  const count = ref(0);
  
  // 计算属性 对象
  const doubledCount = computed(() => count.value * props.num);
  
  // 方法
  function increment() {
    count.value++;
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
  </style>
