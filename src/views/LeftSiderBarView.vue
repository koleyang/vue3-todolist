<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" v-for="(item, index) in menus" :key="index" @click="goToChildrenRoute(item)">
        <el-icon><icon-menu /></el-icon>
        <!-- <pre>{{ item }}</pre> -->
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

const props = defineProps({
    leftItems: {
        type: Array,
        default: [],
    },
})

let menus = ref([]);

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
// watch监听leftItems的变化并赋值给menus
watch(() => props.leftItems, (newVal, oldVal) => {
  console.log("watch props.leftItems", newVal);
  menus.value = newVal;
});
// 生命周期
onMounted(() => {
  console.log("mounted props.leftItems", props.leftItems);
  menus.value = props.leftItems;
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
