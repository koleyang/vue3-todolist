<template>
  <div>
    <!-- <custom-event @test="testEventHandler"></custom-event>
    <event-bus-event></event-bus-event>
    {{ str }}
    <div>{{ receivedMessage }}</div> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch, onUnmounted, getCurrentInstance, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import CustomEvent from '@/components/customEvent';
import eventBusEvent from '@/components/eventBusEvent';

const router = useRouter();
const route = useRoute();

let str = ref('我是自定义事件组件');
let receivedMessage = ref('');

// 得到当前实例
const instance = getCurrentInstance();
const { $eventBus } = instance.appContext.config.globalProperties;


// 计算属性 对象
let store = useStore();


function testEventHandler(evt) {
    console.log('parent -- testEventHandler evt', evt);
    str.value += evt;
    console.log('parent -- testEventHandler str.value', str.value);
}

// 生命周期
onMounted(() => {
    console.log('mounted');
    
    $eventBus.on('globalMessage', (payload) => {
      receivedMessage.value = payload.message;
    });
});
// 卸载组件后执行的生命周期
onUnmounted(() => {
    console.log('unmounted');
    $eventBus.off('globalMessage', receivedMessage.value);
});

</script>
