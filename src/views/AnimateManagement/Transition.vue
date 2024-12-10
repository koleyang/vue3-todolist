<template>
  <div>
    <!-- vue3-transtion标签动画子组件 -->
    <transition-comp />
    <el-divider />
    <!-- vue3-transtion-keyframes标签动画子组件 -->
    <transition-keyframes-comp />
    <el-divider />
    <!-- <transition mode="out-in" name="" appear>
            <div>
                
            </div>
        </transition> -->
    <!-- transition标签上应用自定义样式类 -->
    <transition-class-comp />
    <el-divider />
    <!-- transition标签上动画和过渡执行属性问题 -->
    <transition-execution-order-comp />
    <el-divider />
    <!-- transition标签上事件钩子结合js函数执行动画的操作 -->
    <transition-js-execution-comp />
    <el-divider />
    <!-- transition标签多元素(或多组件)切换动画，哪个先哪个后 -->
    <transition-multiple-change-comp />
    <el-divider />
  </div>
</template>

<script setup>
import {
  ref,
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
import transitionComp from "./component/transitionComp";
import transitionKeyframesComp from "./component/transitionKeyframesComp";
import transitionClassComp from "./component/transitionClassComp";
import transitionExecutionOrderComp from "./component/transitionExecutionOrderComp";
import transitionJsExecutionComp from "./component/transitionJsExecutionComp";
import transitionMultipleChangeComp from "./component/transitionMultipleChangeComp";

defineComponent({
    components: { 
        transitionComp, 
        transitionKeyframesComp, 
        transitionClassComp, 
        transitionExecutionOrderComp, 
        transitionJsExecutionComp,
        transitionMultipleChangeComp
    },
});
const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
  msg: { type: String, default: "我是插值消息" },
});
// 得到当前实例
const instance = getCurrentInstance();

// 生命周期
onMounted(() => {
  console.log("mounted");
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
  console.log("unmounted");
});
</script>
<style lang="scss"></style>
