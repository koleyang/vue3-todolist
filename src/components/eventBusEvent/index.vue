<template>
  <div>
    事件总线works.
    <el-button type="primary" @click="sendGlobalMessage">发送消息</el-button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

let store = useStore();


// 得到当前实例
const instance = getCurrentInstance();
const { $eventBus } = instance.appContext.config.globalProperties;

function sendGlobalMessage() {
    console.log('sendGlobalMessage print $eventBus', $eventBus);
    // 发送全局消息
    $eventBus.emit('globalMessage', { message: '全局广播' });
};

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