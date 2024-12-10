<template>
    <div>
        <!-- css3关键帧动画子组件 -->
        <keyframes />
        <el-divider />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw, defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router';
  import keyframes from './component/keyframes';
//   import SlotName from './component/SlotName';
//   import SlotScoped from './component/SlotScoped';
//   import SlotScopedName from './component/SlotScopedName';
  
  defineComponent({
    components: { keyframes }
  });
  const router = useRouter();
  const route = useRoute();
  
  let store = useStore();
  
  const props = defineProps({
      msg: { type: String, default: '我是插值消息' },
  });
  // 得到当前实例
  const instance = getCurrentInstance();
  
  
  // 生命周期
  onMounted(() => {
      console.log('mounted');
      
  });
  // 卸载组件后执行的生命周期
  onUnmounted(() => {
      console.log('unmounted');
  });
  
  
  
  
  </script>
  <style lang="scss"></style>