<template>
    <div>
      <!-- transition动画和过渡执行顺序问题,哪个先哪个后的问题，type指定以什么为准，以短为准，以自定义持续时间为准 -->
      <transition 
        type="transition"
      >
        <div v-if="isAnimate" class="animated" style="width: 600px; height: 28px; border: 1px solid red;">切换</div>
      </transition>
      <el-button type="primary" @click="handleClick">以动画为准的执行顺序</el-button>
      <el-divider></el-divider>
      <transition 
        duration="6000"
      >
        <div v-if="isAnimate" class="animated" style="width: 600px; height: 28px; border: 1px solid red;">切换2</div>
      </transition>
      <el-button type="primary" @click="handleClick">自定义执行顺序</el-button>
      <el-divider></el-divider>
      <transition 
        duration="{enter: 3000, leave: 3000}"
      >
        <div v-if="isAnimate" class="animated" style="width: 600px; height: 28px; border: 1px solid red;">切换2</div>
      </transition>
      <el-button type="primary" @click="handleClick">自定义分步执行顺序</el-button>
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
    .v-enter-from {
        background-color: transparent;
    }
    .v-enter-to {
      background-color: red;
    }
    .v-enter-active, .v-leave-active {
        transition: background-color 2s;
    }

  </style>
  