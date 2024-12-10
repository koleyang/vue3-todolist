<template>
    <div>
      <!-- 以transition标签上的钩子函数来执行动画 -->
      <!-- <transition  钩子函数全
        :css="false"
        @before-enter="handleClick"
        @enter="handleClick"
        @after-enter="handleClick"
        @enter-cancelled="handleClick"
        @before-leave="handleClick"
        @leave="handleClick"
        @after-leave="handleClick"
      > -->
      <transition mode="out-in" appear>
        <div v-if="isAnimate" style="width: 600px; height: 28px; border: 1px solid red;">你好，动画</div>
        <div v-else style="width: 600px; height: 28px; border: 1px solid red;">拜拜，动画</div>
      </transition>
      <el-button type="primary" @click="handleChange">切换</el-button>
      
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
  
  let isAnimate = ref(true);
  let isAnimateFade = ref(false);
  
  
  const animate = reactive({
    transation: true,
    green: true,
    red: false,
  });

  const handleChange = () => {
    isAnimate.value = !isAnimate.value;
  };
  const handleClickFade = () => {
    isAnimateFade.value = !isAnimateFade.value;
  };
  const handleBeforeEnter = (el) => {
    console.log("before-enter", el); // el是transition标签包裹的当前要执行动画的元素
    el.style.color = "red";
  };
  const handleEnterActive = (el, done) => {
    console.log("enter-active", el);
    const animation = setInterval(() => {
      const color = el.style.color;
      if (color === "red") {
        el.style.color = "green";
      } else {
        el.style.color = "red";
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(animation)
      done();
    }, 3000)
    // el.style.color = "green";
    // done();
  };
  const handleAfterEnter = (el) => {
    console.log("after-enter", el);
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
      transition: opacity 2s ease-in;
    }
    .v-leave-to {
      opacity: 0;
    }

  </style>
  