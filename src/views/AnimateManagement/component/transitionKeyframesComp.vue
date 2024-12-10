<template>
    <div>
        <!-- transition标签基础动画 -->
        <transition>
            <div v-if="isAnimate" class="animated" style="width: 600px; height: 28px; border: 1px solid red;">我是transition标签和关键帧动画</div>
        </transition>
        <el-button type="primary" @click="handleClick">点击</el-button>
        <el-divider /> 
        <!-- 使用name命名transition标签 -->
        <transition name="fade">
            <div v-if="isAnimateFade" class="animated" style="width: 600px; height: 28px; border: 1px solid red;">我是transition标签和关键帧动画</div>
        </transition>
        <el-button type="primary" @click="handleClickFade">点击fade</el-button>
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
  let isAnimateFade = ref(false);
  
  const animate = reactive({
    transation: true,
    green: true,
    red: false,
  });

  const handleClick = () => {
    isAnimate.value = !isAnimate.value;
  };
  const handleClickFade = () => {
    isAnimateFade.value = !isAnimateFade.value;
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
    @keyframes move {
        0% {
          opacity: 0;
          transform: translateX(0);
        }
        100% {
          transform: translateX(100%);
          opacity: 1;
        }
    }
    //.v-enter-active, .v-leave-active {
        //animation: move 3s;
        //animation-fill-mode: forwards;
    //}
    .animated {
      &.v-enter-active, &.v-leave-active {
        animation: move 3s;
        animation-fill-mode: forwards;
      }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

  </style>
  