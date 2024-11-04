<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="用户" name="first">用户</el-tab-pane>
        <el-tab-pane label="配置" name="second">配置</el-tab-pane>
        <el-tab-pane label="角色" name="third">角色</el-tab-pane>
        <el-tab-pane label="任务" name="fourth">任务</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
    // msg: { type: String },
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