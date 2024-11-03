<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" v-for="(item, index) in leftItems" :key="index" @click="goToChildrenRoute(item)">
        <el-icon><icon-menu /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <!-- <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item> -->
    </el-menu>
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
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


const router = useRouter();
const route = useRoute();

let store = useStore();

// 得到当前实例
const instance = getCurrentInstance();

const { leftItems } = defineProps({
    leftItems: {
        type: Array,
        default: [],
        required: true,
    },
})

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const goToChildrenRoute = (item) => {
  console.log(item)
  router.push({ name: item.name })
}
// 生命周期
onMounted(() => {
  console.log("mounted");
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
  console.log("unmounted");
});
</script>
<style lang="scss">
.el-aside {
    background-color: #fff;
    color: #fff;
    text-align: center;
    line-height: 60px;
    height: calc(100vh - 76px);
}
.el-menu {
    height: calc(100vh - 76px);
}
</style>
