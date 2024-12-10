<template>
    <div>
        <!-- transition标签基础动画 -->
        <transition>
            <div v-show="isAnimate" class="blue" style="width: 600px; height: 28px; border: 1px solid red;">我是transition标签动画</div>
        </transition>
        <el-button type="primary" @click="handleClick">点击改变背景色3</el-button>
    </div>
  </template>
  
  <script setup>
  import {
    ref,
    reactive,
    computed,
    defineProps,
    onMounted,
    watch,
    onUnmounted,
    getCurrentInstance,
    defineEmits,
    toRaw,
    defineComponent,
  } from "vue";
  import { useStore } from "vuex";
  import { useRouter, useRoute } from "vue-router";
  
  defineComponent({
    components: {},
  });
  const router = useRouter();
  const route = useRoute();
  
  let store = useStore();
  
  const props = defineProps({
    msg: { type: String, default: "我是插值消息" },
  });
  // 得到当前实例
  const instance = getCurrentInstance();
  
  let isAnimate = ref(false);
  
  const animate = reactive({
    transation: true,
    green: true,
    red: false,
  });
  // 声明一个方法，用于改变背景颜色
  const handleClick = () => {
    isAnimate.value = !isAnimate.value;
  };
  // 生命周期
  onMounted(() => {
    console.log("mounted");
  });
  // 卸载组件后执行的生命周期
  onUnmounted(() => {
    console.log("unmounted");
  });
  </script>
  <style lang="scss" scoped>
    .v-enter-from {
        opacity: 0;
    }
    .v-enter-to {
        opacity: 1;
    }
    .v-enter-active, .v-leave-active {
        transition: opacity 1s ease-out;
    }
    .v-leave-to {
        opacity: 0;
    }
  </style>
  