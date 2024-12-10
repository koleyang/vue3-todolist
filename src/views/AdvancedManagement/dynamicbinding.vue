<template>
  <div class="container">
    <!-- -->
    我是动态属性绑定页面
    <div :[name]="message" @[event]="changeMessage" class="div-style">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits, toRaw, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

let store = useStore();

const props = defineProps({
    msg: { type: String },
});
// 得到当前实例
const instance = getCurrentInstance();

const message = ref('hello world');
const name = ref('title');
const event = ref('click');
const changeMessage = () => {
    if (message.value === 'hello vue3') {
        message.value = 'hello world';
        return;
    }
    message.value = 'hello vue3';
}

// 生命周期
onMounted(() => {
    console.log('mounted');
    
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
});




</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .div-style {
        width: 600px; 
        height: 200px; 
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #fff;
        background-color: #409EFF;
    }
}
</style>