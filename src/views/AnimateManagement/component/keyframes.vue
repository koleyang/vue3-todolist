<template>
  <div>
    <!-- css3关键帧组件 -->
    <div :class="{leftToRight: isAnimate}" style="width: 600px; height: 28px; border: 1px solid red;">我是css3关键帧动画</div>
    <el-button type="primary" @click="forwordLeftToRight">点击运动</el-button>
    <el-divider></el-divider>
    <!-- css3过渡动画 -->
    <div :class="{transation: animate.transation, green: animate.green, red: animate.red}" style="width: 600px; height: 28px; border: 1px solid red;">我是css3过渡动画</div>
    <el-button type="primary" @click="changeColor">点击改变背景色</el-button>
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

const forwordLeftToRight = () => {
  isAnimate.value = true;
};
// 声明一个方法，用于改变背景颜色
const changeColor = () => {
  animate.green = !animate.green;
  animate.red = !animate.red;
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
@keyframes leftToRight {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(306px);
  }
}
.leftToRight {
  animation: leftToRight 2s;
  animation-fill-mode: forwards; // 保留动画完成后的样式
}

.transation {
  transition: background-color 2s ease;
}
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
