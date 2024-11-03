<template>
    <div>
      <el-button @click="testEventHandler">测试</el-button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits } from 'vue';


  // 定义一个自定义事件
  const emits = defineEmits(['test']);
  
  // 得到当前实例
  const instance = getCurrentInstance();
  // console.log('instance', instance);
  
  function testEventHandler() {
      console.log('children -- testEventHandler');
      // 使用当前实例，发射一个事件
      // instance.emit('test', '我是TestView组件发射的事件');
      emits('test', '我是自定义事件子组件发射的事件消息');
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
  